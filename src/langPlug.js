import { ref, watch } from "orve";
import RU from "./assets/lang/RU.js";
import EN from "./assets/lang/EN.js"

export default {
  async setup(e) {
    const defaultLang = "RU";

    const obj = ref({});

    Object.keys(RU).forEach((k) => {
      obj[k] = RU[k]
    });
    
    const selectedLang = ref(defaultLang);

    watch(async (n, o) => {
      if (n !== o) {
        const kk = n === "RU" ? RU : EN
        Object.keys(kk).forEach((k) => {
          obj[k] = kk[k]
        });
      }
    }, selectedLang)

    e.context["lang"] = {
      selectedLang: selectedLang,
      langObject: obj
    }
  }
}