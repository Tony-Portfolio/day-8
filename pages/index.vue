<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">
            
        </NuxtLayout>
        <main class="w-10/12 mx-auto my-8">
            <section id="hero" class="flex justify-between gap-8 flex-col lg:flex-row">
                <div class="">
                    <h3 class="text-4xl font-bold">Berkarya dengan Kode, Menginspirasi Ide dan Solusi Inovatif</h3>
                    <p class="text-base leading-relaxed my-4">Gali potensi kreativitasmu dengan koding, temukan inspirasi
                        untuk ide-ide baru, dan temukan solusi inovatif melalui tutorial koding yang menyenangkan.</p>
                    <div class="flex items-center gap-2">
                        <NuxtLink href="#class" class="bg-[#4e29f5] text-white p-2 rounded px-4 block w-fit">Mulai Belajar
                        </NuxtLink>
                        <NuxtLink href="/class/list"
                            class="border-2 border-[#4e29f5] text-black p-2 rounded px-4 block w-fit">Telusuri Kelas
                        </NuxtLink>
                    </div>
                </div>
                <img src="https://img1.wsimg.com/cdn/Image/All/All/1/en-US/dd0b8505-0e30-427f-8984-3a1bdf50fa06/gd-websitebuilder-marquee-mobile2x.jpg"
                    alt="" class="rounded 2xl:w-full lg:w-[500px]">
            </section>
            <section id="class" class="">
                <h3 class="font-bold text-2xl py-8">Pembelajaran</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div
                        class="bg-white p-4 shadow-lg rounded hover:bg-[#542eff] hover:text-white transition duration-500 ease-in-out flex flex-col h-full hover:shadow-2xl transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.8)]">
                        <div class="flex gap-4">
                            <div class="w-[80px] h-[80px] rounded bg-white flex items-center justify-center p-2">
                                <img src="/icon/html.png" alt="">
                            </div>
                            <div class="">
                                <h4 class="font-bold text-4xl">HTML</h4>
                                <p class="my-2">Dasar</p>
                            </div>
                        </div>
                        <div class="mt-4 flex-grow">
                            <p class="my-4 text-sm">HTML (Hypertext Markup Language) adalah bahasa markup standar yang
                                digunakan
                                untuk membuat struktur dan konten halaman web.</p>
                        </div>
                        <div class="flex justify-start">
                            <NuxtLink href="/class/html-html.jpg"
                                class="bg-[#6d4dff] text-white p-2 rounded px-4 block w-fit">Mulai Kelas</NuxtLink>
                        </div>
                    </div>
                    <div
                        class="bg-white p-4 shadow-lg rounded hover:bg-[#542eff] hover:text-white transition duration-500 ease-in-out flex flex-col h-full hover:shadow-2xl transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.8)]">
                        <div class="flex gap-4">
                            <div class="xl w-[80px] h-[80px] rounded bg-white flex items-center justify-center p-2">
                                <img src="/icon/css.png" alt="">
                            </div>
                            <div class="">
                                <h4 class="font-bold text-4xl">CSS</h4>
                                <p class="my-2">Dasar</p>
                            </div>
                        </div>
                        <div class="mt-4 flex-grow">
                            <p class="my-4 text-sm">CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan
                                untuk
                                mengatur tampilan dan tata letak elemen-elemen dalam halaman web.</p>
                        </div>
                        <div class="flex justify-start">
                            <NuxtLink href="/class/css-css.jpeg"
                                class="bg-[#6d4dff] text-white p-2 rounded px-4 block w-fit">Mulai Kelas</NuxtLink>
                        </div>
                    </div>
                    <div
                        class="bg-white p-4 shadow-lg rounded hover:bg-[#542eff] hover:text-white transition duration-500 ease-in-out flex flex-col h-full hover:shadow-2xl transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.8)]">
                        <div class="flex gap-4">
                            <div class="6xl w-[80px] h-[80px] rounded bg-white flex items-center justify-center p-2">
                                <img src="/icon/javascript.png" alt="">
                            </div>
                            <div class="">
                                <h4 class="font-bold text-4xl">Javascript</h4>
                                <p class="my-2">Dasar</p>
                            </div>
                        </div>
                        <div class="mt-4 flex-grow">
                            <p class="my-4 text-sm">JavaScript (JS) adalah bahasa pemrograman yang digunakan untuk membuat
                                halaman
                                web interaktif dan dinamis.</p>
                        </div>
                        <div class="flex justify-start">
                            <NuxtLink href="/class/javascript-javascript.jpg"
                                class="bg-[#6d4dff] text-white p-2 rounded px-4 block w-fit">Mulai Kelas</NuxtLink>
                        </div>
                    </div>
                    <div
                        class="bg-white p-4 shadow-lg rounded hover:bg-[#542eff] hover:text-white transition duration-500 ease-in-out flex flex-col h-full hover:shadow-2xl transition duration-500 ease-in-out hover:shadow-[rgba(109,77,255,0.8)]">
                        <div class="flex gap-4">
                            <div class="6xl w-[80px] h-[80px] rounded bg-white flex items-center justify-center p-2">
                                <img src="/icon/php.png" alt="">
                            </div>
                            <div class="">
                                <h4 class="font-bold text-4xl">Php</h4>
                                <p class="my-2">Dasar</p>
                            </div>
                        </div>
                        <div class="mt-4 flex-grow">
                            <p class="my-4 text-sm">PHP adalah bahasa pemrograman server-side yang dirancang khusus untuk
                                pengembangan web.</p>
                        </div>
                        <div class="flex justify-start">
                            <NuxtLink href="/class/php-php.jpg"
                                class="bg-[#6d4dff] text-white p-2 rounded px-4 block w-fit">Mulai Kelas</NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
            <section id="class" class="">
                <h3 class="font-bold text-2xl py-8">Tutorial</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card title="Web Portfolio Sederhana" image="tutorial-1.png" link="/tutorial/tutorial-1" date="12 Januari 2002" lang1 = "HTML" lang2 = "CSS">
                    </Card>
                    <Card title="Reponsive Desain" image="tutorial-2.png" link="#" date="20 Januari 2002" lang1 = "HTML" lang2 = "CSS"></Card>
                    <Card title="Mendesain sebuah website" image="tutorial-3.jpg" link="#" date="14 Februari 2002" lang1 = "HTML" lang2 = "CSS"></Card>
                    <Card title="Website interaktif" image="tutorial-4.jpg" link="#" date="28 Februari 2002" lang1 = "HTML" lang2 = "CSS" lang3="Javascript"></Card>
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