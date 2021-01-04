import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import App from './views/app';
import serviceworkerRegister from './utils/serviceWorker-register';
import NotificationHelper from './utils/notification-helper';

require('./views/components/index');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#skip_content') {
    app.renderPage();
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceworkerRegister();
  NotificationHelper.requestPermission();
});
