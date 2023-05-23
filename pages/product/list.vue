<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="class">
                <h2 class="font-bold text-4xl my-6">Produk</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
                    <div class="bg-white shadow-lg rounded" v-for="item in produkData" :key="item.id">
                        <NuxtLink :to="'/product/' + item.id" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img :src="item.image" alt="" class="w-full h-[300px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <div class="">
                                        <h3 class="text-2xl flex items-center font-bold">{{ item.nama }}</h3>
                                    </div>
                                    <div class="flex items-center gap-2" v-if="item.diskon != 0">
                                        <p class="text-base line-through">Rp. {{
                                            item.harga
                                        }}</p>
                                        <p>|</p>
                                        <p class="text-sm bg-green-500 px-1 py-[3px] rounded text-white w-fit"
                                            v-if="item.diskon != 0">Diskon: {{ item.diskon }}%</p>
                                    </div>
                                    <p class="text-lg my-2">Rp. {{ discountedPrice(item) }}</p>
                                    <p class="text-sm">Rating {{ item.rating }} | stok {{ item.stok }}</p>
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