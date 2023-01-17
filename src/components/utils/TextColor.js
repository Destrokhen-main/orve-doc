import orve from "orve"

export default (props) => {
  const style = `
  background-color: #e2e2e2;
  border-radius: 5px;
  padding: 3px;`

  return (
    <span style={style}>
      {props.children}
    </span>
  )
}