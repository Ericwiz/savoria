import { useWindowSize } from '@vueuse/core'
export default defineNuxtPlugin((nuxtApp) => {
  const {width, height} = useWindowSize()
    return {
      provide: {
        width: width
      }
    }
  })
  