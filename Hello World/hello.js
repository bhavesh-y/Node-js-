const math = require('./math')

console.log("hello bhai ")


// x = console.log("Add value is " , math.addfn(2,5))
// y = console.log("Sub value is " , math.subfn(2,5))

// console.log(math.addfn(2,5)+ math.subfn(2,5))

const {add, sub} = require('./math')
console.log("Add value is ", add(2,5))