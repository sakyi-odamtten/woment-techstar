//calculate the factorial of a number 
function factorial(digit){
    if (digit <= 0){
        return 1;
    }
    return digit * factorial(digit - 1);
}
let result =  factorial(6);
console.log ('the factorial is', result);