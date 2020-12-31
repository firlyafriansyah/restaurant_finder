import runtime from "serviceworker-webpack-plugin/lib/runtime";

const serviceworkerRegister = async () => {
  if ("serviceWorker" in navigator) {
    await runtime.register();
    return;
  }
  console.log("Browser not supported Service Worker!");
};

export default serviceworkerRegister;
