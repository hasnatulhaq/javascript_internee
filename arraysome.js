const items = [
    { name: 'bike', price: 30 },
    { name: 'car', price: 3000 },
    { name: 'book', price: 100 },
    { name: 'house', price: 300 },
    { name: 'laptop', price: 500 },
    { name: 'mobile', price: 200 },
]


const usingsome = items.some((items) => {
    return items.price <= 100
})

console.log(usingsome);