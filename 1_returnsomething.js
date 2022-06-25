// Write a function that returns the string "something" joined with a space " " and the given argument a.

// example:
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

giveMeSomething = (input) => {
    console.log(`something ${input}`)
}
giveMeSomething('something')

// solution example
function giveMeSomething(a) {
    return `something ${a}`;
   }