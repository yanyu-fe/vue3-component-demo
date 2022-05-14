import {  defineClientAppEnhance } from "@vuepress/client";
// @ts-ignore
import uiDesign from "ui-design";
import "ui-design/style";

export default defineClientAppEnhance(({app})=>{
    app.use(uiDesign);
})
