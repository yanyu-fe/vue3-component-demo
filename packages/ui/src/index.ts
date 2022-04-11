import type { App } from 'vue'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    for (const component in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const Comp = components[component]
      if (Comp.install)
        app.use(Comp)
    }
    return app
  },
}
