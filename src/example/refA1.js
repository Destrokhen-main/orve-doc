import orve, { ref } from "orve";

export default () => {
  const array = ref([
    {
      title: "Some text",
      description: "Some text"
    },
    {
      title: "Some text 1",
      description: "Some text 1"
    }
  ])
  
  return (
    <div>{array}</div>
  )
}