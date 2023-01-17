import orve, { ref } from "orve";

import Title from "../components/utils/MainTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";

import Example from "../components/utils/example";
import Example1 from "../example/fragment1";

export default () => {
  return (
    <div>
      <Title>Fragment</Title>
      <p>Фрагмент - это полезная фича для вашего проекта.</p>
      <p>Давайте на примере рассмотрим, как он поможет в разработке.</p>
      <br />
      <p>Есть реактивный массив данных, нужно построить таблицу :</p>
      <Example>
        <Example1 />
      </Example>
      <p>Один из способов решения может быть таким:</p>
      <Code>
{
`table
....
ref([...]).forList((e) => {
  return tr
          td ... /td
          td ... /td 
         /tr
})
/table
`
}
      </Code>
      <p>Да, такое решение поможет вам, но что делать, если у вас очень много столбцов?</p>
      <p>Тогда, по-хорошему, нужно создать компонент и передать часть логики в него. Это сократит внешний вид вашего компонента, но мы столкнёмся с одной проблемой.</p>
      <p>В компоненте нужен родительский  <Tcolor>tag</Tcolor>. Что <Tcolor>jsx</Tcolor>, что <Tcolor>Object</Tcolor> требуют его от вас. Конечно, вы можете просто перенести tr в компонент, но что если компонент отрисовывает только часть колонок?</p>
      <p>В таком случае нам поможет <Tcolor>fragment</Tcolor></p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`{
  tag: "fragment",
  props: ИХ НЕ МОЖЕТ БЫТЬ ТУТ
  child: ...
}
`
}
          </Code>
        },
        {
          label: "jsx",
          component: <Code>
{
`<>
  ...
</>`
}
          </Code>
        }
      ]} />
      <p>Теперь решим поставленную задачу</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve";

const Comp1 = ({p}) => {
  return {
    tag: "fragment",
    child: [
      {
        tag: "td",
        props: {
          style : "border: 1px solid"
        },
        child: p.name
      },
      {
        tag: "td",
        props: {
          style : "border: 1px solid"
        },
        child: p.surname
      }
    ]
  }
}


export default () => {
  const r = ref([
    {
      name: "name-1",
      surname: "surname-1"
    },
    {
      name: "name-2",
      surname: "surname-2"
    },
    {
      name: "name-3",
      surname: "surname-3"
    },
    {
      name: "name-4",
      surname: "surname-4"
    }
  ]);

  return {
    tag: "table",
    props: {
      style: "width: 100%"
    },
    child: [
      {
        tag: "tr",
        child: [
          {
            tag: "th",
            props: {
              style: "border: 1px solid black; background-color: #dadada"
            },
            child: "Имя"
          },
          {
            tag: "th",
            props: {
              style: "border: 1px solid black; background-color: #dadada"
            },
            child: "Фамилия"
          }
        ]
      },
      r.forList(e => {
        return  {
          tag: "tr",
          child: {
            tag: Comp1,
            props: {
              p: e
            }
          }
        }
      })
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
`import orve, { ref } from "orve";

const Comp = ({ p }) => {
  return (
    <>
      <td style="border: 1px solid">{p.name}</td>
      <td style="border: 1px solid">{p.surname}</td>
    </>
  )
}

const s = () => {
  const r = ref([
    {
      name: "name-1",
      surname: "surname-1"
    },
    {
      name: "name-2",
      surname: "surname-2"
    },
    {
      name: "name-3",
      surname: "surname-3"
    },
    {
      name: "name-4",
      surname: "surname-4"
    }
  ]);

  return (
    <table style="width: 100%">
      <tr>
        <th style="border: 1px solid black; background-color: #dadada">Имя</th>
        <th style="border: 1px solid black; background-color: #dadada">Фамилия</th>
      </tr>
      {
        r.forList(e => {
          return <tr>
                  <Comp p={e} />
                </tr>
        })
      }
    </table>
  )
}`
}
          </Code>
        }
      ]} />
      <p style="font-style:italic"> * На данный момент fragment плохо работает внутри forList.</p>
    </div>
  )
}