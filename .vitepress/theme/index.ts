import 'virtual:uno.css'
import './index.css'

import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CompaniesLogos from './components/CompaniesLogos.vue'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom, { type Zoom } from 'medium-zoom'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(CompaniesLogos, { location: 'aside' }),
    })
  },
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component('CompaniesLogos', CompaniesLogos)
  },
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
