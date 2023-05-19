<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="class">
                <h2 class="font-bold text-4xl my-6">Produk</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
                    <div class="bg-white shadow-lg rounded" v-for="item in produkData" :key="item.id">
                        <NuxtLink :to="'/product/' + item.id" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img :src="item.image" alt="" class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <div class="">
                                        <h3 class="text-xl flex items-center">{{ item.nama }}</h3>
                                    </div>
                                    <p class="font-bold text-xl line-through" v-if="item.diskon != 0">Rp. {{
                                        item.harga
                                    }}</p>
                                    <p class="text-base mt-2" v-if="item.diskon === 0"></p>
                                    <p class="font-bold text-base mt-2" v-else>Diskon: {{ item.diskon }}%</p>
                                    <p class="font-bold text-2xl">Rp. {{ discountedPrice(item) }}</p>
                                    <div class="flex gap-2 w-full">
                                        <img src="/icon/bintang.png" alt="" class="w-[15px] h-[15px] my-auto">
                                        <p class="">{{ item.rating }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </main>
        <NuxtLayout :name="layouts.footer">
        </NuxtLayout>
    </div>
</template>
<script>
import json from '@/assets/data/produk.json';
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            produkData: json,
        }
    },
    computed: {

    },
    methods: {
        discountedPrice(item) {
            if (item.diskon === 0) {
                return item.harga;
            } else {
                const diskonAmount = (item.diskon / 100) * item.harga;
                return item.harga - diskonAmount;
            }
        },
    }
}
</script>