import { LitElement, html } from 'lit';

class SomeHeader extends LitElement {
  render() {
    return html`
        <header>lit-and-rollup-test app</header>
    `;
  }
}

customElements.define('some-header', SomeHeader);
