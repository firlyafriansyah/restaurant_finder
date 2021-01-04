const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this.checkAvailability) {
      return;
    }

    this.requestPermission();
    if (!this.checkPermission) {
      this.requestPermission();
      return;
    }

    this.showNotification({ title, options });
  },

  checkAvailability() {
    return !!('Notification' in window);
  },

  checkPermission() {
    return Notification.permission === 'granted';
  },

  async requestPermission() {
    await Notification.requestPermission();
  },

  async showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
