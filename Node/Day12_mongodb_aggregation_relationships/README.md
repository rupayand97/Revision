#### What is the aggregation framework in MongoDB?
##### *The aggregation framework in MongoDB is a powerful data processing pipeline that allows us to transform, analyze, and compute results from documents in a collection. It processes data through multiple stages where each stage performs an operation such as filtering, grouping, reshaping, or sorting documents. Aggregation is commonly used for reporting, analytics, and data summarization, similar to SQL’s GROUP BY and aggregate functions but more flexible and expressive.*

#### Explain the stages in aggregation pipeline ($match, $group, $project, $sort, $limit).
##### *The aggregation pipeline consists of multiple stages, each performing a specific task. The $match stage filters documents based on conditions, similar to the find() query. The $group stage groups documents by a specified field and performs aggregate operations like sum, average, or count. The $project stage reshapes documents by including, excluding, or computing fields. The $sort stage orders the documents based on specified fields in ascending or descending order. The $limit stage restricts the number of documents passed to the next stage, which is useful for pagination or top-N results.*

#### What is $lookup? How do you perform joins in MongoDB?
##### *The $lookup stage is used to perform joins between collections in MongoDB. It allows you to combine documents from two collections based on a related field, similar to a left outer join in SQL. $lookup matches a local field from the input collection with a foreign field from another collection and outputs the joined data as an array. This is useful when data is normalized across collections and needs to be queried together.*

#### What is $unwind? When would you use it?
##### *The $unwind stage is used to deconstruct an array field from input documents so that each element of the array becomes a separate document. It is commonly used when working with array fields and you want to perform operations such as filtering, grouping, or joining on individual array elements. $unwind is often used after $lookup because $lookup outputs results as arrays.*

#### What are aggregation expressions and operators?
#### *Aggregation expressions and operators are used within aggregation stages to compute values, transform data, and apply conditions. These include arithmetic operators like $sum, $avg, $multiply, comparison operators like $eq, $gt, logical operators like $and, $or, and array operators like $push and $addToSet. Expressions allow complex calculations and data transformations directly within the aggregation pipeline.*

#### How do you handle one-to-many relationships in MongoDB?
##### *One-to-many relationships in MongoDB can be handled using either embedding or referencing. Embedding involves storing the related documents (many side) as an array inside the parent document (one side), which is efficient for read-heavy operations. Referencing involves storing references (IDs) of related documents, which is useful when the related data is large, frequently updated, or shared across multiple documents. The choice depends on data size, query patterns, and update frequency.*

#### How do you handle many-to-many relationships in MongoDB?
#### *Many-to-many relationships are typically handled using referencing. Each document stores references (IDs) to related documents in the other collection. In some cases, a third “junction” collection is used to store relationships between entities. Embedding is rarely used for many-to-many relationships due to data duplication and scalability concerns. Aggregation with $lookup is often used to retrieve related data.*

#### What is data modeling in MongoDB? Explain the 6 rules of thumb.
##### *Data modeling in MongoDB is the process of designing how data is structured, stored, and related within collections to optimize performance and scalability. The six rules of thumb include: (1) favor embedding unless there is a strong reason to reference, (2) avoid unbounded arrays, (3) duplicate data when it improves read performance, (4) optimize the schema based on application query patterns, (5) keep related data together for atomic updates, and (6) balance between normalization and denormalization based on use cases.*

#### What are atomic operations in MongoDB?
##### *Atomic operations in MongoDB are operations that either complete entirely or not at all, ensuring data consistency. MongoDB guarantees atomicity at the single-document level, meaning all updates to a single document are atomic. This allows multiple fields within a document to be updated safely without partial updates. Atomic operations help maintain data integrity, especially in concurrent environments.*

#### What is a transaction in MongoDB? When should you use it?
##### *A transaction in MongoDB is a sequence of operations performed across one or more documents and collections that are executed as a single unit of work. Transactions ensure ACID properties, meaning all operations succeed or fail together. They should be used when multiple related updates must remain consistent, such as financial operations or inventory updates. However, transactions add overhead, so they should be used only when single-document atomicity is insufficient.*