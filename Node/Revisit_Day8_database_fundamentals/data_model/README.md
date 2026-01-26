#### What is a database? What are the types of databases?
#### *A database is an organized collection of data that is stored electronically and managed in a way that allows efficient storage, retrieval, updating, and deletion of information. Databases are designed to handle large amounts of data reliably and securely. Common types of databases include relational databases (like MySQL, PostgreSQL, Oracle) that store data in tables with rows and columns; NoSQL databases (like MongoDB, Cassandra, Redis) that store data in formats such as documents, key-value pairs, wide columns, or graphs; hierarchical databases that organize data in a tree-like structure; network databases that allow more complex relationships using graph-like structures; and object-oriented databases that store data as objects similar to those used in object-oriented programming.*


#### What is the difference between SQL and NoSQL databases?
#### *SQL databases are relational databases that use structured schemas and store data in tables with predefined columns and relationships. They use SQL (Structured Query Language) for querying and are known for strong consistency and support for complex queries and joins. NoSQL databases, on the other hand, are non-relational and use flexible or schema-less data models such as documents, key-value pairs, or graphs. They are designed to scale horizontally, handle large volumes of unstructured or semi-structured data, and offer high availability and performance, often at the cost of strict consistency.*


#### When would you choose SQL over NoSQL and vice versa?
#### *SQL databases are preferred when the application requires strong data consistency, complex transactions, and well-defined relationships, such as in banking systems, ERP systems, or applications with complex reporting needs. NoSQL databases are a better choice when dealing with large-scale, distributed systems, rapidly changing data structures, or massive amounts of unstructured data, such as real-time analytics, content management systems, IoT data, or social media applications.*


#### What is ACID in databases? Explain each property.
#### *ACID is a set of properties that ensure reliable processing of database transactions. Atomicity means that a transaction is treated as a single unit, so either all operations succeed or none do. Consistency ensures that a transaction brings the database from one valid state to another, following all rules and constraints. Isolation means that concurrent transactions do not interfere with each other, and intermediate states are not visible to others. Durability guarantees that once a transaction is committed, its changes will persist even in the event of a system failure*

#### What is BASE in NoSQL databases?
#### *BASE is a set of principles commonly associated with NoSQL databases and stands for Basically Available, Soft state, and Eventual consistency. Basically Available means the system guarantees availability, even in the presence of partial failures. Soft state indicates that the system’s state may change over time, even without new input, due to eventual consistency. Eventual consistency means that while data may not be immediately consistent across all nodes, it will become consistent over time.*

#### What is database normalization? Explain 1NF, 2NF, 3NF.
#### *Database normalization is the process of organizing data to reduce redundancy and improve data integrity. First Normal Form (1NF) requires that all table fields contain atomic values and that there are no repeating groups or multi-valued attributes. Second Normal Form (2NF) builds on 1NF and requires that all non-key attributes are fully dependent on the entire primary key, eliminating partial dependency. Third Normal Form (3NF) requires that all non-key attributes depend only on the primary key and not on other non-key attributes, removing transitive dependencies.*

#### What is denormalization? When would you denormalize data?
#### *Denormalization is the process of intentionally adding redundancy to a database by combining tables or duplicating data to improve read performance. It is commonly used in systems where read operations are far more frequent than write operations, such as reporting systems, analytics platforms, or high-performance applications where complex joins could cause performance issues. Denormalization trades storage efficiency and write complexity for faster query performance.*

#### What are database indexes? How do they improve performance?
#### *Database indexes are data structures that improve the speed of data retrieval operations by providing quick access paths to rows in a table. Instead of scanning the entire table, the database can use an index to locate the required data more efficiently, similar to how an index in a book helps find topics quickly. Indexes significantly improve the performance of SELECT queries, especially on large tables and frequently searched columns.*

#### What are the trade-offs of using indexes?
#### *While indexes improve read performance, they come with certain trade-offs. Indexes consume additional storage space and can slow down write operations such as INSERT, UPDATE, and DELETE because the index must also be updated. Having too many indexes can increase maintenance overhead and negatively impact performance, so indexes should be created thoughtfully based on query patterns.*


#### What is a primary key? What is a foreign key?
#### *A primary key is a column or a set of columns that uniquely identifies each row in a table. It must contain unique values and cannot be null, ensuring that each record can be uniquely referenced. A foreign key is a column or set of columns in one table that refers to the primary key of another table, creating a relationship between the two tables. Foreign keys help maintain referential integrity by ensuring that relationships between tables remain valid.*