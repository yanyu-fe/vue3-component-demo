import {  defineClientAppEnhance } from "@vuepress/client";
// @ts-ignore
import uiDesign from "ui-design";

export default defineClientAppEnhance(({app})=>{
    app.use(uiDesign);
})