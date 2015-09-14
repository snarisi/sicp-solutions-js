/*Exercise 1.5.  Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He defines the following two procedures:*/


var p = p;

function test (x,y) {
    if (x === 0) {
        return 0;
    } else {
        return y;
    }
}

/*Then he evaluates the expression*/

test(0, p);

/*What behavior will Ben observe with an interpreter that uses applicative-order evaluation? What behavior will he observe with an interpreter that uses normal-order evaluation? Explain your answer. (Assume that the evaluation rule for the special form if is the same whether the interpreter is using normal or applicative order: The predicate expression is evaluated first, and the result determines whether to evaluate the consequent or the alternative expression.)*/

/*With an interpreter that uses applicative order evaluation, the machine would throw an error or return nothing becuase p is undefined.