import orve, { ref, effect } from "orve"

import logo from "../../public/favicon.ico"

export default () => {
  const i = ref(0);

  return (
    <div class="header d-flex justify-content-between align-items-center">
      <div style="display:flex; align-items:center; gap: 10px" class={effect(() => {
        if (i.value === 5) {
          return "animated-file"
        } else {
          return "";
        }
      }, [ i ])}>
        <img class="header__img" src={logo} onClick={() => i.value += 1} />
        <span><a href="#/" style="color:black; text-decoration: none">ORVE</a></span>
      </div>
    </div>
  )
}