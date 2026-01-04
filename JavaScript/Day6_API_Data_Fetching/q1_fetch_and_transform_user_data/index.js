const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const activeUsers = users
    .filter(
      (user) =>
        // user.isActive==true
        user.username.length > 6
    )
    .map((user) => ({
      id: user.id,
      fullName: user.name,
      email: user.email,
    }));

  console.log(activeUsers);
};

fetchData();