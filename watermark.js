class WatermarkElement extends HTMLElement {
  static get observedAttributes() {
    return ['watermark-text'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'watermark-text') {
      this.buildWatermark(newVal);
    }
  }

  connectedCallback() {
    this.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    `;
  }

  buildWatermark(text) {
    this.innerHTML = '';
    for (let i = 0; i < 80; i++) {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.cssText = `
        display: inline-block;
        color: rgba(0,0,0,0.07);
        font-size: 15px;
        font-family: sans-serif;
        transform: rotate(-30deg);
        white-space: nowrap;
        padding: 40px 30px;
      `;
      this.appendChild(span);
    }
  }
}

customElements.define('wix-watermark', WatermarkElement);
