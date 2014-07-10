// ##numSquare(max)
// Create a function called `numSquare` that will return an array of all perfect square numbers up to, 
// but not exceeding a max number.

var maxNum = 25

var numSquare = function(maxSq) {
	var i = 1;						//perfect square "i" initializes it as 1
	var j = 1;						//initialize "j" as a counter
	var arrPerSq = []				//Created an empty array
	while(i <= maxSq) {				//While the perfect square "i" is less than the maxSq
		arrPerSq.push(i);			//Push the perfect square "i" to the array
		j++;						//Increment "j"
		i = j * j;					//New perfect square (i) is the product of "j * j"
	}
	return arrPerSq;				//Return my array
}
var result = numSquare(maxNum);		//Call my function and store the result as "result"
console.log("The array of all perfect squares is " + result + ".");		//Print my result

