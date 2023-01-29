import { Orve, createApp } from "orve";

import App from "./App";
import router from "./router";
import "highlight.js/styles/github.css";
import lan from "./langPlug";

Orve.use(router);
Orve.use({
  setup(e) {
    console.info("*--- Кастомный script ---*", e);
  }
});
Orve.use(lan);

createApp(App).mount("#app");