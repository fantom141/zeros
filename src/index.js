module.exports = function getZerosCount(number) {

    function fact(zeroCount, val, fac) {
        if (Math.round(val / fac) >= 1) {
            zeroCount += ((val - (val % fac)) / fac);
            return fact(zeroCount, val, fac * 5);
        }
        return zeroCount;
    }

    return fact(0, number, 5);
}
