import orve from "orve";

import Title from "../components/utils/MainTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";
import Example from "../components/utils/example";

export default function() {
  return (
    <div>
      <Title>Live hooks</Title>
      <p>В разработке иногда полезно знать, когда компонент создался, когда отрисовался, когда обновился и удалился с экрана.</p>
      <p>На данный момент в orve можно узнать, когда компонент создался, отрисовался и,  в некоторых моментах, обновился. <span style="font-style:italic">( стараюсь доделать )</span></p>
      <p>Запись hooks.</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`function component() {
  return {
    tag: "div",
    hooks: {
      created(e) {},
      mounted(e) {},
      updated(e) {},
      unmounted(e) {},
    }
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
`import orve from "orve";

function Component() {
  return (
    <div
      o-hooks={
        {
          created(e) {},
          mounted(e) {},
          updated(e) {},
          unmounted(e) {},
        }
      }
    >
    </div>
  )
}
`
}
          </Code>
        }
      ]} />

      <p>В каждом hooks приходит объект. Это нужно для того, чтобы посмотреть, что он из себя представляет. *откройте консоль*</p>
      <Example>
        <div
          o-hooks={{
            created(e) {
              console.log("created ", e);
            },
            mounted(e) {
              console.log("mounted ", e);
            },
            updated(e) {
              console.log("updated ", e);
            }
          }}
        > Нажмите ( F12 | fn + F12 )</div>
      </Example>
      <p>
        Если у вас нет такой возможности:
      </p>
      <Code>
{
`{
  context: {} - context
  oNode: {} - текущая нода
}
`
}
      </Code>
      <p><Tcolor>Context</Tcolor> это то, о чем было написано в статье про <a href="#/component" target="blank">Комопненты</a></p>
      <p><Tcolor>oNode</Tcolor> - это node, в которой вы прописали hook. Это все настройки компонента + Node, которая есть на экране (появится в mounted). Также есть ссылка на родителя компонента. Вдруг вам будет нужна какая-то функция из props родителя.</p>
      <p style="font-style: italic">* Если вы захотите поменять какие-то настройки в родителе, например добавить в него нового child или удалить, то это ничего вам не даст, Компонент перерисовываться не будет.</p>
    </div>
  )
}