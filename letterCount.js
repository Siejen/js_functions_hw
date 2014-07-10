// ***
// ##letterCount(word)

// Write a function that takes a string that finds out how many times a character occurs.  For example, 
// the string "apple" would print the following:

// ```
// a - 1
// p - 2
// l - 1
// e - 1
// ```

// creating an object
// with keys a,p,l, and e
// with values (respectively) 1,2,1, and 1
// assigning that object to the variable histo
// var histo = { "a": 1, "p": 2, "l": 1, "e": 1 };

// __BONUS__: Make sure that lower case letters and upper case letters count for the same character.  Also, ignore spaces and punctuation.

var letterCount = function (s) {
	var histo = {};
	var array = s.split("");
	for (var i = 0; i < array.length; i++) {
		var key = array[i];
		if(key in histo) {
			histo[key] = histo[key] + 1;
		}
		else {
			histo[key] = 1
		}
	};
	return histo;
}



var input = "apple";
var result = letterCount(input);
console.log(result);