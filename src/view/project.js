import orve from 'orve';

import Title from "../components/utils/MainTitle";
import SubTitle from "../components/utils/SubTitle";
import Code from "../components/utils/code";
import Tcolor from "../components/utils/TextColor"

export default () => {
  return (
    <div>
      <Title>Структура проекта</Title>
      <p>Скачать проект вы можете по этой <a href="https://github.com/Destrokhen-main/Simple-Reactive-npm-project" target="blank">ссылке</a>.</p>
      <SubTitle>Почему именно она?</SubTitle>
      <p>
        В сборке уже описаны необходимые плагины для работы с библиотекой.<br/>
        В основном библиотека разрабатывалась на этой webpack сборке.
      </p>
      <SubTitle><Tcolor>Scripts</Tcolor> npm проекта</SubTitle>
      <p>
        Для того, чтобы запустить <Tcolor>live-serve</Tcolor> необходимо написать в консоли:
        <Code>npm run dev</Code>
        Проект запустится по адресу <Tcolor>localhost:8080</Tcolor>.<br />
        В терминале будут ссылки, можете нажать на них.<br />
        В данном режиме, проект будет автоматически обновляться после ваших изменений.
      </p>
      <p>
        Если вам необходимо собрать проект для production,<br />
        используйте следующую команду:
        <Code>npm run build</Code>
        После, в папке <Tcolor>dist</Tcolor> будет ваш проект. Вы сможете положить его на ваш сервер. Файлы в проекте будут минимизированы.
      </p>
      <SubTitle>Файловая система</SubTitle>
      <Code>
{
`public
    ├─favicon.ico
    ├─index.html
    └─robots.txt
    src
    ├─index.js
    └─app.js`
}
      </Code>
      <p>
        В <Tcolor>public</Tcolor> хранится иконка, которая будет отображаться в закладке.<br/>
        <Tcolor>index.html</Tcolor>, который будет хранить в себе итоговый проект.<br/>
        <Tcolor>index.js</Tcolor> - главный файл.<br/>
        <span style={{ fontStyle: "italic" }}>* Пожалуйста не переименовывайте <Tcolor>index.js</Tcolor> файл, иначе придётся менять настройку webpack</span>
      </p>
    </div>
  )
}