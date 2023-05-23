<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4" v-if="produkData" :key="produkData.id">
            <NuxtLink to="/product/list" class="my-8 text-[#6d4dff] block w-fit">
                Kembali ke Produk</NuxtLink>

            <section class="md:my-10 w-full bg-white p-4 lg:p-8">
                <div class="grid gap-8 md:gap-2 lg:gap-10 w-full grid-cols-1 lg:grid-cols-[300px_1fr]"
                    style="place-content:center;">
                    <div class="">
                        <img :src="produkData.image" alt=""
                            class="w-fit block m-auto md:w-fit lg:w-full h-[320px] object-cover" id="img-variant-show">
                    </div>
                    <div class="ml-2 mr-4">
                        <h3 class="font-bold text-3xl">{{ produkData.nama }}</h3>
                        <p class="my-2 text-base my-4">{{ produkData.deskripsi }}</p>
                        <p class="my-2 text-base my-4">Rating : {{ produkData.rating }}</p>
                        <!-- <p class="text-sm flex gap-2"><a href="search.php?brand=<?= $row['brand_name'] ?>" class="text-[#F15A25]"><?= $row['brand_name'] ?></a>|<a href="search.php?category=<?= $row['product_type'] ?>" class="text-[#F15A25]"><?= $row['product_type'] ?></a></p> -->
                        <div class="flex items-center gap-4" v-if="produkData.diskon != 0">
                            <p class="text-xl line-through">Rp. {{
                                produkData.harga
                            }}</p>
                            <p class="text-base">|</p>
                            <p class="text-base bg-green-500 px-1 py-[3px] rounded text-white w-fit">Diskon: {{ produkData.diskon }}%</p>
                        </div>
                        <p class="text-2xl my-8"><span class="text-lg">Rp. </span>{{ discountedPrice.toLocaleString() }}</p>
                        <p class="text-sm mt-2">Stock : {{ produkData.stok }}</p>
                        <p class="text-sm mt-2">Terjual : {{ produkData.terjual }}</p>
                        <!-- <p>Category : </p> -->
                        <!-- <p>Brands : </p> -->
                        <hr class="my-8">
                        <div class="">
                            <form action="#" class="rounded font-bold">
                                <div class="flex items-center justify-between">
                                    <label for="quantity">Quantity</label>
                                </div>
                                <div class="flex items-center justify-start my-4 gap-2">
                                    <p
                                        class="text-xl font-bold text-[#F15A25] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded">
                                        -</p>
                                    <input type="number" min="1" max="<?= $row['stock'] ?>" value=1
                                        class="text-center w-full lg:w-[200px] border-2 border-black/[0.1] rounded p-2">
                                    <p
                                        class="text-xl font-bold text-[#F15A25] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded">
                                        +</p>
                                </div>
                                <!--
                            <div class="flex items-center flex-row">
                             <p class="text-xl">Total : <span class="text-sm">$</span></p
                                <p id="total" class>{{ produkData.harga }}</p>
                                <p>.00</p>
                            </div> -->
                                <div class="flex flex-col items-center justify-center gap-2 mt-8 flex-nowrap sm:flex-row">
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-[#F15A25] py-[13.5px] border-2 border-[#F15A25] w-full p-2 hover:bg-[#F15A25] hover:text-white transition duration-300 ease-in-out"><i
                                            class="fa-regular fa-cart-shopping mx-2"></i> Add to Cart</button>
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-[#F15A25] w-full p-2">Buy
                                        Now</button>
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-red-500 p-2 w-full sm:w-[120px]"><i
                                            class="fa-regular fa-lg fa-heart mx-1"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr class="my-12">
                <section class="rounded w-full">
                    <h4 class="font-bold text-2xl mb-4">Komentar</h4>
                    <ol class="flex flex-col w-full list-decimal gap-4">
                        <li class="w-full p-2 rounded block" v-for="(komentar, key) in produkData.komentar" :key="key">
                            <div class="">
                                <div class="flex items-center gap-2">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                                        class="w-[50px]" alt="">
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
            </section>
            <section id="class">
                <h2 class="font-bold text-4xl my-12">Produk lain</h2>
                <div class="overflow-x-auto max-w-full gap-4 gap-y-8">
                    <div class="w-[max-content] flex gap-4 py-8">
                        <div class="bg-white shadow-lg rounded w-[300px] block" v-for="item in produk_list" :key="item.id">
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
                                        <p class="text-lg my-2">Rp. {{ discountedPrices(item) }}</p>
                                    </div>
                                </div>
                                <div class="">
                                </div>
                            </NuxtLink>
                        </div>
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
            produk_list: json,
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
    methods: {
        discountedPrices(item) {
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