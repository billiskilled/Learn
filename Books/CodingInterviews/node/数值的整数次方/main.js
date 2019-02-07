function Power(base, exponent)
{
    if (base === 0 && exponent < 0) {
        return 0;
    }
    let isNegative = false;
    if (exponent < 0) {
        isNegative = true;
        exponent = -exponent;
    }
    if (isNegative) {
        return 1/PowerSimple(base, exponent);
    } else {
        return PowerSimple(base, exponent);
    }
}
function PowerSimple(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    if (exponent & 1 === 1) {
        return PowerSimple(base, (exponent - 1) >> 1) * PowerSimple(base, (exponent - 1) >> 1) * base;
    } else {
        return PowerSimple(base, exponent >> 1) * PowerSimple(base, exponent >> 1);
    }
}
// console.log(Power(2, 18));
module.exports = {
    Power : Power
};