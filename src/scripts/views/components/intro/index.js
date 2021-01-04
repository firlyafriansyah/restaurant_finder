import './styles.css';

class Intro extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="intro">
        <h1 class="welcome">Selamat Datang</h1>
        <p class="message">Selamat datang di Website <strong>Restaurant Finder</strong>. Kami memiliki tujuan untuk mengumpulkan dan mendata seluruh restoran yang ada disekitar anda, hal ini kami maksudkan agar setiap orang tidak akan kesulitan lagi mencari restoran favorit dan terbaik di kota mereka.</p>
        <p class="speaker">- Firly Afriansyah -</p>
        <p class="speaker_dept">(Founder)</p>
      </div>
    `;
  }
}

customElements.define('intro-elm', Intro);
export default Intro;
