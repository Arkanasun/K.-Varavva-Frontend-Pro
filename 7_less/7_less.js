function powNumber (num, degree){
    return degree === 1 ? num : num * powNumber(num, degree - 1);
}
const result = powNumber(2, 8);

console.log(result)