//check if number is even
function detectod(digit){
    let result = (digit % 2 === 0) ? "number is even": "number is odd";
    console.log(result)
}
detectod(34);

//print number from first input to second input number
function print(digit1, digit2){
    let straight = "";
    for (let i = digit1; i <= digit2; i++){
        straight = straight + i + " ";
    }
    console.log (straight)
}
print(3, 9);

//sum num between two values
function calcfunc(digit1, digit2){
    let sum = 0;
    for (let i = digit1; i <= digit2; i++){
        sum +=i;        
    }
    console.log (sum)
    
}
calcfunc(1,8);