// write code to remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is
// not allowed?
// Worse case: O( (n - 1 ) + ( n - 2 ) ... 2 + 1 ) reduces to O( (n*(n+1))/2 ) which finally reduces to O(n^2) iterations
// Best case: O(n - 1) or simply O(n)
var removeDups = function( linkedList ) {
	var pointer = linkedList.head;
	var dupPointer = pointer.next;

	while( pointer.next !== null ) {
		while( dupPointer.data !== null ) {
			if( dupPointer.data === pointer.data ) linkedList.deleteNode(dupPointer);
			else dupPointer = dupPointer.next;
		}

		pointer = pointer.next;
	}

	return linkedList;
}