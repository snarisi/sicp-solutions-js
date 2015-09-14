/*Exercise 1.3.  Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.*/

function sumBiggerSquares (num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return (num2 * num2) + (num3 * num3);
  } else if (num2 < num1 && num2 < num3) {
    return (num1 * num1) + (num3 * num3);
  } else {
    return (num1 * num1) + (num2 * num2);
  }
}