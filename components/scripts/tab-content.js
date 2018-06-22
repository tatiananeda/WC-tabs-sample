class TabContentItem extends HTMLElement {
  constructor() {
    super();
    this._target = null;
    this.attachShadow({ mode: 'open' });
    const templateImport = document.getElementById('tab-content').import;
    this.template = templateImport.getElementById('tab-content');
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['target', 'content'];
  }

  attributeChangedCallback(attr, prev, next) {
    if (prev !== next) {
      this[`_${attr}`] = next;
      this.render();
    }
  }

  render() {
    if (!this.ownerDocument.defaultView) return;
    const content = this.template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);
  }
}

customElements.define('tab-content-item', TabContentItem);