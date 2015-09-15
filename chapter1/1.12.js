/*
Exercise 1.12.  The following pattern of numbers is called Pascal's triangle.

                1
              1   1
            1   2   1
          1   3   3   1
        1   4   6   4   1
      1   5   10  10  5   1  
               ...


The numbers at the edge of the triangle are all 1, and each number inside the triangle is the sum of the two numbers above it. Write a procedure that computes elements of Pascal's triangle by means of a recursive process.
*/

function pascal(row, col) {
  if (col > row || col === 0 || row === 0) {
    return 0;
  } else if (row === 1) {
    return 1;
  } else if (col === 1 || col === row) {
    return 1;
  } else {
    return pascal(row - 1, col - 1) + pascal(row - 1, col); 
  }
}

/*
evaulates to, for example
pascal(5, 4)
pascal(4, 3) + pascal(4, 4)
pascal(3, 2) + pascal(3, 3) + 1
pascal(2, 1) + pascal(2, 2) + 1 + 1
1 + 1 + 1 + 1
4

pascal(5, 3)
pascal(4, 2) + pascal(4, 3)
pascal(3, 1) + pascal(3, 2) + pascal(3, 2) + pascal(3, 3)
1 + pascal(2, 1) + pascal(2, 2) + pascal(2, 1) + pascal(2, 2) + 1
1 + 1 + 1 + 1 + 1 + 1
6
