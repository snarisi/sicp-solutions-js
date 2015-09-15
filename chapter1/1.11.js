/*
Exercise 1.11.  A function f is defined by the rule that f(n) = n if n<3 and f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n> 3. Write a procedure that computes f by means of a recursive process. Write a procedure that computes f by means of an iterative process.
*/

//recursive
function f(n) {
  if (n < 3) {
    return n;
  } else {
    return f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
  }
}

/*
evaluates to, for example
f(6)
f(5) + 2*f(4) + 3*f(3)
f(4) + 2*f(3) + 3*f(2) + 2*(f(3) + 2*f(2) + 3*f(1)) + 3*(f(2) + 2*f(1) + 3*f(0))

f(3) + 2*f(2) + 3*f(1) + 2*(f(2) + 2*f(1) + 3*f(0)) + 3*2 + 2*(f(2) + 2*f(1) + 3f(0) + 2*2 + 3*1) + 3*(2 + 2*1 + 3*0)

f(2) + 2*f(1) + 3*f(0) + 4 + 3 + 8 + 6 + 22 + 12

2 + 2 + 4 + 3 + 8 + 6 + 22 + 12

59
*/

//iterative
function f(n) {
  
  function iter(a, b, c, n) {
    if (n === 2) {
      return a;
    } else if (n === 1) {
      return b;
    } else if (n === 0) {
      return c;
    } else {
      iter((a + 2 * b + 3 * c), a, b, (n - 1));
    }
  }
  iter(2, 1, 0, n);
}

/*
evaluates to, for example
f(6)
iter(2, 1, 0, 6)
iter((2 + 2*1 + 3*0), 2, 1, 5) = iter(4, 2, 1, 5)
iter((4 + 2*2 + 3*1), 4, 2, 4) = iter(11, 4, 2, 4)
iter((11 + 2*4 + 3*2), 11, 4, 3) = iter(25, 11, 4, 3)
iter((25 + 2*11 + 3*4), 25, 11, 2) = iter(59, 25, 11, 2)
59
*/