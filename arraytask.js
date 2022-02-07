let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newArr = number.map((val, index) => {
    delete val;
    console.log(val, ":", index);
    return val;
})



//checking odd number 
const oddnumber = number.filter((checkodd) => {
    console.log(checkodd % 2 !== 0, "line no 7");
    return checkodd % 2 !== 0;
})
console.log("odd number");
console.log(oddnumber);

//cheking even number
const evennumber = number.filter((checkeven) => {
    checkeven = checkeven % 2 == 0;
    return checkeven;
})
console.log("even number");
console.log(evennumber);

//number divisble by 5
const divbyfive = number.filter((checknumber) => {
    checknumber = checknumber % 5 == 0;
    return checknumber;
})
console.log("divisible by 5");
console.log(divbyfive);
console.log("////////////////////")
    //An array of numbers divisible by 3 and then squared those numbers.
const takingsquare = number.filter((checknumber) => {
    console.log(checknumber);
    number = checknumber % 3 == 0;
    if (number === true) {
        checknumber = checknumber * 2
        return checknumber;
    }

})




// map