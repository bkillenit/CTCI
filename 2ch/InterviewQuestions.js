// write code to remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is
// not allowed?
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