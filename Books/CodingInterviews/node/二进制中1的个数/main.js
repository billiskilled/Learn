function NumberOf1(n)
{
    let num = 0;
    let a = 1;
    while (a !== 0) {
        if ((n & a) !==  0) num += 1; 
        a = a << 1;
    }
    return num;
}
module.exports = {
    NumberOf1 : NumberOf1
};