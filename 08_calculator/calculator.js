const add = function(a, b=0) {
  if (!typeof(a) ==="number"){
    let ans = a.reduce((x,y) =>{Number(x) + Number(y)})
    return ans
  }
  return (Number(a) + Number(b))
};

const subtract = function(a,b) {
  if (!typeof(a) ==="number"){
    let ans = a.reduce((x,y) =>{Number(x) - Number(y)})
    return ans
  }
  return (Number(a) - Number(b))
};

const sum = function(a,b) {
  if (!typeof(a) ==="number"){
    let ans = a.reduce((x,y) =>{Number(x) + Number(y)})
    return ans
  }
  return (Number(a) + Number(b))
};

const multiply = function(a,b) {
  if (!typeof(a) ==="number"){
    let ans = a.reduce((x,y) =>{Number(x) * Number(y)})
    return Number(ans)
  }
  return (Number(a) *Number(b))
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {
  if (a === 0){
    return 1
  }
  let ans = a;
  for (let i =(a-1); a>0; i--){
    ans*=i;
  }
	return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
