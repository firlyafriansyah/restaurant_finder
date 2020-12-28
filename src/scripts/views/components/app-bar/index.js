import "./styles.css";

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
      <header class="app-bar">
        <div class="app-bar__brand">
          <h1>Restaurant Finder</h1>
        </div>
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/best-restaurant">Best Restaurant</a></li>
            <li><a href="#/your-favorite">Your Favorite</a></li>
          </ul>
        </nav>    
      </header>
      `;
  }
}

customElements.define("app-bar", AppBar);
export default AppBar;
