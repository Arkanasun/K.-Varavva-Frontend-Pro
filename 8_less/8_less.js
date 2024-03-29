
function addSum(value){
    let number = 0;
    function addNumber(num){
        return number += num;
    }
    return addNumber;
}
const sum = addSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
