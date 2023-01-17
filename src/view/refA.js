import orve from "orve";

import Title from "../components/utils/MainTitle";

import Example from "../components/utils/example";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";
import SelectComp from "../components/utils/betw";

import Example1 from "../example/refA1";
import Example2 from "../example/refA2"

export default () => {
  return (
    <div>
      <Title>Отрисовка списков</Title>
      <p>Представим ситуацию, что вам нужно отрисовать какой-то список.</p>
      <p>Например такой:</p>
      <Code>
{
`[
  {
    title: "Some text",
    description: "Some text"
  },
  {
    title: "Some text 1",
    description: "Some text 1"
  }
]
`
}
      </Code>
      <p>
        Чтобы отрисовать список, вам нужно изначально сделать его реактивным.<br />
        У вас есть 2 способа:<br/>
        Использовать функицию <Tcolor>ref</Tcolor> или <Tcolor>refA</Tcolor>
      </p>
      <p style="font-style: italic">Стоит заметить, что по факту мы будем в 2 ситуациях обращаться к <Tcolor>refA</Tcolor></p>
      <p>Давайте отрисуем список.</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve"

function component() {
  const array = ref([*код с примера выше*])

  return {
    tag: "div",
    child: array
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
`import orve,  { ref } from "orve"

function component() {
  const array = ref([*код с примера выше*])

  return (
    <div>{array}</div>
  )
}
`
}
          </Code>
        }
      ]} />
      <Example>
        <Example1 />
      </Example>
      <p>
        Получим вот такой результат.<br />
        Теперь сделаем отображение в более красивом виде
      </p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve"

function component() {
  const array = ref([*код с примера выше*])

  return {
    tag: "div",
    child: array.forList((e) => {
      return {
        tag: "div",
        child: [
          {
            tag: "h3",
            child: e.title
          },
          {
            tag: "h4",
            child: e.description
          }
        ]
      }
    })
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
`import orve, { ref } from "orve"

function component() {
  const array = ref([*код с примера выше*])

  return (
    <div>
      { array.forList((e) => {
        return (
          <div>
            <h3>{e.title}</h3>
            <h4>{e.description}</h4>
          </div>
        )
      }) }
    </div>
  )
}
`
}
          </Code>
        }
      ]} />
      <Example>
        <Example2 />
      </Example>
      <p>Таким образом вы можете отрисовывать массивы объектов. Или же просто массив.</p>
      <p>Вы также можете сразу помещять компоненты в массив</p>
    </div>
  )
}