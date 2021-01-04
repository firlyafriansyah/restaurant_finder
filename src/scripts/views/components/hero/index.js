import './styles.css';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__background"></div>
        <div class="hero__description">
          <h1>Cari Restoran Paling Hits? disini tempatnya!</h1>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-elm', Hero);
export default Hero;
