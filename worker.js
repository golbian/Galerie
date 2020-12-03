'use strict'
// const { parentPort } = require('worker_threads')
let increment = 0
while (increment !== Math.pow(10, 10)) {
  increment++

  if(increment ===  1000000000) {
    process.exit(0)
  }
}
const message = {
    message:'Intensive CPU task is done ! Result is : ' + increment,
    code: process.exitCode,
    pid: process.pid
}
process.send(message)