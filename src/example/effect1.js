import orve, { ref, effect } from "orve";

export default () => {
  const count = ref(0);
  return (
    <div>
      <p
        style={effect(() => {
          if (count.value > 0 && count.value < 5) {
            return "padding: 10px;background-color:red";
          } else if ( count.value === 5 ) {
            return "padding: 5px;background-color:green";
          } else {
            return "padding: 1px;background-color:grey";
          }
        }, [ count ])}
      >{count}</p>
      <button onClick={() => {count.value += 1;}}>Click</button>
    </div>
  )
}