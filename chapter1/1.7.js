/*Exercise 1.7.  The good-enough? test used in computing square roots will not be very effective for finding the square roots of very small numbers. Also, in real computers, arithmetic operations are almost always performed with limited precision. This makes our test inadequate for very large numbers. Explain these statements, with examples showing how the test fails for small and large numbers. 

/*For large numbers, the program enters an infinite loop. The larger the number is, the more accurate the guess needs to be to satisfy goodEnough (for example, when finding the square root of 100, a guess of 9.9999 would satisfy good enough (with a difference of 0.0001999) and be rounded up to 10. On the other hand, when finding the square root of 1,000,000, a guess of similar accuracy (999.99999) would not satisfy goodEnough (with a difference of 0.01999999), even though it would be rounded up to the correct answer. Since the interpreter has a limited accuracy, once the numbers become big enough, the answers returned by improve will stop changing before goodEnough can be satisfied, leading to the infinite loop.

For small numbers, the number may be less than the specified tolerance, so the program will return a very wrong value.

An alternative strategy for implementing good-enough? is to watch how guess changes from one iteration to the next and to stop when the change is a very small fraction of the guess. Design a square-root procedure that uses this kind of end test. Does this work better for small and large numbers?*/

function newSquareRoot(num) {
    function average(num1, num2) {
        return (num1 + num2) / 2;
    }
    
    function squareRootIter(guess) {
        if (goodEnough(guess, improve(guess))) {
            return Math.round(improve(guess) * 1000) / 1000;
        } else {
            return squareRootIter(improve(guess));
        }
    }
    
    function goodEnough(guess1, guess2) {
        return (guess1 / guess2) >= 0.999 && (guess1/guess2) <= 1.001;
    }
    
    function improve(guess) {
        return average(guess, num/guess);
    }
    
    return squareRootIter(1);
}

/*That makes it possible to compute the square roots of very large numbers. It works because it stops running the improvement once the values stop changing a lot, so the machine never runs into the problem it faces with the original function. The new function works with very small numbers also, if the tolerance is increased. 