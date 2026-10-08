// ---------- 1. Select the elements ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");
const count = document.querySelector("#note-count");

// ---------- 2. Data ----------
let notes = [];

// ---------- 3. Draw the notes ----------
function render() {
  list.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const info = document.createElement("div");

    const text = document.createElement("span");
    text.textContent = note.text;

    const meta = document.createElement("small");
    meta.textContent = `${note.category} · ${note.createdAt}`;

    info.appendChild(text);
    info.appendChild(meta);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");

    li.appendChild(info);
    li.appendChild(del);
    list.appendChild(li);
  });
}

// ---------- 4. Add a note ----------
function addNote(text, category) {
  notes.push({
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

// ---------- 5. Listen for the form ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  addNote(text, categorySelect.value);
  input.value = "";
  input.focus();
});

function render() {
  list.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const info = document.createElement("div");

    const text = document.createElement("span");
    text.textContent = note.text;

    const meta = document.createElement("small");
    meta.textContent = `${note.category} · ${note.createdAt}`;

    info.appendChild(text);
    info.appendChild(meta);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");
    del.addEventListener("click", () => deleteNote(note.id));

    li.appendChild(info);
    li.appendChild(del);
    list.appendChild(li);
  });

  if (notes.length === 0) {
    count.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    count.textContent = "You have 1 note.";
  } else {
    count.textContent = `You have ${notes.length} notes.`;
  }
}
