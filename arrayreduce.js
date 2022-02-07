const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(result, item) {
    console.log(item, "=", result)

    return result + item;
}, 0);
console.log(sum); // 10