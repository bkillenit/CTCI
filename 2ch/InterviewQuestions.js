// write code to remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is
// not allowed?
// Worse case: O( n + (n - 1 ) + ( n - 2 ) ... 2 + 1 ) reduces to O( (n*(n+1))/2 ) which finally reduces to O(n^2) iterations
// Best case: O(n)
var removeDups = function( linkedList ) {
	var pointer = linkedList.head;
	var dupPointer = pointer.next;

	while( pointer.next !== null ) {
		while( dupPointer.data !== null ) {
			if( dupPointer.data === pointer.data ) linkedList.deleteNode(dupPointer);
			else dupPointer = dupPointer.next;
		}

		pointer = pointer.next;
		dupPointer = pointer.next;
	}

	return linkedList;
}

// implement an algorithm to find the kth to last element of a singly linked list
// worse case: O(2n) which reduces to O(n)
var kthToLast = function( linkedList, kth ) {
	var elems = 0;
	var pointer = linkedList;

	while( pointer !== null ) {
		pointer = pointer.next;
		elems += 1;
	}

	var elemPos = elems - kth;
	pointer = linkedList;
	var pos = 0;

	if( elemPos >= 0 ) {
		while( pointer !== null ) {
			if( pos === elemPos ) return pointer.data;
			else {
				pointer = pointer.next;
				pos += 1;
			}
		}
	}
}

// implement an algorithm to delete a node in the middle of a singly linked, given only access to that node
var delMiddleNode = function( midNode ) {
	var pointer = midNode;

	while( pointer !== null ) {
		pointer.data = pointer.next.data;
		if( pointer.next.next === null ) pointer.next = null;
		pointer = pointer.next;
	}
}

// write code to partition a linked list around a value x such that all values before x are nodes before x and all values,
// after x are nodes after x
var partition = function( linkedList, partitionVal ) {
	var lessThan = new LinkedList();
	var greaterThan = new LinkedList();
	var pointer = linkedList.head;

	while( pointer !== null ) {
		var data = pointer.data;
		if( pointer.data > partitionVal ) greaterThan.add( data );
		else if( pointer.data === partitionVal ) lessThan.add( data );
		else	lessThan.addFirst( data );
	}

	lessThan.tail.next = greaterThan.head;

	return lessThan;
}

// you have been given a linked list, where each node contains a single digit. The digits are stored in reverse order. Write code that adds the
// numbers and returns the sum as a linked list.
// ex. (7 - 1 - 6) + (5 - 9 - 2) = 617 + 295 = 912
var sumLists = function( list1, list2 ) {
	var answer = new LinkedList();
	var carry = 0;

	var updateSum = function( list ) {
		if( list !== null ) {
			list = list.next;
			return list.data;
		}
	}

	while( (list1 !== null ) || (list2 !== null) ) {
		var sum = carry;
		carry = 0;

		sum += updateSum( list1 );
		sum += updateSum( list2 );

		if( (sum / 10) > 0) carry = 1;

		answer.add( (sum % 10) );
 }

	return answer;
}