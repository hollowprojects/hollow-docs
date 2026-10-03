import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Availability from './Availability.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // Every guide page opens with the availability notice; the home page places it itself.
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(Availability) }),
  enhanceApp({ app }) {
    app.component('Availability', Availability)
  }
} satisfies Theme
