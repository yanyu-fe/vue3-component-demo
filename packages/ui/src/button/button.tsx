import type { PropType } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'YButton',
  props: {
    type: {
      type: String as PropType<'default'|'primary'>,
      default: 'default',
    },
  },
  setup(_props, { slots }) {
    return () => {
      return <button>{ slots.default && slots.default() }</button>
    }
  },
})
