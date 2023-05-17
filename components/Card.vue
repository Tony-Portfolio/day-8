<template>
  <div
    class="bg-white p-4 shadow-lg rounded flex flex-col h-full hover:shadow-2xl hover:bottom-[10px] bottom-0 transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.6)] relative"
    style="transition:bottom 0.5s, box-shadow 0.5s;">
    <NuxtLink :to = "'/' + link">
      <img :src="'images/' + image" alt="" class="h-[250px] object-cover object-top">
    </NuxtLink>
  </div>
</template>
  
<script setup>
const props = defineProps({
  title: String,
  image: String,
  link: String,
  date: String,
})
</script>
  