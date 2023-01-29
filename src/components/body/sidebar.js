import orve, { effect } from "orve";

import { RouterLink } from "orve-router";

export default function (props) {
  const s = this.$router.route();
  
  const AllRouter = s.allRouter.filter((e) => e.component !== undefined && e.meta !== undefined);
  return (
    <div class={props.class + " ps-0"} style="min-height: 100%">
      <div class=" ps-2 sidebar h-100">
        {AllRouter.map((e) => {
          return (
            <a class={effect(() => {
              let style = "sidebar__item "
              if (e.path === this.$router.currentRoute()) {
                style += "sidebar__active";
              }

              return style;
            }, [ RouterLink ])}
              onClick={() => {this.$router.push(e.path)}}

            >{this.lang.langObject[e.meta.key]}</a>
          )
        })}
      </div>
    </div>
  )
}