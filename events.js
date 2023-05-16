const EventEmitter = require('node:events')

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter()
// myEmitter.on('event', () => {
//     console.log('an event ocurred!')
// })

// myEmitter.emit('event')

// -------------------------------------------------------
// Asynchronous vs. synchronous

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter.emit('event', 'a', 'b');

// -------------------------------------------------------
// Handling events only once

// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Prints: 2

// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Ignored

// -------------------------------------------------------
// Error events
// const myEmitter = new MyEmitter();
// myEmitter.on('error', (err) => {
//     console.error('whoops! there was an error');
//   });
// myEmitter.emit('error', new Error('whoops!'));


const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', console.log);

const ee2 = new EventEmitter({ captureRejections: true });
ee2.on('something', async (value) => {
  throw new Error('kaboom');
});

// ee2[Symbol.for('nodejs.rejection')] = console.log;