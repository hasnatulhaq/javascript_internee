const items = [
    { name: 'bike', price: 30 },
    { name: 'car', price: 3000 },
    { name: 'book', price: 100 },
    { name: 'house', price: 300 },
    { name: 'laptop', price: 500 },
    { name: 'mobile', price: 200 },
]

const finditem = items.find((items) => {
    return items.name === 'house';
})

console.log(finditem);