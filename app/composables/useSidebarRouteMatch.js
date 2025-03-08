export function useSidebarRouteMatch() {
  const route = useRoute()

  const hasI18n = typeof useLocaleRoute === 'function'
  const localeRoute = hasI18n ? useLocaleRoute() : null

  function match(path) {
    if (!path) return false

    if (hasI18n && localeRoute) {
      const localizedPath = localeRoute(path)
      return route.fullPath === localizedPath
        || route.fullPath.startsWith(`${localizedPath}/`)
    }
    else {
      return route.fullPath === path
        || route.fullPath.startsWith(`${path}/`)
    }
  }

  function findItemActive(items) {
    if (!items?.length) return null

    return items.find((item) => {
      const path = item.activePath || item.to
      return match(path)
    })
  }

  return { match, findItemActive }
}
