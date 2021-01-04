import './styles.css';

class Alert extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="alert-wrapper">
        <p class="alert-body">Terjadi kesalahan! Silahkan cek kembali kolom isian atau cek koneksi internet anda.</p>
      </div>
    `;
  }
}

customElements.define('alert-elm', Alert);
export default Alert;
