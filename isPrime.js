// ##isPrime(num)
// Create a function to return `true` or `false` if a number passed in a prime number.

var isPrime = function (n) {
	for (var i = 2; i <= (n-1); i++) {
		if (n % i === 0) {
			return false;
		}

	}
	return true;
};

var input = 20
var result = isPrime(input);
console.log(result);


// //will return true if prime number
// //will return false if composite number
// all prime numbers are odd

