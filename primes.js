//***
// ##primes(max)
// Using your `isPrime()` function, create a function `primes` that will return an array of 
// all prime numbers up to a certain amount.

var maxNum = 25

var primeArr = []

var isPrime = function (n) {
	for (var i = 2; i <= (n-1); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

var primes = function (maxPrime) {
	for (var i = 1; i <= maxPrime; i++) {
		if (isPrime(i) ) {
			primeArr.push(i);
		}	
	}
	return primeArr;
}		

var result = primes(maxNum);
console.log(result);

