import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const serviceworkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
  }
};

export default serviceworkerRegister;
