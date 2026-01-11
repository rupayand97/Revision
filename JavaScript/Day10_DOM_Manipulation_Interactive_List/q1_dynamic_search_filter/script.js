const items = [
  { id: 1, name: 'MacBook Pro', category: 'Electronics' },
  { id: 2, name: 'Nike Shoes', category: 'Footwear' },
  { id: 3, name: 'iPhone 15', category: 'Electronics' },
  { id: 4, name: 'Adidas Jacket', category: 'Clothing' },
  { id: 5, name: 'Sony Headphones', category: 'Electronics' }
];

const input = document.getElementById('searchInput');
const list = document.getElementById('list');
const count = document.getElementById('count');

const highlight = (text, query) => {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) return text;

  return (
    text.slice(0, index) +
    '<mark>' +
    text.slice(index, index + query.length) +
    '</mark>' +
    text.slice(index + query.length)
  );
};

const render = (data, query = '') => {
  list.innerHTML = '';

  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${highlight(item.name, query)} - ${highlight(item.category, query)}`;
    list.appendChild(li);
  });

  count.textContent = `Showing ${data.length} item(s)`;
};

input.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(value) ||
    item.category.toLowerCase().includes(value)
  );

  render(filtered, value);
});

render(items);