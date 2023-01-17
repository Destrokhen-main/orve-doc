import orve, { ref } from "orve";

export default function() {
  const id = ref("");
  const value = ref("");
  const clickEvent = ref(() => {
    id.value = "asd";
    clickEvent.value = () => { console.log("123") };
  });

  return (
    <div>
      <div
        id={id}
        onClick={clickEvent}
      >
        Очистит и обновит onClick
      </div>
      <input
        value={value}
        onInput={(e) => {value.value = e.target.value}}
      />
      <button onClick={() => {value.value = ""}} >Clear</button>
    </div>
  )
}