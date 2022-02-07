///map method in array 

const numberarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newarr = numberarr.map((val, index) => {

    return val * index;
})


console.log(newarr);
console.log(numberarr);