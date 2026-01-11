import { useState } from "react";
import allPosts from "./data/posts";
import Feed from "./components/Feed";
import LoadMoreButton from "./components/LoadMoreButton";

const PAGE_SIZE = 20;

const App = () => {
  const [visiblePosts, setVisiblePosts] = useState(
    allPosts.slice(0, PAGE_SIZE)
  );
  const [loading, setLoading] = useState(false);

  const hasMore = visiblePosts.length < allPosts.length;

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const nextPosts = allPosts.slice(
        visiblePosts.length,
        visiblePosts.length + PAGE_SIZE
      );

      setVisiblePosts((prev) => [...prev, ...nextPosts]);
      setLoading(false);
    }, 800);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>Social Feed</h2>

      <Feed posts={visiblePosts} />

      <LoadMoreButton
        loading={loading}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default App;