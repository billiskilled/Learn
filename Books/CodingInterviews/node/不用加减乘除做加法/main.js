function Add(num1, num2)
{
    let a;
    let b;
    do {
        a = num1 ^ num2;
        b = (num1 & num2) << 1;

        num1 = a;
        num2 = b;
    } while (b);
    return a;
}
module.exports = {
    Add : Add
};