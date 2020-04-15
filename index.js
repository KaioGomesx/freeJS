const os = require("os");
const prettySize = require('prettySize')

const freeMemory = prettySize(os.freemem())
const totalMemory = prettySize(os.totalmem())
const usedMemory = prettySize(os.totalmem() - os.freemem())

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
console.log(`Used Memory: ${usedMemory}`)