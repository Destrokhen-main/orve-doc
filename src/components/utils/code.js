import orve from "orve";

const highlight = require('highlighter')();

export default (props) => {
  return (
    <div class="code-pack mt-2 mb-2">
      <pre>
        <code>{highlight(props.children[0], "js.patch")}</code>
      </pre>
    </div>
  )
}