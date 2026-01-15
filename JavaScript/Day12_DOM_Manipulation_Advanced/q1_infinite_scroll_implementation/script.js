const allItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

const list = document.getElementById("list");
const loading = document.getElementById("loading");

let start = 0;
const limit = 10;
let isLoading = false;

function loadItems() {
  if (start >= allItems.length || isLoading) return;

  isLoading = true;
  loading.style.display = "block";

  setTimeout(() => {
    const items = allItems.slice(start, start + limit);

    items.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${item.title}</strong><p>${item.description}</p>`;
      list.appendChild(div);
    });

    start += limit;
    isLoading = false;
    loading.style.display = "none";
  }, 500);
}

function handleScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    loadItems();
  }
}

loadItems();

window.addEventListener("scroll", handleScroll);