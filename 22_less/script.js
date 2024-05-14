function createBooIterator() {
    console.log('start');

    let index = 0;
    const values = [1, 2, 3, 4, 5];
    const length = values.length;

    return {
        next: function() {
            if (index < length) {
                return { value: values[index++], done: false };
            } else {
                console.log('finish');
                return { done: true };
            }
        }
    };
}

const iterator = createBooIterator();

console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);