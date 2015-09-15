/*
Exercise 1.17.  The exponentiation algorithms in this section are based on performing exponentiation by means of repeated multiplication. In a similar way, one can perform integer multiplication by means of repeated addition. The following multiplication procedure (in which it is assumed that our language can only add, not multiply) is analogous to the expt procedure:
*/

(define (* a b)
  (if (= b 0)
      0
      (+ a (* a (- b 1)))))

function mult(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a + multiply(a, b - 1);
  }
}

/*
This algorithm takes a number of steps that is linear in b. Now suppose we include, together with addition, operations double, which doubles an integer, and halve, which divides an (even) integer by 2. Using these, design a multiplication procedure analogous to fast-expt that uses a logarithmic number of steps.
*/

function double(x) {
  return 2 * x;
}

function halve(x) {
  return x / 2;
}

function multLog(a, b) {
  if (b === 0) {
    return 0;
  } else if (b === 1) {
    return a;
  } else if (b % 2 === 0) {
    return double(multLog(a, halve(b)));
  } else {
    return a + multLog(a, b - 1);
  }
}

/*
evaluates to, for example:
multLog(3, 5)
3 + multLog(3, 4)
3 + double(multLog(3, 2))
3 + double(double(multLog(3, 1)))
3 + double(double(3))
3 + double(6)
3 + 12
15