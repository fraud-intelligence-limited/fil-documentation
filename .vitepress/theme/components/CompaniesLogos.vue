<script setup lang="ts">
defineProps<{
  location: 'aside' | 'docs'
}>()
</script>

<template>
  <div
    class="logos"
    :class="{
      'flex items-center justify-center space-x-4': location === 'docs',
      'space-y-2 flex flex-col items-center max-w-max': location === 'aside',
    }"
    :data-location="location"
  >
    <div class="orillion-crop">
      <a
        href="https://www.orillionsolutions.com/"
        target="_blank"
      >
        <img
          src="/orillion-logo.svg"
          alt="Orillion logo"
        >
      </a>
    </div>
    <div class="soramitsu-crop">
      <a
        href="https://soramitsu.co.jp/"
        target="_blank"
      >
        <img
          src="/SORAMITSU-red-main-landscape.svg"
          alt="Soramitsu logo"
        >
      </a>
    </div>
  </div>
</template>

<style scoped>
.logos {
  margin: 16px 0;
  padding: 8px;
  background-color: var(--vp-c-white);
  border-radius: 8px;
  min-width: 0;
}

img {
  min-width: 0;
  object-fit: cover;
}

/* the following quirks needed to adjust the images,
   because their source is not normalized */

.soramitsu-crop {
  width: 140px;
  height: 40px;
  overflow: hidden;
}

.soramitsu-crop img {
  margin-left: -30px;
  max-width: none;
  width: 200px;
  height: 40px;
}

.orillion-crop {
  height: 40px;
  overflow: hidden;
}

.orillion-crop img {
  width: 100px;
  height: 40px;
  margin-top: -3px;
  max-width: none;
}
</style>
