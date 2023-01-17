import orve, { ref } from "orve";

import Title from "../components/utils/MainTitle";

import Example from "../components/utils/example";
import SubTitle from "../components/utils/SubTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";
import SelectComp from "../components/utils/betw";

import Example1 from "../example/ref1";
import Example2 from "../example/ref2";
import Example3 from "../example/ref3";

export default function() {
  return (
    <div>
      <Title>Ref</Title>
      <p>Реактивность в orve строится на proxy.</p>
      <p>Решим простую задачу: необходимо связать поле ввода с реактивной переменной и вывести её выше поля ввода.</p>
      <SubTitle>Import</SubTitle>
      <p>Прежде чем начать, нужно импортировать функцию, которая создаёт реактивную переменную.</p>
      <Code>{`import { ref } from "orve"`}</Code>
      <p>Теперь есть возможность создавать реактивные переменные.</p>
      <p>Чтобы создать реактивную переменную, необходимо внутри компонента вызвать функцию.</p>
      <p style="font-style: italic">* Стиль написания компонентов неважен.</p>
      <Code>
{
`function component() {

  const (*имя переменной*) = ref(*первичное значение*);

  return ...
}
`
}
      </Code>
      <p>
        На данный момент реактивными могут быть:<br />
        - String | Number<br />
        - Object<br />
        - Array<br />
        - Function<br />
        <br />
        * на самом деле, функция ref работает только для <Tcolor>string | number | function</Tcolor>. За <Tcolor>Object - refO и Array - refA</Tcolor> отвечают другие функции. В данном случае ref Будет выступать в роли маршутизатора.
      </p>

      <p>Теперь поместим реактивную переменную в компонент:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve";

function Component() {
  const r = ref(0);

  return {
    tag: "div",
    child: [ r ]
  }
}`
}
          </Code>
        },
        {
          label: "jsx",
          component: <Code>
{
`import orve, { ref } from "orve";

function Component() {
  const r = ref(0);

  return <div>{r}</<div>
}`
}
          </Code>
        }
      ]}/>
      <p>Теперь переменная будет отображаться в <Tcolor>div</Tcolor>.</p>
      <p>Добавим кнопку и попытаемся изменить реактивную переменную:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve";

function Component() {
  const r = ref(0);

  return {
    tag: "div",
    props: {
      "@click": () => {
        r.value += 1;
      }
    },
    child: [ r ]
  }
}`
}
          </Code>
        },
        {
          label: "jsx",
          component: <Code>
{
`import orve, { ref } from "orve";

function Component() {
  const r = ref(0);

  return <div onClick={() => { r.value += 1 }}>{r}</<div>
}`
}
          </Code>
        }
      ]}/>
      <p>Чтобы изменить реактивную переменную, нужно в переменной обратиться к <Tcolor>value</Tcolor> и присвоить ей значение. По итогу получим:</p>

      <Example>
        <Example1 />
      </Example>
      <p>Теперь, при нажатии на цифру, она будет увеличиваться на один.</p>
      <SubTitle>Что такое <Tcolor>value</Tcolor></SubTitle>
      <p>После вызова функции <Tcolor>ref</Tcolor> возвращается объект</p>
      <Code>
{
`{
  value: * Изначально тут лежит значение которое мы поместили в ref(*Вот сюда*) *
  parent: [] - Массив из всех элементов в HTML, где вы указали реактивную переменную.
}
`
}
      </Code>
      <p>Массив <Tcolor>parent</Tcolor> в разработке вам скорее всего не понадобится, но будет преимуществом, если вы будете понимать, для чего он нужен.</p>
      <p>По сути вся реактивность библиотеки строится на том, что реактивные переменные знают все места, где используются.</p>
      <p>Меняя значение value, библиотека автоматически пройдётся по parent и поменяет все, что нужно.</p>

      <p><Tcolor>Важный момент</Tcolor></p>
      <p>Не указывайте в компонентах <Tcolor>.value</Tcolor> реактивной переменной</p>
      <Code>
{
`// *--- НЕ РАБОТАЕТ ---*
function () {
  const r = ref(0);
  return {
    tag: "div",
    child: r.value
  }
}`
}
      </Code>
      <p> В таком случае меняться ничего не будет. Проблема тут в том, что вы указываете только значение, а не весь объект. Таким образом, parser не поймёт, обычное это значение или же реактивная переменная.</p>
      <hr />
      <p>Ещё примеры:</p>
      <p>Связь <Tcolor>input</Tcolor> и <Tcolor>p</Tcolor>:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve"

function component() {
  const r = ref("");

  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          "Ваш текст:",
          r
        ]
      },
      {
        tag: "input",
        props: {
          placeholder: "Введите что-то",
          "@input": (e) => {
            r.value = e.target.value;
          }
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
`import orve, { ref } from "orve";

function Component() {
  const r = ref("")

  return (
    <div>
      <p>Ваш текст: {r}</p>
      <input onInput={(e) => { r.value = e.target.value }} placeholder="Введите что-то"/>
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

      <p>Изменить <Tcolor>reactive props</Tcolor></p>
      <p>В данном примере будут показаны все возможные варианты изменения props.</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve";

function Component() {
  const id = ref("");
  const value = ref("");
  const clickEvent = ref(() => {
    id.value = "asd";
    clickEvent.value = () => { console.log("123") };
  });

  return {
    tag: "div",
    child: [
      {
        tag: "div",
        props: {
          id: id,
          "@click": clickEvent
        },
        child: "Click"
      },
      {
        tag: "input"
        props: {
          value: value,
          "@input": (e) => { value.value = e.target.value };
        }
      },
      {
        tag: "button",
        props: {
          "@click" () => {value.value = ""}
        }
        child: "Click"
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
`import orve, { ref } from "orve";

function Component() {
  const id = ref("");
  const value = ref("");
  const clickEvent = ref(() => {
    id.value = "asd";
    clickEvent.value = () => { console.log("123") };
  });

  return (
    <div>
      <div
        id={id}
        onClick={clickEvent}
      >
        Click
      </div>
      <input
        value={value}
        onInput={(e) => {value.value = e.target.value}}
      />
      <button onClick={() => {value.value = ""}} >Clear</button>
    </div>
  )
}
`
}
      </Code>
        }
      ]} />
      <Example>
        <Example3 />
      </Example>
      <br />
    </div>
  )
}