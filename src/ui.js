function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Todo List';

    const input = document.createElement('input');
    input.id.add('todo-input');
    input.placeholder = 'Add a new task';


    const list = document.createElement('ul');
    list.id.add('todo-list');


    container.appendChild(title);
    return container;
}