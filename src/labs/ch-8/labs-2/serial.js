'use strict'
// const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb(null, 'A'))
    }, 500)
  })
}

const opB = (cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      cb(null, 'B')
      resolve()
    }, 250)
  })
}

const opC = (cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      cb(null, 'C')
      resolve()
    }, 125)
  })
}

async function  main() {
  await opA(print)
  await opB(print)
  await opC(print)
}

main()
