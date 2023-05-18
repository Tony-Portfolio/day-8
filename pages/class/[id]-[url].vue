<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">
            
        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <NuxtLink to="/class/list" class="my-8 text-[#6d4dff] block w-fit">
                Kembali ke tutorial</NuxtLink>
            <section>
                <div class="flex items-start justify-start gap-4 flex-col md:flex-row">
                    <div class="md:w-[400px] md:sticky md:top-[80px] md:left-0 w-full">
                        <img :src="'/images/' + $route.params.url" alt="" class="">
                        <section class=" bg-white p-4 rounded w-full shadow-md my-2">
                            <h4 class="font-bold text-xl mb-4">Perkiraan Pengerjaan</h4>
                            <p>2 Jam</p>
                        </section>
                        <a href="#"
                            class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center my-2 hover:bg-[#542eff] transition duration-500 ease-in-out">
                            Mulai
                            Kelas</a>
                    </div>
                    <div class="w-full flex flex-col gap-6">
                        <h3 class="font-bold text-4xl uppercase">{{ $route.params.id }}</h3>
                        <section class=" bg-white p-4 rounded w-full shadow-md">
                            <h4 class="font-bold text-xl mb-4">Tentang Kelas</h4>
                            <p>Di Kelas / Tutorial ini kita akan belajar bagaimana cara menggunakan {{ $route.params.id
                            }}... {{ $route.params.url }}.
                            </p>
                        </section>
                        <section class="bg-white p-4 rounded w-full shadow-md">
                            <h4 class="font-bold text-xl mb-4">Materi</h4>
                            <ul class="flex flex-col gap-2 w-full">
                                <li class="bg-black/[0.1] w-full p-2 rounded block">1. <span class="uppercase"> {{
                                    $route.params.id }} </span> Struktur</li>
                                <li class="bg-black/[0.1] w-full p-2 rounded block">2. <span class="uppercase"> {{
                                    $route.params.id }} </span> Tag</li>
                                <li class="bg-black/[0.1] w-full p-2 rounded block">3. <span class="uppercase"> {{
                                    $route.params.id }} </span> Tipe Data</li>
                                <li class="bg-black/[0.1] w-full p-2 rounded block">4. <span class="uppercase"> {{
                                    $route.params.id }} </span> Operasi</li>
                            </ul>
                        </section>
                        <section class="bg-white p-4 rounded w-full shadow-md">
                            <h4 class="font-bold text-xl mb-4">Persiapan Alat</h4>
                            <ul class="flex flex-col gap-2 w-full">
                                <li class="w-full rounded block">1. Gunakan komputer atau laptop dengan koneksi internet
                                    yang stabil.</li>
                                <li class="w-full rounded block">2. Install browser (disarankan menggunakan Chrome).</li>
                                <li class="w-full rounded block">3. Jika kamu belum pernah mempelajari programming
                                    sebelumnya, tidak masalah.</li>
                            </ul>
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
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            }
        }
    }
}
</script>