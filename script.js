// Personal Task Tracker - Core module

(() => {
    'use strict';

    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');

    /** @type {string[]} */
    const tasks = [];

    /**
     * Buat elemen <li> untuk satu tugas.
     * @param {string} text
     * @returns {HTMLLIElement}
     */
    function createTaskElement(text) {
        const li = document.createElement('li');
        li.className = 'task-list__item';

        const span = document.createElement('span');
        span.className = 'task-list__text';
        span.textContent = text;

        li.appendChild(span);
        return li;
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            taskList.appendChild(createTaskElement(task));
        });
        emptyState.hidden = tasks.length > 0;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;

        tasks.push(value);
        input.value = '';
        input.focus();
        renderTasks();
    });

    renderTasks();
})();
const appName = 'Project Tracker';
let tasks = [];
function addTask(task) { tasks.push(task); }
console.log('Task berhasil ditambahkan');
