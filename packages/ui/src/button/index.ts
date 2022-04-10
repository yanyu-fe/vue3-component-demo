import Button from "./button";
import type { Plugin,App } from  "vue";

Button.install = (app:App) => {
  app.component(Button.name, Button);
  return app;
};


export default Button as typeof Button & Plugin;