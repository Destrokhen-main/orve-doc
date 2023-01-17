import orve, { ref } from "orve";

export default () => {
  const r = ref("")

  return (
    <div>
      <p>Ваш текст: {r}</p>
      <input onInput={(e) => { r.value = e.target.value }} palceholder="Введите что-то"/>
    </div>
  )
}