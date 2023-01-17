import orve from "orve";

import Title from "../components/utils/MainTitle";

import Example from "../components/utils/example";
import Code from "../components/utils/code";

import Watch from "../example/watch1";

export default () => {
  return (
    <div>
      <Title>Watch</Title>
      <p>Watch - это некоторый смотритель за реактивной переменной.</p>
      <Code>
{
`watch(
  (newValue, oldValue) => {} - callback,
  зависимость
)
`
}
      </Code>
      <p>Пример использования:</p>
      <Code>
{
`import { ref, watch } from "orve"

function component() {
  const w = ref("");

  watch((n, o) => {
    console.log(n, o);
  }, w);

  return {
    tag: "div",
    child: [
      {
        tag: "input",
        props: {
          "@input": (e) => { w.value = e.target.value }
        }
      }
    ]
  }
}
`
}
      </Code>
      <Example>
        <Watch />
      </Example>
    </div>
  )
}