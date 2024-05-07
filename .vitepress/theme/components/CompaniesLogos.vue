<script setup lang="ts">
defineProps<{
  location: 'aside' | 'docs'
}>()
</script>

<template>
  <div
    class="logos"
    :data-location="location"
  >
    <a
      href="https://www.orillionsolutions.com/"
      target="_blank"
      class="item"
    >
      <div class="orillion-crop">
        <img
          src="/orillion-logo.svg"
          alt="Orillion logo"
        >
      </div>
    </a>
    <div>
      <a
        class="item"
        href="https://soramitsu.co.jp/"
        target="_blank"
      >
        <div class="soramitsu-crop">
          <img
            src="/SORAMITSU-red-main-landscape.svg"
            alt="Soramitsu logo"
          >
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.logos {
  margin: 16px 0;
  gap: 8px;
  display: flex;
  justify-content: center;
}

.logos[data-location='aside'] {
  flex-flow: column;
}

img {
  min-width: 0;
  object-fit: cover;
  transition: filter 0.15s ease;
}

.item {
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
}

.item {
  background: #f9f9f9; /* TODO: use --vt-c-white-soft after VitePress update */
}

.dark .item {
  background: #242424; /* TODO: use --vt-c-bg-soft after VitePress update */
}

.dark .item:hover {
  background: #f1f1f1;
}

.dark img {
  filter: grayscale(1) invert(1);
}

.item:hover img {
  filter: none;
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
