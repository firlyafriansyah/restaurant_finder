import "./styles.css";

class Error extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error_wrapper">
        <h1>Content can't loaded</h1>
        <div class="error_image">
          <div class="error_background-image"></div>
        </div>
        <h1>Server Error :(</h1>
      </div>
    `;
  }
}

customElements.define("error-elm", Error);
export default Error;
