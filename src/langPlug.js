import { ref, watch } from "orve";
import RU from "./assets/lang/RU.js";
import EN from "./assets/lang/EN.js";

export default {
  async setup(e) {
    const defaultLang = "RU";

    const obj = ref({});

    Object.keys(RU).forEach((k) => {
      if (Array.isArray(RU[k])) {
        obj[k.replace("RU", "")] = RU[k]
      } else 
        obj[k] = RU[k]
    });
    
    const selectedLang = ref(defaultLang);

    watch((n, o) => {
      if (n !== o) {
        const kk = n === "RU" ? RU : EN;
        Object.keys(kk).forEach((k) => {
          if (Array.isArray(kk[k])) {
            kk[k].forEach((e, i) => {
              obj[k.replace(n, "")].value[i] = e;
            })
          } else {
            obj[k] = kk[k]
          }
        });
      }
    }, selectedLang);

    e.context["lang"] = {
      selectedLang: selectedLang,
      langObject: obj
    }
  }
}