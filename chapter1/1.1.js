/*Exercise 1.1.  Below is a sequence of expressions. What is the result printed by the interpreter in response to each expression? Assume that the sequence is to be evaluated in the order in which it is presented.*/

10;
//10

(5 + 3 + 4);
//12

(9 - 1);
//8

(6 / 2);
//3

((2 * 4) + (4 - 6));
//6

var a = 3;
//3

var b = a + 1;
//4

(a + b + (a * b));
//19

a === b;
//false

if ((b > a) && (b < a * b)) {
    b;
} else {
    a;
}
//4

if (a === 4) {
    return 6;
} else if (b === 4) {
    return 6 + 7 + a;
} else {
    return 25;
}
//16

(2 + (b > a ? b : a));
//5

if (a > b) { 
    (a + 1) * a;
} else if (a < b) {
    (a + 1) * b;
} else {
    (a + 1) * -1;
}
//16