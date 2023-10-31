export default function loadTodo() {
    const input = document.querySelector('#todo-input');
    const list = document.querySelector('#todo-list');

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const item = document.createElement('li');
            item.classList.add('todo-item');
            item.textContent = input.value;
            const xButton = document.createElement('button');
            xButton.textContent = 'X';
            xButton.classList.add('x-button');
            xButton.addEventListener('click', function () {
                item.classList.add('completed');
            });
            item.appendChild(xButton);
            list.appendChild(item);
            input.value = '';
        }
    }) 
}