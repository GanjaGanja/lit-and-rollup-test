import { LitElement, html } from 'lit';

class ToDo extends LitElement {
  static properties = {
    _todos: {
      type: Array,
      // This property don't have a corresponding attribute, it's "internal reactive state"
      state: true
    },
    todosComplete: {
      type: Array
    },
  };

  constructor() {
    super();
    this._todos = [];
  }

  addToDo(e) {
    // Mutating an object or array doesn't change the object reference, so it won't trigger an update
    this._todos.push(e.target.value);
    e.target.value = '';

    // trigger the update manually
    // Note: that requestUpdate() only causes the current component to update
    this.requestUpdate();
  }

  removeToDo(idxToRemove) {
    // Mutating an object or array doesn't change the object reference, so it won't trigger an update
    // This is another way of triggering an update
    this._todos = this._todos.filter((_, i) => i !== idxToRemove);
  }

  getTodosTotal() {
    return this._todos.length + this.todosComplete.length;
  }

  render() {
    return html`
        <h2>Done</h2>
        <ul>
            ${this.todosComplete.map((todo) => html`
                <li>
                    <span>${todo}</span>
                </li>`)}
        </ul>
        <h2>To Do</h2>
        <ul>
            ${this._todos.map((todo, idx) => html`
                <li>
                    <span>${todo}</span>
                    <button @click="${() => this.removeToDo(idx)}" type="button">remove</button>
                </li>`)}
        </ul>
        <input @change=${this.addToDo}/>
        <h2>Todos total: ${this.getTodosTotal()}</h2>
    `;
  }
}

customElements.define('to-do', ToDo);
