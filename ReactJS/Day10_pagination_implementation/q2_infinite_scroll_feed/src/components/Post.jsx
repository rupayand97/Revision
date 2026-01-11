const Post = ({ post }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
      <strong>{post.author}</strong>
      <p>{post.content}</p>
      <small>
        {post.likes} · {new Date(post.timestamp).toLocaleString()}
      </small>
    </div>
  );
};

export default Post;