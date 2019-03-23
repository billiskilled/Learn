function Sum_Solution(n)
{
    let ans = n;
    ans && (ans += Sum_Solution(n - 1));
    return ans;
}
module.exports = {
    Sum_Solution : Sum_Solution
};