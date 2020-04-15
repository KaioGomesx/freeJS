const os = require("os");
const prettySize = require('prettySize')

const freeMemory = prettySize(os.freemem())
const totalMemory = prettySize(os.totalmem())

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)