// makesTen(9, 10) ➞ true
makesTen = (a, b) => {
    if (a == 10 || b == 10 || a+b == 10) {
        return true
    } else {
        return false
    }
}
makesTen(10, 2)