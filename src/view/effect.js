import orve from "orve";

import Title from "../components/utils/MainTitle";
import SubTitle from "../components/utils/SubTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";

import Example1 from "../example/effect1";
import Example from "../components/utils/example";

export default () => {
  return (
    <div>
      <Title>Effect</Title>
      <p>Effect - это вспомогательная функция. Её главная цель -  следить за реактивными переменными и в зависимости от них изменять какое-то свойство.</p>
      <p>Например, нам нужно в зависимости от того, сколько раз пользователь нажал на кнопку, отображать разные стили:</p>
      <Example>
        <Example1 />
      </Example>
      <p>Для того, чтобы использоваьт effect, ему нужно передать callback и зависимости</p>
      <Code>
{
`effect(
  () => { *Что будем делать обязательно нужен return* },
  [ *массив реактивных переменных* ]
)
`
}
      </Code>
      <p>Теперь, как реализовать пример выше:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref, effect } from "orve";

function comopnent() {
  const count = ref(0);

  return {
    tag: "div",
    child: [
      {
        tag: "p",
        props: {
          style: effect(() => {
            if (count.value > 0 && count.value < 5) {
              return "padding: 10px;background-color:red";
            } else if ( count.value === 5 ) {
              return "padding: 5px;background-color:green";
            } else {
              return "padding: 1px;background-color:grey";
            }
          }, [ count ])
        },
        child: count
      },
      {
        tag: "button",
        child: "Click",
        props: {
          "@click": () => { count.value += 1; }
        }
      }
    ]
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
`import orve, { ref, effect } from "orve";

function Component() {
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
`
}
          </Code>
        }
      ]} />
      <p>Effect можно использовать для любых <Tcolor>Props</Tcolor>.</p>
      <p style="font-style: italic">* В текущей версии, можно изменять и текст в child. *Возможны ошибки*</p>
    </div>
  )
}