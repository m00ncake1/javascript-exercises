const fibonacci = function(number) {
    number = Number(number);
    if (number<0) return "OOPS";
    if (number===0) return 0;
    if (number===1) return 1;

    let fib = new Array(number);
    fib[0] = 1;
    fib[1] = 1;

    for (let i = 2; i< number; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib[(number-1)]
};

// Do not edit below this line
module.exports = fibonacci;
