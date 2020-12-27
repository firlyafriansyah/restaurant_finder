import "./styles.css";

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer">
        <div class="foot-content">
          <div class="line"></div>
          <p>Made with &#9829; by Firly Afriansyah</p>
          <p>Copyright &#169 2020;</p>
        </div>
      </div>
    `;
  }
}

customElements.define("foot-bar", Footer);
export default Footer;
