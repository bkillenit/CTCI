// will be using es6 class syntax, compatible with JavaScript 1.7 on.

class LinkedList {
	var head;

	constructor( elem ) {
		if( elem === undefined ) throw new "data for the linked list not provided";

		head = new Node( elem );

		var otherElems = Array.prototype.call.slice(arguments).slice(1);
		otherElems.forEach(function( elem ){
			head.appendToTail( elem );
		});
	}

	add( data ) {
		head.appendToTail( data );
	}

	deleteNode( node ) {
		if( node.data === undefined ) return;
		if( head.data === node.data ) {
			head = head.next;
			return;
		}

		var nodePointer = head;

		while( nodePointer.next !== null ) {
			if( nodePointer.next === node.data ) {
				var nextNode = nodePointer.next;
				nodePointer.next = nextNode.next;
			}
		}
	}
}