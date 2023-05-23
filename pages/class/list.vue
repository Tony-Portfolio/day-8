<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="class">
                <h2 class="font-bold text-4xl my-6">Kelas</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
                    <div class="bg-white shadow-lg rounded" v-for="item in kelasData" :key="item.id">
                        <NuxtLink :to="/class/ + item.id" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img :src="item.img" alt="" class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <h3 class="font-bold text-2xl flex items-center">{{ item.title }}</h3>
                                    <p class="my-2 text-sm">{{ item.description }}</p>
                                </div>
                            </div>
                            <div class="">
                                <p
                                    class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                    Mulai
                                    Kelas</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </section>
            <!-- <section id="class" class="">
                <h2 class="font-bold text-4xl my-6">Tutorial</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card title="Web Portfolio Sederhana" image="tutorial-1.png" link="/tutorial/tutorial-1" date="12 Januari 2002" lang1 = "HTML" lang2 = "CSS">
                    </Card>
                    <Card title="Reponsive Desain" image="tutorial-2.png" link="#" date="20 Januari 2002" lang1 = "HTML" lang2 = "CSS"></Card>
                    <Card title="Mendesain sebuah website" image="tutorial-3.jpg" link="#" date="14 Februari 2002" lang1 = "HTML" lang2 = "CSS"></Card>
                    <Card title="Website interaktif" image="tutorial-4.jpg" link="#" date="28 Februari 2002" lang1 = "HTML" lang2 = "CSS" lang3="Javascript"></Card>
                </div>
            </section> -->
        </main>
        <NuxtLayout :name="layouts.footer">
        </NuxtLayout>
    </div>
</template>
<script>
import json from '@/assets/data/kelas.json';
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            kelasData: json,
        }
    }
}
</script>