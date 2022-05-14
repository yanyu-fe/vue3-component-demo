import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'YButton',
  props: {
    type: {
      type: String as PropType<'default'|'primary'>,
      default: 'default',
    },
  },
  setup(_props, { slots }) {
    const prefixCls = 'ui-btn'
    const cls = computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${_props.type}`]: _props.type !== 'default',
    }))
    return () => {
      return <button class={cls.value}>{ slots.default && slots.default() }</button>
    }
  },
})
