# STDIO Redirection

Complete the exercise function so that the returned child process:

Has no ability to read STDIN.

Redirects its STDOUT to the parent process' STDOUT.

Exposes STDERR as a readable stream.

To verify that the exercise was completed successfully run node test.js, if the
implementation is correct the process will output: passed!.