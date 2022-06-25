// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// examples:
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1

search = (arr, elem) => {
    if (arr.indexOf(elem) == false) return -1;
    if (arr.indexOf(elem)) {
        console.log(arr.indexOf(elem))
    }
}
search([1, 2, 3, 4], 3)

// solution example
function search(arr, item) {
    return arr.indexOf(item)
}
search([1, 2, 3, 4], 3)