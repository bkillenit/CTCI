// import ArrayList.js

// sentArray is an ArrayList that resizes when necessary
var concatElements = function( elems, sentArray) {
	elems.forEach( function(elem){
		if(typeof elem === 'string') sentArray.add( elem.split('') );
		else if( Array.isArray(elem) ) sentArray.add( concatElements( elem, sentArray ) );
	});

	return sentArray;
}

var StringBuffer = function() {
	if( arguments === undefined ) return;

	var args = Array.prototype.call.slice( arguments );

	var sentenceArray = concatElements( args, new ArrayList() );

	return sentArray.join();
}