/*Exercise 1.8.  Newton's method for cube roots is based on the fact that if y is an approximation to the cube root of x, then a better approximation is given by the value

((x / y^2) + 2y) / 3

Use this formula to implement a cube-root procedure analogous to the square-root procedure. (In section 1.3.4 we will see how to implement Newton's method in general as an abstraction of these square-root and cube-root procedures.)*/

function cubeRoot(num) {
    
    function cubeRootIter(num, guess) {
        console.log(guess);
        if (goodEnough(num, guess)) {
            return Math.round(guess * 10000) / 10000;
        } else {
            return cubeRootIter(num, improve(num, guess));
        }
    }
    
    function goodEnough(num, guess) {
        return Math.abs(num - Math.pow(guess, 3)) < 0.0001;
    }
    
    function improve(num, guess) {
        return ((num / (guess * guess)) + (2 * guess)) / 3;
    }
    
    return cubeRootIter(num, 1);
}