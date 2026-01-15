const tasks = [
  { id: 1, text: "Complete project proposal" },
  { id: 2, text: "Review code submissions" },
  { id: 3, text: "Update documentation" },
  { id: 4, text: "Team meeting" },
];

const list = document.getElementById("taskList");
let draggedItem = null;

function render() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.draggable = true;
    li.dataset.id = task.id;

    li.addEventListener("dragstart", () => {
      draggedItem = li;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      draggedItem = null;
      li.classList.remove("dragging");
      document
        .querySelectorAll("li")
        .forEach((i) => i.classList.remove("over"));
    });

    li.addEventListener("dragover", (e) => {
      e.preventDefault();
      li.classList.add("over");
    });

    li.addEventListener("dragleave", () => {
      li.classList.remove("over");
    });

    li.addEventListener("drop", (e) => {
      e.preventDefault();

      const fromId = draggedItem.dataset.id;
      const toId = li.dataset.id;

      reorderTasks(fromId, toId);
      render();
    });

    list.appendChild(li);
  });
}

function reorderTasks(fromId, toId) {
  const fromIndex = tasks.findIndex((t) => t.id == fromId);
  const toIndex = tasks.findIndex((t) => t.id == toId);

  const [moved] = tasks.splice(fromIndex, 1);
  tasks.splice(toIndex, 0, moved);
}

render();