import 'virtual:uno.css'
import './index.css'

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom, { type Zoom } from 'medium-zoom'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()

    let zoom: Zoom | undefined
    const initZoom = () => {
      zoom?.detach()
      zoom = mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }

    onMounted(initZoom)
    watch(
      () => route.path,
      () => nextTick(initZoom),
    )
  },
}
