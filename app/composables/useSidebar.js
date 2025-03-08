export function useSidebar() {
  const route = useRoute()
  const { lg } = useTailwindBreakpoints()
  const { findItemActive } = useSidebarRouteMatch()

  const items = useSidebarItems()

  const isOpen = useState('sidebar-open', () => lg.value)
  const currentItemName = useState('sidebar-current-item-name', () => '')

  const currentItem = computed(() =>
    items.value.find(({ label }) => label === currentItemName.value),
  )

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function setCurrentItemName(name) {
    currentItemName.value = name
  }

  function updateCurrentItem() {
    const activeNavigationItem = findItemActive(items.value)

    if (activeNavigationItem) {
      currentItemName.value = activeNavigationItem.label
    }
  }

  watchEffect(() => {
    isOpen.value = lg.value
  })

  onMounted(updateCurrentItem)

  watch(() => route.fullPath, () => {
    updateCurrentItem()
    if (!lg.value) isOpen.value = false
  })

  return {
    items,
    currentItem,
    currentItemName,
    setCurrentItemName,
    isOpen,
    toggle,
  }
}
