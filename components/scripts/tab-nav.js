class TabNavigationItem extends HTMLElement {
  constructor() {
    super();
    this._target = null;
    this.attachShadow({mode: 'open'});
    const templateImport = document.getElementById('tab-nav').import;
    this.template = templateImport.getElementById('tab-nav');
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['target'];
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

customElements.define('tab-nav-item', TabNavigationItem);