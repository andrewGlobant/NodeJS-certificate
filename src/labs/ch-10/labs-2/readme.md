# Async Function Error Handling

The promise returned from fs/promises readFile may reject for a variety of reasons, for instance if the specified file path doesn't exist or the process doesn't have permissions to access it. In this scenario, we don't care what the reason for failure is, we just want to propagate a single error instance from the native Error constructor with the message 'failed to read'.

Modify the body of the read function so that any possible rejection by the promise returned from the fs/promises readFile call results in the read function rejecting with a new Error('failed to read') error. If implemented correctly, when node index.js is executed the output should be passed!