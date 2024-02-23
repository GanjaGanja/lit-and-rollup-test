import { LitElement, html } from 'lit';
import '../components/someHeader.js';
import '../components/toDo.js';
class SomeLayout extends LitElement {
  render() {
    return html`
        <some-header></some-header>
        <to-do .todosComplete=${['Play with Lit components']}></to-do>
    `;
  }
}

customElements.define('some-layout', SomeLayout);
