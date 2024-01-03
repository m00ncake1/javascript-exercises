const palindromes = function (word) {
    // edge cases
    word = word.toLowerCase();
    let reg = /\W/g
    word = word.replaceAll(reg, "").toLowerCase();
    
    // basic logic
    let start = 0
    let end = word.length-1;

    while (start<end){
        console.log(`${word[start]} and ${word[end]}`)
        if (word[start]!=word[end]){
            return false;
        }
        start++;
        end--;
    } 
    return true;
};

console.log(palindromes("'A car, a man, a maraca.'"))
// Do not edit below this line
module.exports = palindromes;
