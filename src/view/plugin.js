import orve from "orve";

import Title from "../components/utils/MainTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor";

import SubTitle from "../components/utils/SubTitle";

export default function() {
  return (
    <div>
      <Title>Плагины</Title>
      <p>Плагины помогают вашей разработке. Они могут давать вам новый функционал.</p>
      <p>Для того, чтобы создать плагин для вашего приложения, необходимо создать файл и написать в нём следующие настройки:</p>
      <Code>
{
`export default {
  setup(orve) {
  }
}
`
}
      </Code>
      <p>
        Теперь подробнее. Главная функция в плагине - это <Tcolor>setup</Tcolor>. Именно она запускается при подключение плагина.
        Когда вы это сделате, в функцию (setup) придёт глобальный объект <Tcolor>orve</Tcolor>.
      </p>
      <p style="font-style:italic">В консоли отображается плагин, который я подключил.</p>
      <p>Вам вернут все функции <Tcolor>orve</Tcolor> для создания реактивных переменных. Также <Tcolor>tree</Tcolor> (дерево компонентов, которое в итоге будет содержать все объекты) и <Tcolor>context</Tcolor></p>
      <p>Также вы можете просто отдать объект.</p>
      <Code>
{
`export default {
  someFunction
}
`
}
      </Code>
      <p>В таком случае все функции с этого объекта и переменные будут просто добавлены в <Tcolor>Context</Tcolor></p>
      <SubTitle>Подключение плагина в проект</SubTitle>
      <p>
        Для того, чтобы подключить плагин, Вам нужно зайти в файл <Tcolor>index.js</Tcolor> и прописать в нём следующую строку:
      </p>
      <Code>
{
`import orve, { createApp } from "orve";

import App from "./App";

import ПЛАГИН from "./path";

orve.use(ПЛАГИН);
createApp(App).mount("#app");
`
}
      </Code>
      <p>Плагин теперь будет доступен.</p>
      <p style="font-style:italic">* Желательно используйте use до createApp </p>
      <SubTitle>Дополнительные моменты</SubTitle>
      <p>Так как orve - это объект, вы можете положить в него любую необходимую вам информацию. Я бы не советовал так делать, но вдруг вам это будет нужно.</p>
      <p>Чтобы потом иметь доступ к вашей информации, вам нужно импортировать объект orve в компонент:</p>
      <Code>{`import { Orve } from "orve" `}</Code>
      <p>Теперь вы сможете получить доступ внутри компонетов к дереву, контексту или функциям которые вы добавили в Orve.</p>
      <p>Также вы можете по ходу разработки подключать плагины. Для этого используйте <Tcolor>use</Tcolor>.</p>
      <Code>
{
`import orve from "orve"

function component() {
  orve.use(ПЛАГИН)
  return ...
}
`
}
      </Code>
      <p>Они станут доступны с момента подключения и во всех компонентах ниже.</p>
    </div>
  )
}