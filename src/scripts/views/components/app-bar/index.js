import './styles.css';

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
          <button id="hamburgerButton" aria-label="toggle navigation">☰</button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/list-restaurant">List Restaurant</a></li>
            <li><a href="#/your-favorite">Your Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/firly-afriansyah-139998192" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </nav>    
      </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
export default AppBar;
