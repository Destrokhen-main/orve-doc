import orve from "orve";

import Title from "../components/utils/MainTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";

const highlight = require('highlighter')();

export default function() {
  return (
    <div>
      <Title>Event</Title>
      <p>
        Во время разработки всегда присутствует необходимость использовать обработчики. Например, необходимо знать, когда пользователь нажмёт на кнопку или же когда введёт что-то в поле input.
        Для таких случаев нужен event.
      </p>
      <p>
        В нативном js используют следующую конструкцию:
      </p>
      <Code>{`HTMLELEMENT.addEventListener(event, callback(event) => {})`}</Code>
      <p>В orve используется такая конструкция:</p>
      <SelectComp variant={[
        {
          label: "object",
          component: (
            <Code>
{
`function component() {
  return {
    tag: "button",
    props: {
      "@click": (e) => {} 
    },
    child: "Click"
  }
}
`
}
            </Code>
          )
        },
        {
          label: "jsx",
          component: (
            <Code>
{
`import orve from "orve"

function component() {
  return (
    <button onClick={(e) => {}} >Click</button>
  )
}
`
}
            </Code>
          )
        }
      ]} />
      <p style="font-style:italic">* Обратите внимание на разный стиль написания.</p>
      <p>Пример получения значения с поля input.</p>
      <SelectComp variant={[
        {
          label: "object",
          component: (
            <Code>
{
`function component() {
  return {
    tag: "input",
    props: {
      "@input": (e) => {
        console.log(e.target.value);
      }
    }
  }
}
`
}
            </Code>
          )
        },
        {
          label: "jsx",
          component: (
            <Code>
{
`import orve from "orve";

function component() {
  return (
    <input onInput={(e) => { console.log(e.target.value) }} />
  )
}
`
}
            </Code>
          )
        }
      ]} />
      <p style="font-style:italic">
        * Обратите внимание: при использование <Tcolor>jsx</Tcolor> необязательно писать после <Tcolor>on</Tcolor> событие с большой буквы.<br />
        onInput === oninput<br />
        onClick === onclick
      </p>
      <p>Пример отправки функции в другой компонент.</p>
      <SelectComp variant={[
        {
          label: "object",
          component: <Code>
{
`// *--- Component ---*
function comp (props) {
  return {
    tag: "button",
    props: {
      "@click": props.callback
    },
    child: "Click"
  }
}

function main() {
  return {
    tag: "div",
    child: [
      {
        tag: comp,
        props: {
          callback: (e) => {}
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
          component: (
            <Code>
{
`import orve from "orve"

function Component(props) {
  return (
    <button onClick={props.callback} >Click</button>
  )
}

function main() {
  return (
    <div>
      <Component callback={(e) => {}} />
    </div>
  )
}
`
}
            </Code>
          )
        }
      ]} />
    </div>
  )
}