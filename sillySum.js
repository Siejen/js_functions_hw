//##sillySum(arr)
// Write a function that takes an array of numbers, and returns the total sum of each number multiplied by its index. 

// `count += (number * index)`

// var arrNum = [2, 4, 6, 8]; (Setup array originally above the function to visually)

var sillySum = function(array) {
	var arrNumMultiply = 0;                     	//var arrNumMultiply is a local variable
	for (var i=0; i < array.length; i++) {			//var i is also a local variable and a loop variable
		arrNumMultiply += (array[i] * i);			//same as arrNumMultiply = arrNumMultiply + (array[i] * i)
	}
	return arrNumMultiply;							//returning arrNumMultiply from the function
}

var arrNum = [2, 4, 6, 8];
var result = sillySum(arrNum);

console.log(result);

