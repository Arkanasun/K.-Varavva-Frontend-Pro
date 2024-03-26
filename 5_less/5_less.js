const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let multi = 1;
let maxNumber = array[0];
array.forEach(function (elem, i) {
    if (elem > 0) {
        return sum += i
    }
})
let max = Math.max.apply(null, [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]);
let min = Math.min.apply(null, [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]);
let negative = array.filter(i => (i < 0));
let even = array.filter(function (item) {
    return item > 0 && item % 2 === 0;
});
let odd = array.filter(function (item) {
    return item > 0 && item % 2 !== 0;
});
let sumOdd = array.filter(function (item) {
    return item > 0 && item % 2 !== 0
}).reduce(function (accum, current) {
    return accum + current;
}, 0);
let sumEven = array.filter(function (item) {
    return item > 0 && item % 2 === 0
}).reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);
maxNumber = array.reduce((acc, current) => acc < current ? current : acc);
let res = array.map(element => element === maxNumber ? element : 0);
array.forEach(function (item) {
    if (item > 0) {
        return multi *= item
    }
})
let positive = array.filter(i => (i > 0));
console.log(sum, positive.length, max, min, negative.length, even.length, odd.length, sumOdd, sumEven, multi, res)


