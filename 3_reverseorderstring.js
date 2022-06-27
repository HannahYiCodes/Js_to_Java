// reverse("Hello World") ➞ "dlroW olleH"

reverse = (str) => {
    console.log(str.split('').reverse().join(''))
}
reverse("Hi, how are you?")