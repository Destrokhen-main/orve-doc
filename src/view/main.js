import orve from "orve";

import Title from "../components/utils/MainTitle";
import SubTitle from "../components/utils/SubTitle"

export default () => {
  return (
    <div>
      <Title>Добро пожаловать в ORVE</Title>
      <SubTitle>
        Зачем нужен?
      </SubTitle>
      <p>
        Библиотека нужна для создания SPA.
      </p>
      <p>
        Данная библиотека пытается предложить свой подход для реактивных библиотек.<br />
        На данный момент библиотека развивается медленно, но Вы можете помочь мне и сообществу, которое будет ей пользоваться в будущем.
      </p>
      <SubTitle>
        Как помочь?
      </SubTitle>
      <p>
        Весь исходный код лежит на Github <br />
        <a target="blank" href="https://github.com/Destrokhen-main/Simple-Reactive-npm-project">Ссылка на webpack проект. Используйте его для разработки)</a> <br />
        <a target="blank" href="https://github.com/Destrokhen-main/Simple-Reactive-npm">Ссылка на npm пакет</a><br />
        <a target="blank" href="https://github.com/Destrokhen-main/Orve-Documentation" >(GITHUB) Ссылка на эту документацию (сделано с помощью orve)</a>
      </p>
    </div>
  )
}