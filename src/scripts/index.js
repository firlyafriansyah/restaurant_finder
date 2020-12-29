require("./views/components/index");
import "regenerator-runtime";
import "../styles/styles.css";
import "../styles/responsive.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  if (window.location.hash !== "#menu") {
    app.renderPage();
  }
});

window.addEventListener("load", () => {
  app.renderPage();
});
