/*Exercise 1.6.  Alyssa P. Hacker doesn't see why if needs to be provided as a special form. ``Why can't I just define it as an ordinary procedure in terms of cond?'' she asks. Alyssa's friend Eva Lu Ator claims this can indeed be done, and she defines a new version of if:*/

function newIf (predicate, thenClause, elseClause) {
    if (predicate) {
        return thenClause;
    } else {
        return elseClause;
    }
}

/*Eva demonstrates the program for Alyssa:*/

newIf((2 === 3), 0, 5);
//5

newIf(1 === 1, 0, 5);
//1

/*Delighted, Alyssa uses new-if to rewrite the square-root program:*/

function squareIter (guess, x) {
    newIf(goodEnough(guess, x), guess, squareIter(improve(guess, x), x));
}

/*What happens when Alyssa attempts to use this to compute square roots? Explain.*/

/*The result is stack overflow because both the thenClause and elseClause in newIf are always evaluated, unlike in a normal if statement.*/