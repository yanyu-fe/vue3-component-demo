import { defineComponent } from 'vue'
export default defineComponent({
  name: 'YButton',
  setup(_props, { slots }) {
    return () => {
      return <button>{ slots.default && slots.default() }</button>
    }
  },
})
