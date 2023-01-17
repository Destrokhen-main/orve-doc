import orve from "orve";

export default function(props) {
  return (
    <div class="example-window">
      <p style="margin-bottom: 4px;font-style:italic; font-size: 12px">Пример:</p>
      {props.children}
    </div>
  )
}