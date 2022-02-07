///map method in array 
/*
const numberarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr = numberarr.map((val, index) => {

    return val * index;
})


console.log(newarr);
console.log(numberarr);*/


const customer = [
    { id: 1, firstname: "Ahmed", city: "rawalpindi" },
    { id: 2, firstname: "jamil", city: "Multan" },
    { id: 3, firstname: "Naveed", city: "Islamabad" },
    { id: 4, firstname: "Akhter", city: "karachi" },
    { id: 5, firstname: "talha", city: "Lahore" },
    { id: 6, firstname: "umair", city: "Quetta" },
    { id: 7, firstname: "saeed", city: "peshawar" },
    { id: 8, firstname: "jawad", city: "swat" },
    { id: 9, firstname: "moiz", city: "Faisalabad" },
    { id: 10, firstname: "waleed", city: "Sargodha" },
    { id: 11, firstname: "hasnat", city: "Attock" },
    { id: 12, firstname: "Hammad", city: "Jhang" },
]


const newarr = customer.map((val, index) => {

    console.log(val);
})