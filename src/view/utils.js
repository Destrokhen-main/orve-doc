import orve, { ref } from "orve";

import Title from "../components/utils/MainTitle";
import SelectComp from "../components/utils/betw";
import Code from "../components/utils/code";


const StyleTable = {
  header: {
    backgroundColor: "#dadada",
    border: "1px solid black",
    textAlign: "center"
  },
  body: {
    border: "1px solid black"
  }
}

/*
{
  name: "Имя",
  dec: "Что делает",
  jsxOnly: "только для jsx",
  objectOnly: "только для объектов",
  single: false - default - нужны ли дети
}
*/

export default () => {
  const ar = ref([
    {
      name: "comment",
      dec: "Создаст коммент с текстом который вы поместите в child",
    },
    {
      name: "fragment",
      dec: "Создаст фрагмет",
      jsxOnly: ""
    }
  ]);


  return (
    <div>
      <Title>Зашитые кастомные теги</Title>
      <p>Тут будет список названий кастомных тегов, которые можно использовать</p>
      <p>Для примера:</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`...
{
  tag: "comment",
  child: "description comment"
}
...`
}
          </Code>
        },
        {
          label: "jsx",
          component: <Code>
{
`...
<comment>description comment</comment>
...`
}
          </Code>
        }
      ]} />
      <p style="font-style: italic">Для jsx используйте название кастомных компонентов только с маленькой буквы.</p>
      <p style="font-style: italic">Список будет обновляться.</p>
      <table width="100%">
        <tr>
          <th style={StyleTable.header}>Tag</th>
          <th style={StyleTable.header}>Описание</th>
        </tr>
        {ar.forList((e) => {
          const jsx = e.jsxOnly !== undefined ? e.jsxOnly : e.name;
          const object = e.objectOnly !== undefined ? e.objectOnly : e.name;

          return <tr>
            <td style="border: 1px solid black; text-align:center">{e.name}</td>
            <td style={StyleTable.body}>
              <p>{e.dec}</p>
              <SelectComp variant={[
                {
                  label: "Object",
                  component: <Code>
{
`{
  tag: "${object}"${e.single === undefined || !e.single ? "," : ""}${e.single === undefined || !e.single ? "\n  child: ..." : ""}
}`
}
                  </Code>
                },
                {
                  label: "jsx",
                  component: <Code>
{
`${e.single === undefined || !e.single ? "<" + jsx +"></" + jsx +">" : "<" + jsx +" />"}`
}
                  </Code>
                }
              ]} />
            </td>
          </tr>
        })}
      </table>
    </div>
  )
}