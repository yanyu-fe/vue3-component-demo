import { defineUserConfig,defaultTheme ,viteBundler} from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block"
import { resolve } from "path";
export default defineUserConfig({
    title:"前端组件库",
    base: process.env.NODE_ENV === "production" ? "/vue3-component-demo/" : "/",
    plugins: [
        codeBlockPlugin()
    ],
    locales:{
        "/":{
            lang:"zh-CN",
            title:"ui-design",
        }
    },
    lang: "zh-CN",
    theme: defaultTheme({
        locales: {
            "/": {
                navbar: navbar.zh,
                sidebar: sidebar.zh
            }
        }
    }),
    bundler:viteBundler({
        viteOptions:{
            plugins:[vueJsx()],
            resolve:{
                alias:{
                    "ui-design/style":resolve(__dirname,"../../packages/ui/src/style.ts"),
                    "ui-design":resolve(__dirname,"../../packages/ui/src/index.ts"),
                }
            },
            css:{
                preprocessorOptions:{
                    less:{
                     modifyVars:{
                         "html-dark-selector": "~'html.dark'"
                     }
                    }
                }
            }
        },
    })
})
