const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let positive = 0;
let max = 0;
let min = 0;
let negative = 0;
let odd = 0;
let even = 0;
let sumOdd = 0;
let sumEven = 0;
let multi = 1;
let maximum = array[0];
let res = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += i;
        positive = array.filter(i => (i > 0));
        multi *= array[i];
    }
    if (array[i] > maximum) {
        maximum = array[i];
    }
    res = array.map(value => maximum !== value ? 0 : value);
    max = Math.max.apply(null, [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]);
    min = Math.min.apply(null, [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]);
    negative = array.filter(i => (i < 0));
    even = array.filter(function (item) {
        return item > 0 && item % 2 === 0;
    });
    odd = array.filter(function (item) {
        return item > 0 && item % 2 !== 0;
    });
    sumOdd = array.filter(function (item) {
        return item > 0 && item % 2 !== 0
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0);
    sumEven = array.filter(function (item) {
        return item > 0 && item % 2 === 0
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0);
}
console.log(sum, positive.length, max, min, negative.length, even.length, odd.length, sumOdd, sumEven, multi, res)


