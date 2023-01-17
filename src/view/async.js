import orve from "orve";

import Title from "../components/utils/MainTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SelectComp from "../components/utils/betw";

import Async from "../example/async";
import Example from "../components/utils/example";

export default () => {
  return (
    <div>
      <Title>Асинхронные запросы</Title>
      <p>Перед примером стоит помнить, что компоненты в orve не могут собираться в асинхронном режиме.</p>
      <Code>
{
`// **Не работает**
async function () {
  const a = await ...
}`
}
      </Code>
      <p>Для теста мы возьмём API <a target="blank" href="https://jsonplaceholder.typicode.com">jsonPlaceholder</a></p>
      <p>Так, задача проста: взять список и отрисовать.</p>
      <Example>
        <Async />
      </Example>
      <p>Реализация кода</p>
      <SelectComp variant={[
        {
          label: "Object",
          component: <Code>
{
`import { ref } from "orve";

export default function() {
  const array = ref([]);
  const result = ref({
    id: "не получено",
    userId: "не получено",
    title: "не получено",
    completed: "не получено"
  });
  const num = ref(1);

  const getData = (numInp = null) => {
    const numb = numInp !== null ? numInp : num.value !== "" ? num.value : 1;
    fetch('https://jsonplaceholder.typicode.com/todos/' + numb)
      .then(response => response.json())
      .then(json => {
        result.id = json.id;
        result.userId = json.userId;
        result.title = json.title;
        result.completed = json.completed ? "true" : "false";

        array.value.push(json);
      })
  }
  return (
    {
      tag: "div",
      hooks: {
        created: () => {
          getData();
        }
      }
      child: [
        {
          tag: "div",
          child: [
            "<p>id user:</p>",
            {
              tag: "input",
              props: {
                placeholder: "id",
                "@input": (e) => num.value = e.target.value,
                type: "number",
                value: num
              }
            },
            {
              tag: "button",
              props: {
                "@click": () => getData()
              }
            }
          ]
        },
        "<h4>--Result--</h4>",
        {
          tag: "div",
          child: [
            {
              tag: "table",
              props: {
                width: "100%"
              },
              child: [
                "<td>id</td>",
                {
                  tag: "td",
                  child: result.id
                },
                "<td>userId</td>",
                {
                  tag: "td",
                  child: result.userId
                },
                "<td>title</td>",
                {
                  tag: "td",
                  child: result.title
                },
                "<td>completed</td>",
                {
                  tag: "td",
                  child: result.completed
                }
              ]
            }
          ]
        },
        "<h4>--History--</h4>",
        {
          tag: "p",
          child: [
            array.forList((e) => {
              return {
                tag: "div",
                child: [
                  {
                    tag: "div",
                    child: [
                      "<span>id:</span>",
                      {
                        tag: "span",
                        child: e.id
                      },
                      "<span>userId:</span>",
                      {
                        tag: "span",
                        child: e.userId
                      },
                      "<span>title:</span>",
                      {
                        tag: "span",
                        child: e.title
                      },
                      "<span>completed:</span>",
                      {
                        tag: "span",
                        child: e.completed ? "true" : "false"
                      }
                    ]
                  }
                ]
              }
            })
          ]
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
`import orve, { ref } from "orve";

export default function() {
  const array = ref([]);
  const result = ref({
    id: "не получено",
    userId: "не получено",
    title: "не получено",
    completed: "не получено"
  });
  const num = ref(1);
  const getData = (numInp = null) => {
    const numb = numInp !== null ? numInp : num.value !== "" ? num.value : 1;
    fetch('https://jsonplaceholder.typicode.com/todos/' + numb)
      .then(response => response.json())
      .then(json => {
        result.id = json.id;
        result.userId = json.userId;
        result.title = json.title;
        result.completed = json.completed ? "true" : "false";

        array.value.push(json);
      })
  }
  return (
    <div
      o-hooks={{
        created: () => {
          getData();
        }
      }}
    >
      <div>
        <p>id user:</p>
        <input placeholder="id" onInput={(e) => num.value = e.target.value} type="number" value={num} />
        <button onclick={() => getData()}>Get data</button>
      </div>
      <h4>--Result--</h4>
      <div>
        <table width="100%">
          <tr>
            <td>id</td>
            <td>{result.id}</td>
          </tr>
          <tr>
            <td>userId</td>
            <td>{result.userId}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{result.title}</td>
          </tr>
          <tr>
            <td>completed</td>
            <td>{result.completed}</td>
          </tr>
        </table>
      </div>
      <h4>--History--</h4>
      <p>
        {array.forList((e) => {
          return (
            <div>
              <div>
                <span>id:</span>
                <span>{e.id}</span>
              </div>
              <div>
                <span>userId:</span>
                <span>{e.userId}</span>
              </div>
              <div>
                <span>title:</span>
                <span>{e.title}</span>
              </div>
              <div>
                <span>completed: </span>
                <span>{e.completed ? "true" : "false"}</span>
              </div>
            </div>
          )
        })}
      </p>
    </div>
  )
}
`
}
          </Code>
        }
      ]} />
    </div>
  )
}