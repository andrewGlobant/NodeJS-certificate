Run the file without any flags, and then run the file with --stack-trace-limit set to 200.
In the first case, there should only be ten stack frames in the error output.
In the second case, there should be more than ten frames in the error in output.