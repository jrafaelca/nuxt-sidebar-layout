<script setup>
defineProps({
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <div class="relative flex w-full grow flex-col p-4 overflow-y-auto">
    <UNavigationMenu
      v-if="items?.length"
      :items="items"
      variant="link"
      orientation="vertical"
    />
  </div>
</template>
