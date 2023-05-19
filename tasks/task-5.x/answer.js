'use strict'

const emitter = require('./emitter')

emitter.on('error', (err) => {
  console.log('Ups!')
  console.error(err)
  console.log(err)
  process.exit(1)
})
