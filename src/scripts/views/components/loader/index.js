import "./styles.css";

class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="loader-wrapper">
      <div class="loader"></div>
      <h1 class="description-loader">Loading...</h1>
    </div>
    `;
  }
}

customElements.define("loader-elm", Loader);
export default Loader;
