import * as components from  "./components";
import type {App} from "vue";

export * from  "./components";

export default {
    install(app:App){
        for(let component in components){
            // @ts-ignore
            const Comp = components[component];
            if (Comp.install) {
                app.use(Comp);
            }
        }
        return app;
    }
}
