const users = Array.from({length:100 }, (rl, i) => ({
  id: i+1,
  name: `User ${i+1}`,
  email: `user${i+1}@gmail.com`,
  role: ["Admin", "User", "Guest"][i%3],
}));

export default users;