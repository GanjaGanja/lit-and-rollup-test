import { LitElement, html } from 'lit';

class ToDo extends LitElement {
  static properties = {
    todos: { attribute: false },
  };

  constructor() {
    super();
    this.todos = ['Buy hand sanitizer', 'Shred cabbage', 'Learn TypeScript'];
  }

  newToDo(e) {
    // Mutating an object or array doesn't change the object reference, so it won't trigger an update
    this.todos.push(e.target.value);
    e.target.value = '';

    // trigger the update manually
    this.requestUpdate();
  }

  render() {
    return html`
        <h2>To Do</h2>
        <ul>
            ${this.todos.map((todo) => html`
                <li>${todo}</li>`)}
        </ul>
        <input @change=${this.newToDo}/>
    `;
  }
}

customElements.define('to-do', ToDo);
