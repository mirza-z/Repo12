//                  Fibonacci Array             //
// Only change code below this line
function sumFibonacci(num){
    if(num==1) return 1;
    if(num<1) return 0;
    var sum = 0, fib = [1 , 1];
    for(let i = 2; i <= num; i++){
        if(fib[i-1]+fib[i-2] > num){
            break;
        }
        fib.push(fib[i-1]+fib[i-2]);
    }
    for(let i=0; i < fib.length; i++){
        if(fib[i] % 2 == 1){
            sum += fib[i];
        }
    }
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(0)); // Change this line
module.exports = sumFibonacci;