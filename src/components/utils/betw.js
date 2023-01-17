import orve,{ refC, ref, effect } from "orve";
import s from "./betw.sc.scss";

export default function(props) {
  const view = refC(() => props.variant[0].component);
  const selected = ref(0);

  return (
    <div >
      <div>
        {props.variant.map((e, i) => {
          return (
            <button
              onClick={() => {
                view.value = e.component
                selected.value = i;
              }}
              class={effect(() => {
                let def = "btn-sel ";

                if (i === selected.value) {
                  def += "selected-btn"
                }

                return def
              }, [ selected ])}
            >{e.label}</button>
          )
        })}
      </div>
      <div class={s["betwen-dis"]}>
        {view}
      </div>
    </div>
  )
}