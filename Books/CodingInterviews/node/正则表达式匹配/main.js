//s, pattern都是字符串
function match(s, pattern)
{
    if (s === null || pattern === null) return false;

    return matchCore(s, 0, pattern, 0);
}

function matchCore(s, sIndex, pattern, pIndex) {
    if (sIndex === s.length && pIndex === pattern.length) return true;
    if (sIndex !== s.length && pIndex === pattern.length) return false;

    if (pattern[pIndex + 1] === '*') {
        if (s[sIndex] === pattern[pIndex] || (pattern[pIndex] === '.' && sIndex < s.length)) {
            return matchCore(s, sIndex + 1, pattern, pIndex) || matchCore(s, sIndex + 1, pattern, pIndex + 2) || matchCore(s, sIndex, pattern, pIndex + 2);
        } else {
            return matchCore(s, sIndex, pattern, pIndex + 2);
        }
    }
    if (s[sIndex] === pattern[pIndex] || (pattern[pIndex] === '.')) {
        return matchCore(s, sIndex + 1, pattern, pIndex + 1);
    }
    return false;
}

module.exports = {
    match : match
};