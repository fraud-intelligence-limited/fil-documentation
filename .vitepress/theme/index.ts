import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CompaniesLogos from './components/CompaniesLogos.vue'
import 'virtual:uno.css'

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
}
