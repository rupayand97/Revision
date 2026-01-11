#### What is MongoDB? What makes it different from relational databases?
#### *MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents rather than in tables and rows. Unlike relational databases, MongoDB does not require a fixed schema, allowing documents within the same collection to have different structures. It is designed for horizontal scalability, high performance, and handling large volumes of unstructured or semi-structured data. Instead of joins, MongoDB encourages denormalized data models to improve read performance.*

#### What are collections and documents in MongoDB?
#### *In MongoDB, a document is the basic unit of data storage and is represented as a set of key-value pairs. These documents are similar to rows in relational databases but are more flexible and can contain nested structures and arrays. A collection is a group of documents, similar to a table in an RDBMS. Unlike tables, documents within a collection do not need to follow the same structure or schema.*

#### What is BSON? How does it differ from JSON?
#### *BSON stands for Binary JSON and is the format MongoDB uses to store documents internally. While JSON is a text-based format mainly used for data exchange, BSON is a binary-encoded format optimized for speed and efficiency. BSON supports additional data types such as ObjectId, Date, and binary data, and it includes metadata like field type and length, making it faster to parse and process compared to JSON.*

#### Explain the structure of a MongoDB document. What is _id?
#### *A MongoDB document consists of field-value pairs where values can be primitive data types, arrays, or embedded documents. Each document must contain an id field, which uniquely identifies the document within a collection. If not explicitly provided, MongoDB automatically generates an id value, usually as an ObjectId. The id field acts as the primary key and ensures uniqueness and fast lookup.*

#### What are the data types supported in MongoDB?
#### *MongoDB supports a wide range of data types, including strings, numbers (such as integers, doubles, and decimals), booleans, dates, arrays, embedded documents, ObjectId, null, binary data, and timestamps. This variety of data types allows MongoDB to store complex and hierarchical data efficiently, making it suitable for modern application requirements.*

#### What are embedded documents vs references in MongoDB?
#### *Embedded documents are nested documents stored directly inside a parent document. This approach keeps related data together and allows faster read operations. References, on the other hand, store a reference to a document in another collection. References are used when data needs to be shared across multiple documents or when embedding would lead to excessive data duplication.*

#### When should you embed vs reference data?
#### *Embedding should be used when data is closely related, accessed together frequently, and follows a one-to-few relationship, as it improves read performance. Referencing is preferred when dealing with one-to-many or many-to-many relationships, when data can grow indefinitely, or when the same data needs to be reused across multiple documents. The choice depends on access patterns and data size.*

#### What are the advantages and disadvantages of MongoDB?
#### *MongoDB offers advantages such as flexible schema design, high read and write performance, horizontal scalability, and natural handling of nested data. However, it also has limitations, including the lack of traditional joins, possible data duplication due to denormalization, limited support for complex multi-document transactions, and higher memory consumption compared to some relational databases.*

#### Explain schema design in MongoDB. Is MongoDB schema-less?
#### *MongoDB is often called schema-less, but in reality, it is schema-flexible. This means that while MongoDB does not enforce a strict schema at the database level, a schema is still designed and maintained at the application level. Effective schema design in MongoDB focuses on access patterns, deciding when to embed or reference data, and optimizing for read performance rather than normalization.*

#### What is the aggregation pipeline in MongoDB?
#### *The aggregation pipeline in MongoDB is a framework used to process, transform, and analyze data. It works by passing documents through a series of stages, where each stage performs a specific operation such as filtering, grouping, sorting, or reshaping data. Common stages include $match, $group, $project, $sort, and $lookup. The aggregation pipeline is widely used for reporting, analytics, and complex data transformations.*