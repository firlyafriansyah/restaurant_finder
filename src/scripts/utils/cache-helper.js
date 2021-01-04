const { default: CONFIG } = require('../global/config');

const CacheHelper = {
  async appShell(request) {
    const cache = await this.openCache();
    cache.addAll(request);
  },

  async openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async addCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },

  async deleteOldCache() {
    const cacheName = await caches.keys();
    cacheName
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredCache) => caches.delete(filteredCache));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this.fetchRequest(request);
      return response;
    }
    return this.fetchRequest(request);
  },

  async fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this.addCache(request);
    return response;
  },
};

export default CacheHelper;
