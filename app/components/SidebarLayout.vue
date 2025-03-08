<script setup>
const appConfig = useAppConfig()
const { isOpen, toggle } = useSidebar()

const panelsComponent = computed(() => ({
  component: appConfig?.sidebar?.panels?.component || null,
  props: appConfig?.sidebar?.panels?.props || {},
}))

const mainContentClasses = computed(() =>
  isOpen.value
    ? 'lg:ms-[calc(var(--ui-sidebar-expanded-width)_+_var(--ui-sidebar-collapse-width))] lg:max-w-[calc(100%_-_var(--ui-sidebar-expanded-width)_-_var(--ui-sidebar-collapse-width))]'
    : 'lg:ms-[calc(14px_+_var(--ui-sidebar-collapse-width))] lg:max-w-[calc(100%_-_14px_-_var(--ui-sidebar-collapse-width))]',
)
</script>

<template>
  <div class="bg-[var(--ui-bg-muted)]">
    <slot name="navigation">
      <SidebarNavigation />
      <!-- Mobile Overlay (Behind Sidebar) -->
      <div
        role="button"
        tabindex="0"
        class="bg-[var(--ui-bg)] fixed inset-0 z-40 transition-opacity duration-300 lg:hidden"
        :class="isOpen ? 'opacity-50 dark:opacity-75' : 'opacity-0 pointer-events-none'"
        @click="toggle"
      />
    </slot>

    <!-- Main Content -->
    <div
      class="relative min-h-screen w-full overflow-x-hidden transition-all duration-300"
      :class="mainContentClasses"
    >
      <slot />
    </div>

    <slot name="panels">
      <Component
        :is="resolveComponent(panelsComponent.component)"
        v-if="panelsComponent.component"
        v-bind="panelsComponent.props"
      />
    </slot>
  </div>
</template>
