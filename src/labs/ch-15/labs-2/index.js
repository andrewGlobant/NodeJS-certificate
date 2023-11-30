'use strict'
const { spawn } = require('child_process')

function exercise(command, args) {
  const childProcess = spawn(command, args, {
    // Disable STDIN for the child process and Redirect STDOUT and STDERR 
    stdio: ['ignore', process.stdout, process.stderr]
  });

  return childProcess
}

module.exports = exercise