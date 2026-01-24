import React, { useEffect, useState } from "react";

const FetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => controller.abort();
  }, [retry]);

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => setRetry((r) => r + 1)}>Retry</button>
      </div>
    );

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default FetchUser;