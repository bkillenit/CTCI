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

// given two strings, write a method to decide if one is a permutation of the other
var checkPermutation = function( str1, str2 ) {
	function hashCharCountForString( str ) {
		var charHash = {};
		var strArray = str.split('');

		strArray.forEach(function( char ) {
			if( charHash[char] === undefined ) charHash[char] = 1;
			else charHash[char] += 1;
		});

		return charHash;
	}

	function checkCharHash( charHash1, charHash2, keysChecked = [] ) {
		Object.keys(charHash).forEach(function( key ) {
			if( !(key in keysChecked) )
				if( charHash1[key] != charHash2[key] ) return false;
				else keysChecked.push(key);
		});

		return true;
	}

	var charHash1 = hashCharCountForString(str1);
	var charHash2 = hashCharCountForString(str2);
	var keysChecked = [];

	return ( checkCharHash(charHash1 , charHash2, keysChecked) && checkCharHash(charHash2, charHash1, keysChecked) );
};