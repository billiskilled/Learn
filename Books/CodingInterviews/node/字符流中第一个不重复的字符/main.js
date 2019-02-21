//Init module if you need
function Init()
{
    global.result = [];
    return global.result;
}
//Insert one char from stringstream
function Insert(ch)
{
    if (result[ch]) {
        result[ch]++;
    } else {
        result[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for (let i in result) {
        if (result[i] === 1) {
            return i;
        }
    }
    return '#';
}

module.exports = {
	Init : Init,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};