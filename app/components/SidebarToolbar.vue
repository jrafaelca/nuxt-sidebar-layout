<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-center">
    <slot name="right" />
    <div class="ms-auto" />
    <slot name="left" />
  </div>
</template>
