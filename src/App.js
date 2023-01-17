import orve from "orve";
import "./style.scss";

import "./assets/fonts/font.css";

import Header from "./components/header";
import Body from "./components/body";

export default function () {
  return (
    <div class="h-100">
      <Header />
      <Body />
    </div>
  )
}