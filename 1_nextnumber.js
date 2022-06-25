// create a function that takes a number as an arguement, increments the number by 1+ and returns the result.

// example:
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2

addition = (num) => {
	console.log(++num)
}
addition(1)

// solution example
function addition(num) {
	return ++num
}