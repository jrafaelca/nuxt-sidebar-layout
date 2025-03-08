<template>
  <UTooltip
    text="Notifications"
    arrow
    :content="{ side: 'bottom' }"
  >
    <UButton
      icon="i-lucide-bell"
      color="neutral"
      variant="ghost"
    />
  </UTooltip>

  <UTooltip
    text="Change Language"
    arrow
    :content="{ side: 'bottom' }"
  >
    <UButton
      icon="i-lucide-languages"
      color="neutral"
      variant="ghost"
    />
  </UTooltip>

  <UTooltip
    text="Theme Settings"
    arrow
    :content="{ side: 'bottom' }"
  >
    <UButton
      icon="i-lucide-swatch-book"
      color="neutral"
      variant="ghost"
    />
  </UTooltip>

  <UTooltip
    text="User Profile"
    arrow
    :content="{ side: 'bottom' }"
  >
    <UButton
      color="neutral"
      variant="link"
      :avatar="{
        alt: 'Demo User',
        size: 'md',
      }"
      :ui="{ base: 'p-0' }"
    />
  </UTooltip>
</template>
