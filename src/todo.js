export default function loadTodo() {
    const input = document.querySelector('#todo-input');
    const list = document.querySelector('#todo-list');

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const item = document.createElement('li');
            item.classList.add('todo-item');
            item.textContent = input.value;
            list.appendChild(item);
            input.value = '';
        }
    }) 
}