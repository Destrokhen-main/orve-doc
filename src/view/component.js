import orve from "orve";

import Title from "../components/utils/MainTitle";
import SubTitle from "../components/utils/SubTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";

export default () => {
  return (
    <div>
      <Title>Компоненты</Title>
      <p>На данный момент в библиотеке есть возможность использовать два подхода для создания компонента <Tcolor>Objcet</Tcolor> и <Tcolor>JSX</Tcolor>.</p>
      <p>В данном разделе мы рассмотрим два варианта создания компонента.</p>
      <SubTitle>Общие моменты</SubTitle>
      <p>
        Компонент в ORVE это <Tcolor>function</Tcolor>.<br/>
        Есть два способа объявить компонент:
      </p>
      <Code>{`const component = () => {}`}</Code>
      <p><Tcolor>ИЛИ</Tcolor></p>
      <Code>{`function component() {}`}</Code>
      <p>
        Чуть ниже будет описано про контекст <Tcolor>this</Tcolor>. В случае использования стрелочной функции <Tcolor>this</Tcolor> будет отсутствовать.
      </p>

      <SubTitle>Компонент</SubTitle>
      <p>Для начала рассмотрим единицу объекта, которая в итоге будет представлять собой HTML element</p>
      <p>Каждый HTML Element содержит такие ключи:</p>
      <SelectComp variant={[
        {
          label: "object",
          component: (
            <Code>
{
`{
  // *--- Обязательные ---*
  tag | component: string | function,

  // *--- По ситуации ---*
  child: {*Такой с такими же свойствами*} | string/number | ref | refC | refO | refA,
  props: { [any]: [any] },
  key: string | number,
  hooks: { function }
}`
}
            </Code>
          )
        },
        {
          label: "jsx",
          component: (
            <Code>
{
`<"tag или component" props o-hooks o-key o-ref>
  child
</"tag или component">`
}
            </Code>
          )
        }
      ]} />
      <p>Пример создания компонента <Tcolor>DIV</Tcolor> с <Tcolor>ID = "tg"</Tcolor> и <Tcolor>CLASS = "cl"</Tcolor>, внутри которого будет лежать текст <Tcolor>Hello world</Tcolor>:</p>
      <SelectComp
        variant={[
          {
            label: "object",
            component: <Code>
{
`function component() {
  return {
    tag: "div",
    props: {
      id: "tg",
      class: "cl"
    },
    child: [ "Hello world" ]
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
`import orve from "orve"

function component() {
  return (
    <div id="tg" class="cl">
      Hello world
    <div>
  )
`
}
      </Code>
          }
        ]}
      />
      <p style="font-style: italic">*<Tcolor>Object</Tcolor> Стоит заметить, что если в <Tcolor>child</Tcolor> только один объект или текст, то можно не передавать массив.</p>
      <p>
        Попробуем использовать один компонент в другом:
      </p>
      <SelectComp variant={[
        {
          label: "object",
          component: <Code>
{
`// *--- Не главный компонент ---*
function component () {
  return {
    tag: "p",
    child: ["Hello"]
  }
}

// *--- Главный компонент ---*
function main() {
  return {
    tag: "div",
    child: [
      component
    ]
  }
}`
}
      </Code> 
        },
        {
          label: "jsx",
          component: <Code>
{
`import orve from "orve"

// *--- Не главный компонент ---*
function Component () {
  return (
    <p>
      Hello
    </p>
  )
}

// *--- Главный компонент ---*
function main() {
  return (
    <div>
      <Component />
    </div>
  )
}
`
}
          </Code>
        }
      ]} /> 
      <p>
        Чтобы вставить в компонент какой-то другой компонент, необходимо передать ссылку на функцию. В данном случае мы передаём в главный компонент доп. компонент.
      </p>
      <p>Пример импортирования доп. компонента в главный (Если они в разных файлах)</p>
      <SelectComp variant={[
        {
          label: "object",
          component: <div>
            <Code>
{
`// *--- Не главный компонент (url src/component/dop.js) ---*
export default function() {
  return {
    tag: "p",
    child: "Hello"
  }
}
`
}
      </Code>
      <Code>
{
`//*--- Главный компонент ---*
import Component (*Может быть любым названием*) from "./component/dop.js"

export default function() {
  return {
    tag: "div",
    child: Component
  }
}
`
}
      </Code>
          </div>
        },
        {
          label: "jsx",
          component: <div>
            <Code>
{
`import orve from "orve"

// *--- Не главный компонент (Допустим находиться по url src/component/dop.js) ---*
export default function() {
  return (
    <p>Hello</p>
  )
}
`
}
      </Code>
      <Code>
{
`import orve from "orve"

// *--- Главный компонент ---*
import Component (*Может быть любым названием*) from "./component/dop.js"

export default function() {
  return (
    <div>
      <Component />
    </div>
  )
}
`
}
      </Code>
          </div>
        }
      ]} />
      <SubTitle>Layer</SubTitle>
      <p>Чтобы передать какую-то информацию из одного компонента в другой, можно использовать layer.</p>
      <p>Пример создания и использования Layer.</p>
      <SelectComp
        variant={[
          {
            label: "object",
            component: <Code>
{
`// *--- Layer компонент ---*
function component (props) {
  return {
    tag: "p",
    child: [props.children]
  }
}

// *--- Главный компонент ---*
function main() {
  return {
    tag: "div",
    child: [
      {
        tag: component,
        child: "Hello"
      }
    ]
  }
}`
}
      </Code>
          },
          {
            label: "jsx",
            component: <Code>
{
`import orve from "orve"

// *--- Layer компонент ---*
function Component (props) {
  return (
    <p>{props.children}</p>
  )
}

// *--- Главный компонент ---*
function main() {
  return (
    <div>
      <Component>
        Hello
      </Component>
    </div>
  )
}`
}
      </Code>
          }
        ]}
      />
      <p>
        В данном случае мы помещаем layer в поле <Tcolor>tag</Tcolor>, что помогает библиотеке понять, что мы используем этот тип.<br />
        <span style="font-style:italic">* Стоит заметить, что <Tcolor>layer</Tcolor> не будет пересобиратся. На этапе билда, он переформирует объект один раз. Также, все, что вы положите в <Tcolor>props</Tcolor> и <Tcolor>children</Tcolor>, будет перенесено в компонент но не отобразится в <Tcolor>HTML Element</Tcolor>.</span>
      </p>
      <p>
        Рассмотрим Объект который приходит в Layer.
      </p>
      <Code>
{
`{
  [*] - Все что находится в объекте props.
  children: Array<any> - Берутся из child
}`
}
      </Code>

      <SubTitle>Важно знать при использование <Tcolor>jsx</Tcolor></SubTitle>
      <p style="font-style: italic">* Обязательно импортируйте <Tcolor>orve</Tcolor> перед началом написания компонентов с использование <Tcolor>jsx</Tcolor></p>
      <p style="font-style: italic">* Обратите внимание, компоненты и Layer должны быть написаны <Tcolor>с большой буквы</Tcolor>, иначе jsx воспримет их как кастомные html теги.</p>
      <SubTitle>Контекст <Tcolor>this</Tcolor></SubTitle>
      <p>В одном из следующих разделов будет рассказано, как создавать <a target="blank" href="#/plugin">плагины</a> для вашего приложения.</p>
      <p style="font-style: italic; font-size: 14px">* Plugin - некоторый функционал, который доступен всем компонентам в приложении.</p>
      <p>Чтоб иметь доступ к плагинам, необходим контекст.</p>
      <p>Существует 2 способа использовать контекст:</p>
      <SelectComp variant={[
        {
          label: "Первый",
          component: <Code>
{
`function Component() {
  *Тут доступен this*
}
`
}
          </Code>
        },
        {
          label: "Второй",
          component: <Code>
{
`import { Orve } from "orve";

const component = () => {
  Orve.context - равносильно this
}
`
}
          </Code>
        }
      ]} />
      <p style="font-style:italic">* Важно: Помимо context в Orve есть ещё globalContext. Его тоже можно использовать, но изначально в this приходит только Orve.context.</p>

      <p style="font-style:italic">* <Tcolor>Совместное использование</Tcolor> Вы можете писать компоненты в 2 стилях</p>
    </div>
  )
}