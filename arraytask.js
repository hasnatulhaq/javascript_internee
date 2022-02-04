let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//checking odd number 
const oddnumber = number.filter((checkodd) => {

    return checkodd % 2 !== 0;
})

console.log("odd number");
//checking even number
console.log(oddnumber);
const evennumber = number.filter((checkeven) => {
    checkeven = checkeven % 2 == 0;
    return checkeven;
})

console.log(evennumber);