/*
Exercise 1.16.  Design a procedure that evolves an iterative exponentiation process that uses successive squaring and uses a logarithmic number of steps, as does fast-expt. (Hint: Using the observation that (b^n/2)^2 = (b^2)^n/2, keep, along with the exponent n and the base b, an additional state variable a, and define the state transformation in such a way that the product a b^n is unchanged from state to state. At the beginning of the process a is taken to be 1, and the answer is given by the value of a at the end of the process. In general, the technique of defining an invariant quantity that remains unchanged from state to state is a powerful way to think about the design of iterative algorithms.)
*/

function expt(b, n) {
  
  exptIter(b, n, 1);

  function exptIter(b, n, a) {
    if (n === 0) {
      return 1;
    } else if (n % 2 === 0) {
      return exptIter(b * b, n / 2, a);
    } else {
      return exptIter(b, n - 1, a * b);
    }
  }
}

/*
evaluates to, for example
expt(3, 4)
exptIter(3, 4, 1)
exptIter(9, 2, 1)
exptIter(81, 1, 1)
exptIter(81, 0, 81)
81


expt(3, 5)
exptIter(3, 5, 1)
exptIter(3, 4, 3)
exptIter(9, 2, 3)
exptIter(81, 1, 3)
exptIter(81, 0, 243)
243



*/