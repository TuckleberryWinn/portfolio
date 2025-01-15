<script setup lang="ts">
import data from '../assets/data.json'
const props = defineProps<{
  id: string,
}>()
const item = data.items.find((item) => item.id === props.id );
</script>

<template>
  <div class="detail">
    <h1>This is a detail page</h1>
    <div 
      v-if="!item"
    >Invalid ID</div>
    <div
      v-else
    >
      <h1>{{ item.name }}</h1>
      <div
        v-html="item.description"
      ></div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
