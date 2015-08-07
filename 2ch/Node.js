// will be using es6 class syntax, compatible with JavaScript 1.7 on.

class Node {
	var data;
	var next = null;

	constructor( data, next ) {
		this.data = data;

		if( next !== undefined ) this.next = next;
	}

	appendToTail( data ) {
		if( next === null ) this.next = new Node( data );
		else next.appendToTail( data );
	}
}