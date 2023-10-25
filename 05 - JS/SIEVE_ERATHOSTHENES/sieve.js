/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

var sieve = function (n) {
    "use strict";

    var array = new Array(n + 1).fill(true);
    var primes = [];

    for (var p = 2; p * p <= n; p++) {
        if (array[p] === true) {
            for (var i = p * p; i <= n; i += p) {
                array[i] = false;
            }
        }
    }

    for (var i = 2; i <= n; i++) {
        if (array[i] === true) {
            primes.push(i);
        }
    }

    return primes;
};

console.log(sieve(1000000));
