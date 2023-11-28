'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter()
const ac = new AbortController()
let count = 0


setInterval(() => {
  ee.emit('tick')
}, 100)

function listener () {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
    ac.abort()
  }, 250)
}

ee.once('tick', listener)
