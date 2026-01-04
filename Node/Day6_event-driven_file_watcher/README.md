#### 1. What are core modules in Node.js? Name at least 10
##### *Core modules are built-in modules that come bundled with Node.js and do not require installation via npm. They provide essential functionality for building server-side applications. Examples include fs, path, http, https, url, os, events, stream, crypto, buffer, util, and child_process.*

#### 2. Explain the 'fs' module. What's the difference between fs and fs/promises?
##### *The fs (File System) module is used to interact with the file system, such as reading, writing, updating, and deleting files and directories. The standard fs module supports synchronous methods and asynchronous methods using callbacks, while fs/promises provides a Promise-based API that works seamlessly with async/await, making code cleaner and easier to manage.*

#### 3. What is the 'path' module used for?
##### *The path module is used to handle and manipulate file paths in a platform-independent way. It helps in tasks like joining paths, resolving absolute paths, extracting file names or extensions, and normalizing paths, ensuring compatibility across operating systems like Windows and Linux.*

#### 4. Explain the EventEmitter class. How do you use it?
##### *The EventEmitter class, from the events module, is the foundation of event-driven architecture in Node.js. It allows objects to emit events and other parts of the application to listen for those events using methods such as emit() and on(), enabling loosely coupled and asynchronous communication.*

#### 5. What is the difference between on() and once() in EventEmitter?
##### *The on() method registers an event listener that is executed every time the event is emitted, whereas the once() method registers a listener that is invoked only the first time the event occurs and is automatically removed afterward.*

#### 6. How does error handling work with EventEmitters?
##### *Error handling in EventEmitters is usually done by emitting an 'error' event. If an 'error' event is emitted and no listener is attached to it, Node.js will throw an exception and may crash the process, which is why it is important to always register an error handler.*

#### 7. What is the 'cluster' module? Why would you use it?
##### *The cluster module allows Node.js to create multiple worker processes that share the same server port. It is used to take advantage of multi-core CPUs, improving application performance and scalability by distributing incoming requests across workers.*

#### 8. What are child processes? When would you spawn one?
##### *Child processes allow Node.js to execute external commands or scripts in separate processes. They are useful for running CPU-intensive tasks, executing system-level commands, or isolating work so that it does not block the main event loop.*

#### 9. What is the difference between spawn, exec, and fork?
##### *The spawn method is used to start a new process and stream its output in real time, making it suitable for long-running tasks. The exec method runs a command in a shell and buffers the entire output in memory, which is best for small commands. The fork method is a special case of spawn used specifically to create new Node.js processes with built-in inter-process communication.*