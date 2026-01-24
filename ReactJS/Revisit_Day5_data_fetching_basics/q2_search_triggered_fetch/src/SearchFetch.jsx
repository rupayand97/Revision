import { useEffect, useState } from "react";

const SearchFetch = () => {
  const [input, setInput] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchUser) return;

    const fetchUser = async () => {
      setLoading(true);
      setError("");
      setUser(null);

      try {
        const res = await fetch(`https://api.github.com/users/${searchUser}`);

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [searchUser]);

  return (
    <div style={{ padding: 20 }}>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter username"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setSearchUser(input)}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </div>
  );
};

export default SearchFetch;