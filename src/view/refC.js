import orve from "orve";

import Title from "../components/utils/MainTitle";

import Example from "../components/utils/example";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";
import SelectComp from "../components/utils/betw";

import Example1 from "../example/refC1";
import Example2 from "../example/refC2";

export default () => {
  return (
    <div>
      <Title>Реактивные компоненты</Title>
      <p>Иногда есть необходимость отрисовывать в одном месте несколько компонентов по какому-то условию.</p>
      <p>Для таких случаев существует <Tcolor>refC</Tcolor>.</p>
      <p>Он не входит в ref. Его необходимо подключать отдельно.</p>
      <p>Пример использования:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { refC } from "orve";

function component1() {
  return {
    tag: "div",
    child: "component-1"
  }
}

function component2() {
  return {
    tag: "div",
    child: "component-2"
  }
}

function component () {
  const comp = refC(component1);

  return {
    tag: "div",
    child: [
      {
        tag: "div",
        child: [
          {
            tag: "button",
            props: {
              "@click": () => { comp.value = component1 }
            },
            child: "component-1"
          },
          {
            tag: "button",
            props: {
              "@click": () => { comp.value = component2 }
            },
            child: "component-2"
          }
        ]
      },
      comp
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
`import orve, { refC } from "orve";

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
`
}
          </Code>
        }
      ]} />
      <Example>
        <Example1 />
      </Example>
      <p>В данном примере мы передаём функцию компонента.</p>
      <p>Вы можете спокойно строить компоненты любой глубины с любыми реактивными переменными внутри.</p>
      <p style="font-style:italic">Важный момент относительно реактивных переменных: при обновлении компонента, все реактивные переменные внутри будут сбрасываться до изначально заданных значений.</p>
      <p>Пример:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { refC, ref } from "orve";

function component1() {
  const inp = ref(0);

  return {
    tag: "div",
    props: {
      "@click" : () => {
        inp.value += 1;
      }
    },
    child: inp
  }
}

function component2() {
  return {
    tag: "div",
    child: "component-2"
  }
}

function component () {
  const comp = refC(component1);

  return {
    tag: "div",
    child: [
      {
        tag: "div",
        child: [
          {
            tag: "button",
            props: {
              "@click": () => { comp.value = component1 }
            },
            child: "component-1"
          },
          {
            tag: "button",
            props: {
              "@click": () => { comp.value = component2 }
            },
            child: "component-2"
          }
        ]
      },
      comp
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
`import orve, { refC, ref } from "orve";

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

function component() {
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
`
}
          </Code>
        }
      ]} />
      <Example>
        <Example2 />
      </Example>
    </div>
  )
}