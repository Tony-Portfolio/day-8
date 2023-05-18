<template>
    <header class="w-12/12 mx-auto sticky top-0 left-0 bg-white backdrop-blur-[1px] z-[100]">
        <nav class="font-bold flex items-center justify-between w-10/12 mx-auto py-4">
            <div class="">
                <h2 class = "text-xl">
                    <NuxtLink to="/">Coster</NuxtLink>
                </h2>
            </div>
            <ul class="flex items-center justify-evenly gap-8 hidden md:flex">
                <li>
                    <NuxtLink to="/">Beranda</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">Tentang Kami</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/class/list">Kelas</NuxtLink>
                </li>
                <li><a href="https://codepen.io/Raka_ramadhan" target="_blank"><i class="fa-brands fa-codepen"></i>
                        Codepen</a></li>
            </ul>
            <p @click.stop="showNav = true" class="block md:hidden w-fit"><img src="/icon/bar.png" alt="bars"
                    class="w-[15px]">
            </p>
        </nav>
        <!-- <slot /> -->

    </header>
    <div class="w-screen h-screen bg-black/[0.4] z-[150] fixed top-0 left-0" id="overlay" @click="showNav = false"
        :class="{ 'opacity-1': showNav, 'left-[100%]': !showNav, 'opacity-0': !showNav}" style="transition: opacity 0.5s;"></div>
    <nav id="responsive" class="bg-[white] text-black overflow-hidden fixed h-[100%] w-[250px] right-[-250px] z-[200] top-0"
        style="transition: right 0.5s;" :class="{ 'show': showNav }">
        <ul class="flex items-start justify-between gap-2 flex-col p-4 h-full">
            <div class="w-full">
                <p class="text-right p-2 text-xl" @click="showNav = false">X</p>
                <li class="block w-full">
                    <NuxtLink to="/" class="w-full block p-2">Beranda</NuxtLink>
                </li>
                <hr class="border-1 border-black block w-full">
                <li class="block w-full">
                    <NuxtLink to="/about" class="w-full block p-2">Tentang Kami</NuxtLink>
                </li>
                <hr class="border-1 border-black block w-full">
                <li class="block w-full">
                    <NuxtLink to="/class/list" class="w-full block p-2">Kelas</NuxtLink>
                </li>
                <hr class="border-1 border-black block w-full">
            </div>
            <li class="block w-full text-center">
                <a href="https://codepen.io/Raka_ramadhan" target="_blank" class="w-full block p-2">
                    <i class="fa-brands fa-codepen"></i> Codepen
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showNav: false,
        };
    },
    watch: {
        $route() {
            this.showNav = false;
        },
    }
};
</script>

<style>
.show {
    right: 0;
}

/* Other styles for your application */
</style>