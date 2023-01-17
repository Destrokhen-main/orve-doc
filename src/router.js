import { createRouter } from "orve-router";

import Main from "./view/main";
import Component from "./view/component";
import Webpack from "./view/project";
import Event from "./view/event";
import Ref from "./view/ref";
import RefA from "./view/refA";
import RefC from "./view/refC";
import Effect from "./view/effect";
import Hooks from "./view/lifeHooks";
import Plugin from "./view/plugin";
import RefL from "./view/refL";
import Watch from "./view/watch";
import Fragment from "./view/fragment";
import Utils from "./view/utils";
import Style from "./view/style";
import Async from "./view/async";

const router = [
  {
    path: "/",
    component: Main,
    meta: {
      title: "Главная"
    }
  },
  {
    path: "/webpack",
    component: Webpack,
    meta: {
      title: "Проект",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/component",
    component: Component,
    meta: {
      title: "Компонент",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/event",
    component: Event,
    meta: {
      title: "События (Event)",
      header: "Event"
    }
  },
  {
    path: "/ref",
    component: Ref,
    meta: {
      title: "Реактивные переменные",
      header: "Ref"
    }
  },
  {
    path: "/refA",
    component: RefA,
    meta: {
      title: "Отрисовка списков",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/refC",
    component: RefC,
    meta: {
      title: "Реактивный компонент",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/effect",
    component: Effect,
    meta: {
      title: "Effect",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/hooks",
    component: Hooks,
    meta: {
      title: "Хуки жизненого цикла",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/refL",
    component: RefL,
    meta: {
      title: "Доступ к HTML Element",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/watch",
    component: Watch,
    meta: {
      title: "Watch",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/fragment",
    component: Fragment,
    meta: {
      title: "Фрагменты",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/utils",
    component: Utils,
    meta: {
      title: "Кастомные теги",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/style",
    component: Style,
    meta: {
      title: "Стили для тегов",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/async",
    component: Async,
    meta: {
      title: "Асинхронный запрос",
      header: "Комопненты в ORVE"
    }
  },
  {
    path: "/plugin",
    component: Plugin,
    meta: {
      title: "Плагин",
      header: "Комопненты в ORVE"
    }
  },
];

const s = createRouter(router, "hash");
export default s;