import orve, { createApp } from "orve";

import App from "./App";
import router from "./router";
import "highlight.js/styles/github.css";

orve.use(router);
orve.use({
  setup(e) {
    console.info("*--- Кастомный script ---*", e);
  }
})

createApp(App).mount("#app");