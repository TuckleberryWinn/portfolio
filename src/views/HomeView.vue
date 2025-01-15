<script setup lang="ts">
import WorkItem from '../components/WorkItem.vue'
import data from '../assets/data.json'
console.log("what is data?", data);
</script>

<template>
  <main>
    <WorkItem
      v-for="item in data.items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
    />
  </main>
</template>
