<<<<<<< HEAD
import { defineUserConfig,defaultTheme,viteBundler } from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import codeBlockPlugin  from "@yanyu-fe/vuepress-plugin-code-block"
=======
import { defineUserConfig,defaultTheme ,viteBundler} from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block"
>>>>>>> dev-ci-study
import { resolve } from "path";

export default defineUserConfig({
    title:"前端组件库",
<<<<<<< HEAD
    base:process.env.NODE_ENV === 'development' ? '/' :"/vue3-component-demo/",
    plugins: [codeBlockPlugin({})],
=======
    base: process.env.NODE_ENV==="production"? "/vue3-component-demo/" : "/",
    plugins: [
        codeBlockPlugin()
    ],
>>>>>>> dev-ci-study
    locales:{
        "/":{
            lang:"zh-CN",
            title:"ui-design",
        }
    },
    lang:"zh-CN",
    theme:defaultTheme({
        locales:{
            "/":{
                navbar:navbar.zh,
                sidebar:sidebar.zh
            }
        }
    }),
    bundler:viteBundler({
        viteOptions:{
            plugins:[vueJsx()],
            resolve:{
                alias:{
                    "ui-design":resolve(__dirname,"../../packages/ui/src/index.ts")
                }
            }
        }
    })
})
