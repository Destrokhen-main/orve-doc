import orve, { ref } from "orve";

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
}


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
}