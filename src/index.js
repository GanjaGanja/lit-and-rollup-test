import { html, render } from 'lit';
import './some-header.js';

const container = document.querySelector('#main');

const todos = ['Buy hand sanitizer', 'Shred cabbage', 'Learn TypeScript'];

const template = () => html`
    <some-header></some-header>
    <h2>To Do</h2>
    <ul>
        ${todos.map((todo) => html`
            <li>${todo}</li>`)}
    </ul>
    <input @change=${newToDo}/>
`;

function newToDo(e) {
  todos.push(e.target.value);
  e.target.value = '';
  render(template(), container);
}

render(template(), container);
