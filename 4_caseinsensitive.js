// case insenitive 

match = (str_1, str_2) => {
    if (str_1.toLowerCase() === str_2.toLowerCase()) {
        console.log(true)
    } else {
        console.log(false)
    }
}
match("yummy", "yUmMy")