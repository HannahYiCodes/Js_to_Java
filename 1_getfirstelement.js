// create a function that takes an array containing only numbers and return the first element

// example:
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

let numberArray = [1, 2, 3]

getFirstValue = (numberArray) => {
    console.log(`${numberArray[0]}`)
    }
getFirstValue([1, 2, 3])

// solution example
function getFirstValue(arr) {
	return arr[0];
}