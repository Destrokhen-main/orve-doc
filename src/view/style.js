import orve from "orve";

import Title from "../components/utils/MainTitle";
import SelectComp from "../components/utils/betw";
import Code from "../components/utils/code";

export default () => {
  return (
    <div>
      <Title>Стили для компонентов</Title>
      <p>Иногда вам нужно прямо в теге прописать стили. Вы можете использовать 2 способа:</p>
      <p>- Вставить просто текст.</p>
      <p>- Вставить объект стилей.</p>
      <SelectComp variant={[
        {
          label: "Object - style string",
          component: 
            <div>
              <Code>
{
`{
  tag: "div",
  props: {
    style: "background-color: grey"
  }
}`
}
              </Code>
              <Code>
{
`{
  tag: "div",
  props: {
    style: {
      backgroundColor: "grey"
    }
  }
}`
}
              </Code>
            </div>
        },
        {
          label: "jsx - style string",
          component: 
            <div>
              <Code>{`<div style="background-color: grey"></div>`}</Code>
              <Code>{`<div style={{ backgroundColor: "grey" }}></div>`}</Code>
            </div>
        }
      ]} />
    </div>
  )
}