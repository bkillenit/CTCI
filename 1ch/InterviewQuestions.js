// isUnique: implement an algorithm to determine if a string has all unique characters.
// try only using data structures covered in this chapter.
// O(N) runtime where N is the length of the string.
var isUnique = function( str ) {
	var strArray = str.split('');
	var charHash = {};

	strArray.forEach(function( char ) {
		if( charHash[char] !== undefined ) return false;
		else charHash[char] = true;
	});

	return true;
};