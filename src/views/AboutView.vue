<template>
  <div class="about">
    <h1>{{ about.msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useAboutStore } from '@/store/about'
const about = useAboutStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
