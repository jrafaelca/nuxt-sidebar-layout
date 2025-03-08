import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useTailwindBreakpoints = (ssrWidth = 768) => {
  return useBreakpoints(breakpointsTailwind, { ssrWidth })
}
