import "./styles.css";

class Error extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error_wrapper">
        <h1>Sorry, Content can't loaded</h1>
        <div class="error_image">
          <div class="error_background-image"></div>
        </div>
        <h1>Page not found</h1>
        <h1>or Server error :(</h1>
      </div>
    `;
  }
}

customElements.define("error-elm", Error);
export default Error;
