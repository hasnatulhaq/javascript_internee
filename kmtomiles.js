// converting km to miles

const km = 10,
    factor = 0.621371;

function kmtomiles(km) {
    result = km * factor;
    return result;
}

value = kmtomiles(km);
console.log(value);