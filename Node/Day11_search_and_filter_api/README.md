#### What are the different types of queries in MongoDB?

##### *MongoDB supports several types of queries used to retrieve and manipulate data. The most common are find queries, which fetch documents from a collection using conditions. Aggregation queries process data in stages to perform operations like grouping, filtering, and calculations. Update queries modify existing documents, and delete queries remove documents from a collection. MongoDB also supports distinct queries to return unique values and text or geospatial queries for specialized searching. Together, these queries allow flexible and powerful data access.*

#### Explain projection in MongoDB queries.

##### *Projection in MongoDB is used to control which fields are included or excluded in the query result. Instead of returning the entire document, projection allows fetching only the required fields, which improves performance and reduces network usage. It is specified as the second argument in a find() query using 1 to include fields and 0 to exclude them. By default, the _id field is included unless explicitly excluded.*

#### What are comparison operators in MongoDB ($eq, $gt, $lt, $in, etc.)?

##### *Comparison operators in MongoDB are used to compare field values against specified conditions. Operators like $eq check equality, $gt and $gte check if a value is greater than or greater than or equal to another value, while $lt and $lte check for less than conditions. The $in operator matches values within a given array, and $ne matches values that are not equal. These operators are commonly used inside query objects to filter documents precisely.*

#### What are logical operators ($and, $or, $not)?

##### *Logical operators in MongoDB allow combining multiple conditions in a query. The $and operator matches documents that satisfy all given conditions, while $or matches documents that satisfy at least one condition. The $not operator negates a condition, returning documents that do not match a specified expression. These operators help build complex queries when multiple criteria must be evaluated together.*

#### Explain update operators ($set, $unset, $inc, $push, $pull).

##### *Update operators in MongoDB define how documents should be modified. The $set operator updates or adds specific fields without affecting other fields, while $unset removes a field from a document. The $inc operator increases or decreases numeric values atomically. For array fields, $push adds a new element to an array, and $pull removes elements that match a condition. These operators allow efficient and controlled updates without replacing entire documents.*

#### What are indexes in MongoDB? What types of indexes exist?

##### *Indexes in MongoDB are data structures that improve query performance by allowing faster data lookup instead of scanning the entire collection. MongoDB supports several types of indexes, including single-field indexes, compound indexes, multikey indexes for array fields, text indexes for text search, geospatial indexes for location-based queries, and hashed indexes for sharding. Proper indexing significantly improves read performance.*

#### How do you create a compound index? What is index order?

##### *A compound index is created on multiple fields in a single index and is useful when queries filter or sort by more than one field. It is created using createIndex() with multiple fields specified. Index order refers to the sequence in which fields are defined in the index, and it is very important because MongoDB can efficiently use the index only when queries match the prefix order of the index. Choosing the correct field order improves query performance.*

#### What is a covered query in MongoDB?

##### *A covered query is a query where MongoDB can return the result using only the index without accessing the actual documents in the collection. This happens when all the fields used in the query conditions and the projection are included in the index. Covered queries are very fast because they avoid reading data from the disk and rely entirely on index data.*

#### How do you analyze query performance? What is explain()?

##### *Query performance in MongoDB is analyzed using the explain() method, which provides detailed information about how a query is executed. It shows whether an index is used, how many documents are scanned, and the overall execution plan. By using explain("executionStats"), developers can identify slow queries, understand index usage, and optimize queries or indexes for better performance.*

#### What are TTL indexes?

##### *TTL (Time To Live) indexes are special indexes in MongoDB that automatically remove documents after a specified period. They are commonly used for data that should expire, such as session data, logs, or temporary records. TTL indexes work on date fields and run periodically in the background to delete expired documents, helping manage storage efficiently without manual cleanup*