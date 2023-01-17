import orve from "orve"

import SideBar from "./body/sidebar";
import Content from "./body/content";
import { RouterLink } from "orve-router";
import Footer from "./footer"

export default () => {
  return (
    <div class="container-fluid">
      <div class="row pt-1">
        <SideBar class="col-3"/>
        <Content class="col-9">
          {RouterLink}
        </Content>
        <Footer />
      </div>
    </div>
  )
}