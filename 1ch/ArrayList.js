// will be using es6 class syntax, compatible with JavaScript 1.7 on.

class ArrayList {
	constructor( firstArg ) {
		var args = Array.prototype.slice(arguments);

		if(typeof firstArg === 'number') {
			this.array = new Array(firstArg);
			args = args.slice(1);
		} else {
			this.array = new Array(10);
		}

		this.elements = 0;
		this.add(args);
	}

	add() {
		var args = Array.prototype.slice(arguments);

		if( !args ) return;

		args.forEach(function(elem){
			if( this.elements + 1 > this.array.length) doubleArraySize();

			this.array[this.elements] = elem;
			this.elements += 1;
		});
	}

	doubleArraySize() {
		var newArray = new Array(this.array.length * 2);

		for(var i = 0; i < this.elements; i++) {
			newArray[i] = this.array[i];
		}

		this.array = newArray;
	}
}