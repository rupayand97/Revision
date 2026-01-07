import React, { useState, useEffect } from "react";

const UserPosts = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingUsers(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoadingUsers(false));
  }, []);

  useEffect(() => {
    if (!selectedUserId) {
      setPosts([]);
      return;
    }

    setLoadingPosts(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoadingPosts(false));
  }, [selectedUserId]);

  return (
    <div>
      <h2>User Posts Viewer</h2>

      {loadingUsers ? (
        <p>Loading users</p>
      ) : (
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      )}

      {selectedUserId == "" ? (
        <p>Please select a user to view posts</p>
      ) : loadingPosts ? (
        <p>Loading posts</p>
      ) : (
        <div>
          <p>Total posts: {posts.length}</p>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserPosts;