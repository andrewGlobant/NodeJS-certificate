# Set Child Process Environment Variable

The code in child.js expects that there will be only one environment variable named MY_ENV_VAR to have the value 'is set'. If this is not the case the assert.strictEqual method will throw an assertion error. In certain scenarios some extra environment variables are added to child processes, these are stripped so that there should only ever be one environment variable set in child.js, which is the MY_ENV_VAR environment variable.

Using any child_process method except execFile and execFileSync, complete the exercise function so that it returns a child process that executes the child.js file with node.

To check the exercise implementation, run node test.js, if successful the process will output: passed!. If unsuccessful, various assertion error messages will be output to help provide hints.

One very useful hint up front is: use process.execPath to reference the node executable instead of just passing 'node' as string to the child_process method.