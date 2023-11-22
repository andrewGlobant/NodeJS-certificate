# Synchronous Error Handling

The native URL constructor can be used to parse URLs, it's been wrapped into a function called
parseURL.

If URL is passed a unparsable URL string it will throw, so calling parseURL('foo') will result in an exception.

Modify the parseURL function body such that instead of throwing an error, it returns null when the URL is invalid. Use the fact that URL will throw when given invalid input to determine whether or not to return null or a parsed object.

Once implemented, execute the index.js file with node, if the output says passed! then the exercise was completed successfully.