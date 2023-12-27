const reverseString = function(word) {
    if (!word){
        return "";
    }
    word= String(word)
    let reversed = [...word].reduce( (build, prevLetter) =>prevLetter + build)
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
