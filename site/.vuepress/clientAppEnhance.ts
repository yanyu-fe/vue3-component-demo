import {  defineClientAppEnhance } from "@vuepress/client";
// @ts-ignore
import uiDesign from "ui-design";
import "ui-design/style";
import "./custom.less";

export default defineClientAppEnhance(({app})=>{
    app.use(uiDesign);
})
