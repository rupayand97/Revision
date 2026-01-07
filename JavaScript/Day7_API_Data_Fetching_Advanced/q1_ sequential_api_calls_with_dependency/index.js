const fetchUserPostComments = async () => {
  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!userRes.ok) throw new Error("Failed to fetch user");

    const user = await userRes.json();

    const postsRes = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    if (!postsRes.ok) throw new Error("Failed to fetch posts");

    const posts = await postsRes.json();

    const firstPost = posts[0];

    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );

    if (!commentsRes.ok) throw new Error("Failed to fetch comments");

    const comments = await commentsRes.json();

    const result = {
      userName: user.name,
      firstPostTitle: firstPost.title,
      commentCount: comments.length,
      topComment: comments[0]?.body || null,
    };
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

fetchUserPostComments();