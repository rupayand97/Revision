#### What is CORS? Why does it exist?
#### *CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by browsers that controls how web applications can request resources from a different origin (domain, protocol, or port) than their own. It exists to protect users from malicious websites that might try to read sensitive data from another site without permission. CORS works by using HTTP headers that allow servers to explicitly specify which origins, methods, and headers are permitted to access their resources.*

#### Explain the Same-Origin Policy.
#### *The Same-Origin Policy is a core browser security rule that restricts web pages from accessing data or resources from another origin. Two URLs are considered the same origin only if their protocol, domain, and port are identical. This policy prevents malicious scripts on one website from accessing sensitive data (like cookies or session information) from another website, thereby protecting users from data theft and other attacks.*

#### What are preflight requests? When do they occur?
#### *Preflight requests are automatic HTTP OPTIONS requests sent by the browser before certain cross-origin requests. They occur when a request uses non-simple HTTP methods (like PUT or DELETE), custom headers, or certain content types. The purpose of a preflight request is to check with the server whether the actual request is safe and allowed under CORS rules before it is sent.*

#### How do you configure CORS in Express?
#### *In Express, CORS is typically configured using the cors middleware. This middleware allows you to define which origins, HTTP methods, headers, and credentials are permitted. You can enable CORS for all origins with default settings or restrict it to specific domains for better security. Configuration is usually done at the application level so that all routes follow the defined CORS rules.*

#### What is CSRF (Cross-Site Request Forgery)? How do you prevent it?
#### *CSRF is an attack where a malicious website tricks a user’s browser into sending an authenticated request to a trusted website without the user’s consent. This can result in unwanted actions such as changing account details or making transactions. CSRF can be prevented by using anti-CSRF tokens, validating the origin or referer headers, using same-site cookies, and requiring re-authentication for sensitive actions.*

#### What is XSS (Cross-Site Scripting)? How do you prevent it?
#### *XSS is a vulnerability where an attacker injects malicious JavaScript into a web application, which then runs in the browsers of other users. This can be used to steal cookies, session tokens, or perform actions on behalf of users. XSS can be prevented by properly escaping and sanitizing user input, using secure templating engines, implementing Content Security Policy (CSP), and avoiding unsafe functions like directly inserting untrusted HTML into the DOM.*

#### What is SQL Injection? How do you prevent it?
#### *SQL Injection is an attack where malicious SQL code is inserted into input fields to manipulate or access a database unlawfully. This can lead to data leaks, data loss, or unauthorized access. It can be prevented by using prepared statements or parameterized queries, avoiding dynamic SQL queries, validating user input, and using ORM libraries that handle queries securely.*

#### What are rate limiting and throttling? Why are they important?
#### *Rate limiting and throttling are techniques used to control the number of requests a client can make to a server within a certain time period. Rate limiting sets a strict maximum, while throttling gradually slows down responses when limits are approached. They are important for preventing abuse, protecting against denial-of-service (DoS) attacks, ensuring fair usage, and maintaining overall system performance and stability.*

#### What is the principle of least privilege?
#### *The principle of least privilege states that users, systems, and processes should only have the minimum level of access necessary to perform their tasks. By limiting permissions, the potential damage from accidental misuse, bugs, or security breaches is greatly reduced. This principle is fundamental to secure system design and is widely applied in operating systems, databases, and application security.*