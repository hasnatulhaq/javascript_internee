//string code
let ch = 12321,
    rem, temp, reversenumber = 0;

temp = number
while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    console.log(number);
    reversenumber = reversenumber * 10 + rem;
}

console.log(reversenumber);
if (reversenumber == temp) {
    console.log("number is palindrome");
} else {
    console.log("number is not palindrome");
}