// will be using es6 class syntax, compatible with JavaScript 1.7 on.

class HashTable {
	constructor( keys = 10 ){
		this.hashTable = [keys];
		this.length = 0;
	}

	add(elem) {
		var list = this.hashTable[this.hashFunction(elem) % this.hashTable.length];
		if( list )
			if(!(elem in list)) {
				list.push(elem);
				this.length += 1;
			}
		else {
			list = [elem];
			this.length += 1;
		}
	}

	getValFromKey( key ) {
		var value;
		var list = this.hashTable[ key % this.hashTable.length ];

		if( list ) {
			for(var i = 0; i < list.length; i++) {
				var elem = list[i];
				if( hashFunction(elem) === key ) {
					value = elem;
					break;
				}
			}
		}

		return value;
	}

	hashFunction(elem) {
		var elemArray = elem.toString().split("");
		var key = 0;

		elemArray.forEach(function(element) {
			key += element.charCodeAt(0);
		});

		return key;
	}

	each( func ) {
		this.hashTable.forEach(function(list){
			if( list ) {
				list.forEach(function( elem, index ){
					func(elem, index, list);
				});
			}
		});
	}
}