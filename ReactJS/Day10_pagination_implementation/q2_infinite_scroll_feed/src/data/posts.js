const posts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  author: `Author ${(i % 10) + 1}`,
  content: `This is post number ${i + 1}`,
  likes: Math.floor(Math.random() * 500),
  timestamp: new Date(Date.now() - i * 3600000).toISOString(),
}));

export default posts;