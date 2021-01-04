import './styles.css';

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
          <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('foot-bar', Footer);
export default Footer;
