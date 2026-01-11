const LoadMoreButton = ({ loading, hasMore, onLoadMore }) => {
  if (!hasMore) {
    return <p style={{ textAlign: "center" }}>No more posts</p>;
  }

  return (
    <button
      onClick={onLoadMore}
      disabled={loading}
      style={{ margin: "20px auto", display: "block" }}
    >
      {loading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreButton;