<script setup lang="ts">
defineProps<{
  location: 'aside' | 'docs'
}>()
</script>

<template>
  <div
    class="logos"
    :class="{
      'flex items-center justify-center ': location === 'docs',
      'space-y-4': location === 'aside',
    }"
    :data-location="location"
  >
    <img
      src="/orillion-logo.png"
      alt="Orillion logo"
      width="100"
    >
    <img
      src="/soramitsu-logo-1.png"
      alt="Soramitsu logo"
      width="140"
    >
  </div>
</template>

<style scoped>
.logos {
  margin: 16px 0;
  padding: 16px;
  background-color: var(--vp-c-white);
  border-radius: 8px;
  min-width: 0;
}

img {
  min-width: 0;
}

.logos[data-location='docs'] img + img {
  padding-left: 8px;
  margin-left: 8px;
  border-left: 1px solid var(--vp-c-divider);
}
</style>
