<script setup>
const appConfig = useAppConfig()
const { isOpen, items, currentItem, setCurrentItemName, toggle } = useSidebar()

const sidebarClasses = computed(() => ({
  compact: !isOpen.value ? '-translate-x-full md:translate-x-0' : '',
  expanded: !isOpen.value ? '-translate-x-[calc(100%+var(--ui-sidebar-collapse-width))]' : '',
}))

const logoComponent = computed(() => appConfig?.sidebar?.navigation?.logo || {})
const footerComponent = computed(() => appConfig?.sidebar?.navigation?.footer || {})

const currentContentComponent = computed(() => {
  const item = currentItem.value
  if (item?.children?.length) {
    return { component: 'SidebarNavigationMenu', props: { items: item.children } }
  }
  if (item?.content?.component) {
    return { component: item.content.component, props: item.content.props || {} }
  }
  return { component: null, props: {} }
})

const buttonPosition = computed(() =>
  isOpen.value
    ? 'left-[calc(var(--ui-sidebar-expanded-width)_+_(var(--ui-sidebar-expanded-width)/12))]'
    : 'left-[calc(var(--ui-sidebar-collapse-width)_+_(var(--ui-sidebar-collapse-width)/8))]',
)

const groupedItems = computed(() => ({
  start: items.value.filter(item => (item.position || 'start') === 'start'),
  end: items.value.filter(item => item.position === 'end'),
}))

const currentActiveLabel = computed(() => currentItem?.value?.label)

function handleChangeNavigation(item) {
  if (item.onClick) {
    item.onClick()
  }

  if (item.href) {
    return
  }

  setCurrentItemName(item.label)

  if (!isOpen.value) {
    isOpen.value = true
  }
}
</script>

<template>
  <div class="pointer-events-none fixed start-0 top-0 z-50 flex h-full xl:z-10">
    <!-- Compact Sidebar -->
    <div
      class="bg-[var(--ui-bg)] border-[var(--ui-border)] relative z-30 flex h-full flex-col items-center border-r w-[var(--ui-sidebar-collapse-width)] pointer-events-auto transition-all duration-300 ease-in-out"
      :class="sidebarClasses.compact"
    >
      <!-- Logo -->
      <div class="h-16 w-full flex items-center justify-center shrink-0">
        <slot name="header">
          <Component
            :is="resolveComponent(logoComponent.component)"
            v-if="logoComponent.component"
            v-bind="logoComponent.props"
          />
        </slot>
      </div>

      <!-- Sidebar Buttons -->
      <div class="flex-grow flex flex-col items-center justify-center space-y-4 overflow-y-auto">
        <template
          v-for="(groups, section) in groupedItems"
          :key="section"
        >
          <template
            v-for="item in groups"
            :key="item.icon"
          >
            <UTooltip
              :text="item.label"
              :content="{ align: 'center', side: 'right' }"
              :delay-duration="0"
              arrow
            >
              <UButton
                :variant="currentActiveLabel === item.label ? 'soft' : 'link'"
                :color="currentActiveLabel === item.label ? 'primary' : 'neutral'"
                :icon="item.icon"
                :to="item.to"
                :href="item.href"
                :target="item.target"
                @click="handleChangeNavigation(item)"
              />
            </UTooltip>
          </template>

          <div
            v-if="section === 'start'"
            class="mb-2 grow"
          />
        </template>
      </div>

      <!-- Footer -->
      <div class="h-16 w-full flex items-center justify-center shrink-0">
        <slot name="footer">
          <Component
            :is="resolveComponent(footerComponent.component)"
            v-if="footerComponent.component"
            v-bind="footerComponent.props"
          />
        </slot>
      </div>
    </div>

    <!-- Expandable Sidebar -->
    <div
      class="bg-[var(--ui-bg)] border-[var(--ui-border)] pointer-events-auto relative z-20 flex flex-col h-full w-[var(--ui-sidebar-expanded-width)] border-r transition-all duration-300 ease-in-out"
      :class="sidebarClasses.expanded"
    >
      <div class="h-16 w-full flex items-center justify-between px-4 shrink-0">
        <span class="font-medium">
          {{ currentItem?.label }}
        </span>
      </div>

      <KeepAlive>
        <Component
          :is="resolveComponent(currentContentComponent.component)"
          v-if="currentContentComponent.component"
          v-bind="currentContentComponent.props"
          :key="currentContentComponent.component"
        />
      </KeepAlive>
    </div>

    <!-- Toggle Button -->
    <UButton
      color="neutral"
      variant="outline"
      size="sm"
      icon="i-lucide-chevron-left"
      class="absolute top-5 z-40 pointer-events-auto transition-all duration-500 ease-in-out hidden md:inline-flex"
      :class="[buttonPosition, { 'rotate-180': !isOpen }]"
      @click="toggle"
    />
  </div>
</template>
