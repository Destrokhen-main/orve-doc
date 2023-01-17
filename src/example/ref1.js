import orve, { ref } from "orve";

export default () => {
  const r = ref(0);

  return (
    <div onClick={() => {r.value += 1}}>
      {r}
    </div>
  )
}