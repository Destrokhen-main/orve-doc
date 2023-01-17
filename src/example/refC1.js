import orve, { refC } from "orve";

const component1 = () => {
  return (
    <div>
      component-1
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