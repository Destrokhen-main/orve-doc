import orve, { watch, ref } from "orve";

export default () => {
  const r = ref("");

  watch((n, o) => {
    console.log(n, o);
  }, r);

  return (
    <div>
      <p>В консоли будет результат</p>
      <input onInput={(e) => {r.value = e.target.value}} />
    </div>
  )
}