const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener("click", (event) => {
      this.toggleDrawer(event, drawer);
    });

    window.addEventListener("click", (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
