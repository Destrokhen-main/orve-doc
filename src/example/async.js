import orve, { ref } from "orve";

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