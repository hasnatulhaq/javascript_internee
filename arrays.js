const number = [45, 34, 32, 54, 34, 33, 334, 34, 34, 90, 12, 23, ]
const people = [
        { name: 'Ahmed ', age: 25 },
        { name: 'Naveed ', age: 23 },
        { name: 'Babar ', age: 56 },
        { name: 'Moiz', age: 23 },
        { name: 'Muneeb ', age: 24 },
        { name: 'Waleed ', age: 30 },
        { name: 'Hammad', age: 15 },
    ]
    // map
const peoplename = people.map((people) => {
        return people.age <= 50;
    })
    //filter
console.log(peoplename);
const peoplename = people.filter((people) => {
    return people.age <= 50;
})
console.log(peoplename);