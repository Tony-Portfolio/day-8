<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4" v-if="produkData" :key="produkData.id">
            <NuxtLink to="/product/list" class="my-8 text-[#6d4dff] block w-fit">
                Kembali ke Produk</NuxtLink>
            <section>
                <div class="flex items-start justify-start gap-4 flex-col md:flex-row">
                    <div class="md:w-[800px] md:h-auto h-[400px] md:sticky md:top-[80px] md:left-0 w-full">
                        <img :src="'' + produkData.image" alt="" class="w-full h-full object-cover object-top">
                    </div>
                    <div class="w-full flex flex-col gap-6">
                        <h3 class="font-bold text-4xl uppercase">{{ produkData.nama }}</h3>
                        <section class="rounded w-full">
                            <p class="font-bold text-xl line-through" v-if="produkData.diskon != 0">Rp. {{ produkData.harga
                            }}</p>
                            <p class="text-base mt-2" v-if="produkData.diskon === 0">No discount</p>
                            <p class="font-bold text-base mt-2" v-else>Diskon: {{ produkData.diskon }}%</p>
                            <p class="font-bold text-4xl mb-4">Rp. {{ discountedPrice }}</p>
                            <p>{{ produkData.deskripsi }}.
                            </p>
                            <p class="text-base my-2">Stok : {{ produkData.stok }}</p>
                            <p class="text-base my-2">Terjual : {{ produkData.terjual }}</p>
                            <div class="flex gap-2 w-full my-2">
                                <img src="/icon/bintang.png" alt="" class="w-[15px] h-[15px] my-auto">
                                <p class="">{{ produkData.rating }}</p>
                            </div>
                        </section>
                        <section class="bg-white p-4 rounded w-full">
                            <h4 class="font-bold text-xl mb-4">Komentar</h4>
                            <ol class="flex flex-col w-full list-decimal gap-4">
                                <li class="w-full p-2 rounded block" v-for="(komentar, key) in produkData.komentar"
                                    :key="key">
                                    <div class="">
                                        <div class="flex items-center gap-2">
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                                                class="w-[40px]" alt="">
                                            <div class="">
                                                <h4 class="font-bold text-xl">{{ komentar.nama }}</h4>
                                                <p class="text-sm">{{ komentar.tanggal }}</p>
                                            </div>
                                        </div>
                                        <p class="p-2">{{ komentar.komentar }}</p>
                                    </div>
                                </li>
                            </ol>
                        </section>
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
            produk: json,
        }
    },
    computed: {
        produkData() {
            const itemId = this.$route.params.id; // Retrieve the ID from the URL
            return this.produk.find(item => item.id.toString() === itemId); // Find the matching item based on the ID
        },
        discountedPrice() {
            if (this.produkData.diskon === 0) {
                return this.produkData.harga;
            } else {
                const diskonAmount = (this.produkData.diskon / 100) * this.produkData.harga;
                return this.produkData.harga - diskonAmount;
            }
        },
    },
}
</script>