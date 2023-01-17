import orve, { refL, watch } from "orve";

import Title from "../components/utils/MainTitle";
import SelectComp from "../components/utils/betw";
import Code from "../components/utils/code";
import Example from "../components/utils/example";

export default () => {
  const r = refL();
  watch((n) => {
    console.log(n);
  }, r);
  
  return (
    <div>
      <Title>Получить доступ к HTML Element</Title>
      <p>Если вам необходимо получить HTML Element,</p>
      <p>то вы можете использовать refL:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { refL } from "orve";

function component() {
  const r = refL();

  return {
    tag: "div",
    ref: r
  }
}
`
}
          </Code>
        },
        {
          label: "jsx",
          component: <Code>
{
`import orve, { refL } from "orve";

function Component() {
  const r = refL();

  return <div o-ref={r}></div>
}
`
}
          </Code>
        }
      ]} />
      <p>В консоли будет отображаться то, что в итоге будет лежать в refL</p>
      <Example>
        <div
          o-ref={r}
        >
          refL
        </div>
      </Example>
    </div>
  )
}