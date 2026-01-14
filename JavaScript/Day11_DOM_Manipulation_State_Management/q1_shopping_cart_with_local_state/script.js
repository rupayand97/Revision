const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Monitor", price: 299 },
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");

products.forEach((p) => {
  const div = document.createElement("div");
  div.innerHTML = `
    ${p.name} - ${p.price}
    <button onclick="addToCart(${p.id})">Add</button>
  `;
  productsDiv.appendChild(div);
});

function addToCart(id) {
  let item = cart.find((i) => i.id === id);

  if (item) {
    item.qty++;
  } else {
    let product = products.find((p) => p.id === id);
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

function renderCart() {
  cartDiv.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;

    const div = document.createElement("div");
    div.innerHTML = `
      ${item.name} × ${item.qty}
      <button onclick="item.qty++; renderCart()">+</button>
      <button onclick="item.qty--; if(item.qty===0) removeItem(${item.id}); renderCart()">-</button>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;
    cartDiv.appendChild(div);
  });

  let tax = subtotal * 0.1;
  let total = subtotal + tax;

  totalDiv.innerHTML = `
    Subtotal: ${subtotal}<br>
    Tax (10%): ${tax}<br>
    Total: ${total}
  `;
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
}
