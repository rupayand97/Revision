### What is HTTPS? How does it differ from HTTP?

#### *HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP used to transfer data between a client and a server. HTTPS encrypts the data before sending it over the network, which prevents attackers from reading or modifying the information. HTTP sends data in plain text, so anyone intercepting the communication can see the data. HTTPS uses SSL/TLS encryption, provides data integrity, and verifies the identity of the website, while HTTP provides none of these security features.*

### Explain SSL/TLS. What is the SSL handshake process?
#### *Secure Sockets Layer(SSL) and Transport Layer Security(TLS) are cryptographic protocols used to secure communication over the internet. TLS is the modern and more secure version of SSL. The SSL/TLS handshake is the process by which a client and server establish a secure connection. First, the client sends a request to the server indicating it wants a secure connection. The server responds with its SSL certificate. The client verifies this certificate using a trusted Certificate Authority. Then, both sides agree on encryption keys, and after this process, all data exchanged is encrypted.*

### What is encryption? Explain symmetric vs asymmetric encryption.

#### *Encryption is the process of converting readable data (plain text) into an unreadable format (cipher text) to protect it from unauthorized access. Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient but requires secure key sharing. Asymmetric encryption uses two keys: a public key to encrypt data and a private key to decrypt it. It is more secure for key exchange but slower than symmetric encryption. HTTPS uses both types together asymmetric encryption for key exchange and symmetric encryption for data transfer.*

### What are certificates? What is a Certificate Authority (CA)?

#### *A digital certificate is an electronic document that proves the identity of a website or server. It contains information like the domain name, public key, and issuing authority. A Certificate Authority is a trusted organization that issues and verifies these certificates. Browsers trust certain CAs, and when a website presents a certificate, the browser checks it against the CA to ensure the site is legitimate and not a fake or malicious one.*

### What is the difference between authentication and authorization?

#### *Authentication is the process of verifying who a user is, usually through login credentials like a username and password. Authorization happens after authentication and determines what the authenticated user is allowed to do, such as accessing specific pages or performing certain actions. In simple terms, authentication checks identity, while authorization checks permissions.*

### Explain session-based authentication. How do sessions work?

#### *Session-based authentication stores user login information on the server. When a user logs in successfully, the server creates a session and assigns it a unique session ID. This session ID is sent to the client and stored in a cookie. On every subsequent request, the browser sends this session ID back to the server, which uses it to identify the user. The session data remains on the server until the user logs out or the session expires.*

### What are cookies? What are the security attributes of cookies (HttpOnly, Secure, SameSite)?

#### *Cookies are small pieces of data stored in the browser by a website to remember information like login state or user preferences. The HttpOnly attribute prevents cookies from being accessed by JavaScript, protecting against XSS attacks. The Secure attribute ensures cookies are only sent over HTTPS connections. The SameSite attribute controls whether cookies are sent with cross-site requests, helping to prevent CSRF attacks.*

### What is token-based authentication? How does it differ from session-based auth?

#### *Token-based authentication uses a token instead of server-side sessions. After login, the server generates a token and sends it to the client. The client stores this token and sends it with every request, usually in the Authorization header. The server verifies the token but does not store user session data. Unlike session-based authentication, token-based authentication is stateless, scalable, and commonly used in APIs and modern applications.*