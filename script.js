// Personal Task Tracker - Core module

(() => {
  "use strict";

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const emptyState = document.getElementById("empty-state");

  /** @type {{ id: string, text: string }[]} */
  const tasks = [];

  /**
   * Buat elemen <li> untuk satu tugas.
   * @param {{ id: string, text: string }} task
   * @returns {HTMLLIElement}
   */
  function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-list__item";
    li.dataset.id = task.id;

    const span = document.createElement("span");
    span.className = "task-list__text";
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "task-list__delete";
    deleteBtn.textContent = "×";
    deleteBtn.setAttribute("aria-label", "Hapus tugas");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      taskList.appendChild(createTaskElement(task));
    });
    emptyState.hidden = tasks.length > 0;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    tasks.push({
      id: Date.now().toString(),
      text: value,
    });

    input.value = "";
    input.focus();
    renderTasks();
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.matches(".task-list__delete")) {
      const li = event.target.closest(".task-list__item");
      const id = li.dataset.id;
      const index = tasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
      }
    }
  });

  renderTasks();
})();
