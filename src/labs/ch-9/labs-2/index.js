'use strict'
const { EventEmitter, errorMonitor } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (e)=>{})

ee.emit('error', Error('timeout'))
