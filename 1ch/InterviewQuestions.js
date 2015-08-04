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
// assume x = str1.length and y = str2.length and n = 2 strings
// we get O(x + y) hashes and O(max(x,y)) lookups giving O(max(x,y)) runtime.
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

// write a method to replace all spaces in a string with %20, assume the string has sufficient space to hold the extra chars
// and that you know the true length of the string. Also, assume the str is already a char array.
var URLify = function( charArray ) {
	charArray.forEach(function( char, index ) {
		if(char === " ") charArray[index] = "%20";
	});

	return charArray.join('');
};

// given a string, write a function to determine if the word is a permutation of a palindrome. Does not matter if the palindrome is an acutal
// dictionary word. A permutation in this case is a rearrangement of letters.
// Runtime: O(n) + O(n) = O(2n) or O(n) worse case. Best Case O(n) + O(2) = O(n+2) or O(n)
var palinPerm = function( str ) {
	var charArray = str.split('');
	var charCountHash = {};

	// hash the count of how many times a character appears in the string array
	charArray.forEach(function( char ) {
		if( charCountHash[char] === undefined ) charCountHash[char] = 1;
		else charCountHash[char] += 1;
	});

	var numOdds = 0;

	// each palindrome has a unique property that if it has 1 odd count of characters, it is an odd length palindrome and if it has no odd
	// count of characters it is an even length palindrome. If there are 2 or more odd counts of characters, the string cannot be a permutation
	// of a palindrome.
	Object.keys(charHashCount).forEach(function( char ) {
		if( charHashCount[char] % 2 === 1 ) numOdds += 1;
		if( numOdds === 2 ) return false;
	});

	return true;
};

// there are three types of edits that can be performed on strings, insert a character, remove a character, or replace a character.
// given two strings, check if they are on edit (or zero) away.
var oneAway = function( str1, str2 ) {
	// if the strings are equal, return true and halt execution of the algorithm.
	if(str1 == str2) return true;

	var countChars = function( str ) {
		var charArray = str.split('');
		var charCountHash = {};

		// hash the count of how many times a character appears in the string array
		charArray.forEach(function( char ) {
			if( charCountHash[char] === undefined ) charCountHash[char] = 1;
			else charCountHash[char] += 1;
		});

		return charCountHash;
	}

	var findDiffBetweenStringHashes = function( str1Hash, str2Hash ){
		var answer = 0;

		Object.keys(str1Hash).forEach(function( char ){
			if( str1Hash[char] !== str2Hash[char] ) answer += 1;
		});

		return answer;
	};

	var str1Hash = countChars( str1 );
	var str2Hash = countChars( str2 );
	var difCharCounts = findDiffBetweenStringHashes( str1Hash, str2Hash );
	diffCharCounts += findDiffBetweenStringHashes( str2Hash, str1Hash );

	if( diffCharCounts < 2 ) return true;
	else if( diffCharCounts === 2 )
		// if there are two different char counts but the length of the two strings are equivalent,
		// then we are one character replacement away
		if( str1.length === str2.length ) return true;
		else return false;
	else return false;
};