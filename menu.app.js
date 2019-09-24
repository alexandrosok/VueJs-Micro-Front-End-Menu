import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Hello from './src/App.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#menu',
    render: r => r(Hello)
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap,
]

export const mount = [
  vueLifecycles.mount,
]

export const unmount = [
  vueLifecycles.unmount,
]
