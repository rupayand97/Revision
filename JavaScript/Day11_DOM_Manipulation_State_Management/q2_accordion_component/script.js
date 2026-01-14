const sections = [
  { title: 'Section 1', content: 'Content for section 1. This is some detailed information.' },
  { title: 'Section 2', content: 'Content for section 2. This is some detailed information.' },
  { title: 'Section 3', content: 'Content for section 3. This is some detailed information.' }
];

const accordion = document.getElementById("accordion");

sections.forEach((section, index) => {
  const header = document.createElement("div");
  header.className = "header";
  header.textContent = section.title;

  const content = document.createElement("div");
  content.className = "content";
  content.textContent = section.content;

  header.onclick = () => {
    document.querySelectorAll(".content").forEach((c) => {
      if (c !== content) c.classList.remove("open");
    });

    content.classList.toggle("open");
  };

  accordion.appendChild(header);
  accordion.appendChild(content);
});