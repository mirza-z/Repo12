//                  Range of Numbers                //
// Only change code below this line
function rangeOfNumbers(startN, endN){
    if(endN < startN){
        return "The starting number will always be less than or equal to the ending number"
    }
    if(startN - endN == 0){
        return [startN];
    } else{
        const array = rangeOfNumbers(startN, endN - 1);
        array.push(endN);
        return array;
    }
    
    
}
// Only change code above this line

console.log(rangeOfNumbers(3, 10)); // Change this line
module.exports = rangeOfNumbers;