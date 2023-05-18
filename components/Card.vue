<template>
  <div
    class="bg-white p-4 shadow-lg rounded flex flex-row w-full h-full hover:shadow-2xl hover:bottom-[5px] bottom-0 transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.6)] relative gap-4"
    style="transition:bottom 0.5s, box-shadow 0.5s;">
    <NuxtLink :to="'' + link" class="flex w-full gap-4 flex-col">
      <img :src="'/images/' + image" alt=""
        class="h-[250px] w-full md:w-[300px] xl:w-[400px] block object-cover object-top">
      <div class="flex-grow">
        <div class="flex items-start justify-between bg-gray-100/[0.8] p-2 rounded flex-col gap-2">
          <h3 class="text-lg font-bold uppercase">{{ title }}</h3>
          <div class="">
            <ul class="flex gap-2">
              <li>
                <NuxtLink href="/class/html-html.jpg" class="bg-[#542eff] p-2 py-1 rounded text-white text-center text-sm">{{ lang1 }}</NuxtLink>
              </li>
              <li>
                <NuxtLink href="/class/css-css.jpeg" class="bg-[#542eff] p-2 py-1 rounded text-white text-center text-sm">{{ lang2 }}</NuxtLink>
              </li>
              <li v-if="lang3 !== '' && lang3">
                <NuxtLink href="/class/javascript-javascript.jpg" class="bg-[#542eff] p-2 py-1 rounded text-white text-center text-sm">{{ lang3 }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <p></p>
        </div>
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
  lang1: String,
  lang2: String,
  lang3: String,
})
</script>
  