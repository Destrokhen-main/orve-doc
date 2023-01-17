import orve from "orve";

export default function(props) {
  return (
    <div class={props.class + " content-part "}>
      {props.children}
    </div>
  )
}