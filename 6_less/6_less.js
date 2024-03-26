let newArray;
const array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 5, 0];
function removeElement (array, key) {
    newArray = array.filter(item => item !== key);
}
removeElement(array, 5);
console.log(newArray);