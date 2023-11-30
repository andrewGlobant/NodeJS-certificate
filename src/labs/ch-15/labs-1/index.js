'use strict'
const { spawn } = require('child_process')

function exercise(myEnvVar) {
  const command = process.execPath
  const args = ['child.js']

  return spawn(command, args, {
    env:  { MY_ENV_VAR: myEnvVar }
  })

}

module.exports = exercise
