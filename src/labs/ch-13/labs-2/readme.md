# Watching

When executed (e.g., using node index.js) this code will create a folder named project (removing it first if it already exists and then recreating it), and then perform some file system manipulations within the project folder.

The writer function will create a file before calling the exercise function, to simulate a pre-existing file, The exercise function will then be called which sets up a file watcher with fs.watch. The writer function then proceeds to create a file, a directory and changes the permissions of the previously existing file. These changes will trigger the listener function passed as the second argument to fs.watch.

The goal is to ensure that the answer variable is set to the newly created file. So when a directory is added, the answer variable should not be set to the directory path. When the preexisting files status is updated via a permissions change, the answer variable should not be set to that preexisting file.
If implemented correctly the process will output: passed!