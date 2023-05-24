import orve from "orve";

import Title from "../components/utils/MainTitle";
import SubTitle from "../components/utils/SubTitle"

export default function(){
  return (
    <div>
      <Title>{this.lang.langObject.main_message1}</Title>
      <SubTitle>
        {this.lang.langObject.main_message2}
      </SubTitle>
      <p>
        {this.lang.langObject.main_message3}
      </p>
      <p>
        {this.lang.langObject.main_message4}
      </p>
      <SubTitle>
        {this.lang.langObject.main_message5}
      </SubTitle>
      <p>
        {this.lang.langObject.main_message6} <br />
        <a target="blank" href="https://github.com/Destrokhen-main/Simple-Reactive-npm-project">{this.lang.langObject.main_message7}</a> <br />
        <a target="blank" href="https://github.com/Destrokhen-main/Simple-Reactive-npm">{this.lang.langObject.main_message8}</a><br />
        <a target="blank" href="https://github.com/Destrokhen-main/Orve-Documentation" >{this.lang.langObject.main_message9}</a>
      </p>
    </div>
  )
}