<template>
    <div class="border-2 border-slate-800 p-2 rounded">
      <NuxtLink :to="'/' + link">
        <div>
          <h3 class="font-bold my-2">{{ title }}</h3>
          <img :src="'/images/' + image" alt="" class="w-full h-[200px] object-cover object-top">
          <p class="text-sm my-2"><em>{{ date }}</em></p>
        </div>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
const props = defineProps({
    title: String,
    image: String,
    link: String,
    date: String,
})</script>
  