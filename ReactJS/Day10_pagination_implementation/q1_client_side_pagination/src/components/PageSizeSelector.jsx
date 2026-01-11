const PageSizeSelector = ({ pageSize, onChange }) => {
  return (
    <select value={pageSize} onChange={onChange}>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
    </select>
  );
};

export default PageSizeSelector;