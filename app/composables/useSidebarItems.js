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
    const newItem = { ...item }

    newItem.position = item.position || 'start'

    if (item.label) {
      newItem.label = translateLabel(item.label)
    }

    if (Object.prototype.hasOwnProperty.call(item, 'to')) {
      newItem.to = localizePath(item.to)
    }

    if (Array.isArray(item.children) && item.children.length > 0) {
      newItem.children = item.children.map(child => processItem(child))
    }

    return newItem
  }

  return computed(() => {
    const baseItems = appConfig?.sidebar?.navigation?.items || []
    return baseItems.map(item => processItem(item))
  })
}
