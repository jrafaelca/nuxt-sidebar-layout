export function useSidebarItems() {
  const appConfig = useAppConfig()

  const hasI18n = typeof useI18n === 'function'
  const { t } = hasI18n ? useI18n() : { t: str => str }

  const hasLocaleRoute = typeof useLocaleRoute === 'function'
  const localeRoute = hasLocaleRoute ? useLocaleRoute() : path => path

  function translateLabel(label) {
    return label ? t(label) : undefined
  }

  function localizePath(path) {
    if (!path) return undefined
    return hasLocaleRoute ? localeRoute(path) : path
  }

  function processItem(item) {
    if (!item.label && !item.icon) {
      return null
    }

    const newItem = { ...item, position: item.position || 'start' }

    if (item.label) {
      newItem.label = translateLabel(item.label)
    }

    if (Object.prototype.hasOwnProperty.call(item, 'to')) {
      newItem.to = localizePath(item.to)
    }

    if (Array.isArray(item.children)) {
      newItem.children = item.children.map(processItem).filter(Boolean)

      // Si después de procesar, no quedan children y tampoco tiene un `to` o `href`, eliminamos el elemento
      // if (!newItem.children.length && !newItem.to && !newItem.href) {
      //   return null
      // }
    }

    return newItem
  }

  return computed(() => {
    const baseItems = appConfig?.sidebar?.navigation?.items || []

    return baseItems.map(processItem).filter(Boolean)
  })
}
