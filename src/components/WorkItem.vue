<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  id: string,
  name: string,
}>()
</script>

<template>
    <RouterLink 
        :to="`/detail/${props.id}`"
    >{{ props.name }}</RouterLink>
</template>

<style scoped></style>