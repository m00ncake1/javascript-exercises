const repeatString = function(string, reps) {
    let accum = '';
    if (reps<0){
        return "ERROR";
    }
    for (let i=0; i<reps; i++){
        accum+=string;
    }

    return accum;
};

// Do not edit below this line
module.exports = repeatString;
