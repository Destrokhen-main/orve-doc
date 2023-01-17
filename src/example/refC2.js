import orve, { refC, ref } from "orve";

const component1 = () => {
  const inp = ref(0)

  return (
    <div onClick={() => { inp.value += 1 }}>
      {inp}
    </div>
  )
}

const component2 = () => {
  return (
    <div>
      component-2
    </div>
  )
}

export default () => {
  const comp = refC(component1);

  return (
    <div>
      <div>
        <button onClick={() => { comp.value = component1 }}>Component-1</button>
        <button onClick={() => { comp.value = component2 }}>Component-2</button>
      </div>
      {comp}
    </div>
  )
}
