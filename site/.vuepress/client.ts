import {  defineClientConfig } from "@vuepress/client";
// @ts-ignore
import uiDesign from "ui-design";
import "ui-design/style";

export default defineClientConfig({
    enhance({app}){
        app.use(uiDesign);
    }
})
