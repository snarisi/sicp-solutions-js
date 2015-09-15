/*
Exercise 1.18.  Using the results of exercises 1.16 and 1.17, devise a procedure that generates an iterative process for multiplying two integers in terms of adding, doubling, and halving and uses a logarithmic number of steps.
*/

function double(x) {
  return x * 2;
}

function halve(x) {
  return x / 2;
}

function mult(a, b) {
  function multIter(a, b, i) {
    if (b === 0) {
      return i;
    } else if (b % 2 === 0) {
      return multIter(double(a), halve(b), i);
    } else {
      return multIter(a, b - 1, i + a);
    }
  }
  
  if (b === 0) {
    return 0;
  } else {
    return multIter(a, b, 0);
  }
}

/*
evaluates to, for example:
mult(3, 5)
multIter(3, 5, 0)
multIter(3, 4, 3)
multIter(6, 2, 3)
multIter(12, 1, 3)
multIter(12, 0, 15)
15

mult(4, 6)
multIter(4, 6, 0)
multIter(8, 3, 0)
multIter(8, 2, 8)
multIter(16, 1, 8)
multIter(16, 0, 24)
24
*/