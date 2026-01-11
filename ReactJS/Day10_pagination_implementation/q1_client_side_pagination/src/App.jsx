import { useState, useMemo } from "react";
import users from "./data/users";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import PageSizeSelector from "./components/PageSizeSelector";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const paginatedUsers = useMemo(
    () => users.slice(startIndex, endIndex),
    [startIndex, endIndex]
  );

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>

      <PageSizeSelector pageSize={pageSize} onChange={handlePageSizeChange} />

      <p>
        Showing {startIndex + 1}-{endIndex} of {totalItems} results
      </p>

      <UserTable users={paginatedUsers} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;