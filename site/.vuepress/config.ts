import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineUserConfig<DefaultThemeOptions,ViteBundlerOptions>({
    title:"前端组件库",
    plugins: [['@yanyu-fe/vuepress-plugin-code-block', {}]],
    locales:{
        "/":{
            lang:"zh-CN",
            title:"ui-design",
        }
    },
    lang:"zh-CN",
    themeConfig:{
        locales:{
            "/":{
                navbar:navbar.zh,
                sidebar:sidebar.zh
            }
        }
    },
    bundlerConfig:{
        viteOptions:{
            plugins:[vueJsx()],
            resolve:{
                alias:{
                    "ui-design":resolve(__dirname,"../../packages/ui/src/index.ts")
                }
            }
        }
    }
})