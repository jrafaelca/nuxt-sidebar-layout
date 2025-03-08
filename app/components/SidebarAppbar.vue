<script setup>
defineProps({
  title: { type: String, default: '' },
})

const appConfig = useAppConfig()
const { toggle } = useSidebar()

const actionsComponent = computed(() => ({
  component: appConfig?.sidebar?.appbar?.actions?.component || null,
  props: appConfig?.sidebar?.appbar?.actions?.props || {},
}))
</script>

<template>
  <div class="relative h-16 flex items-center gap-2 mb-5">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-menu"
      class="lg:hidden"
      @click="toggle"
    />

    <h1
      v-if="title.trim()"
      class="hidden text-2xl font-light text-[var(--ui-text-highlighted)] md:block"
    >
      {{ title }}
    </h1>

    <div
      v-if="$slots.actions || actionsComponent.component"
      class="ms-auto"
    />

    <slot name="actions">
      <Component
        :is="resolveComponent(actionsComponent.component)"
        v-bind="actionsComponent.props"
      />
    </slot>
  </div>
</template>
