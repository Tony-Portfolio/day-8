<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">
            
        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="about" class="w-full h-fit">
                <div class="lg:h-[400px] h-auto p-8 rounded"
                    style="background-image: linear-gradient(to right, #6d4dff, transparent), url('https://imageio.forbes.com/specials-images/imageserve/60e05ab2396be666929735e5/0x0.jpg?format=jpg&width=1200');
                    background-repeat: no-repeat;
                    background-size: cover;">
                    <h3 class="text-4xl font-bold text-white">Coster : Code Master</h3>
                    <p class="mt-8 w-8/12 text-white sm:text-base text-sm ">Kami adalah sebuah perusahaan yang berfokus pada menyediakan
                        tutorial ngoding secara
                        online. Dengan pengalaman dan pengetahuan yang luas dalam bidang pengembangan web, kami bertujuan
                        untuk membantu para pemula maupun yang sudah berpengalaman dalam mempelajari dan menguasai
                        keterampilan pemrograman.
                        <br><br>
                        Tim kami terdiri dari para profesional di bidang pengembangan web yang ahli dalam bahasa pemrograman
                        seperti HTML, CSS, JavaScript, dan PHP. Kami menyediakan tutorial yang terstruktur dan mudah
                        diikuti, dengan penjelasan yang jelas dan contoh kode yang relevan.
                    </p>
                    <NuxtLink to="/class/list" class="bg-white p-2 rounded px-4 block w-fit text-[#6d4dff] my-4">Telusuri Kelas
                    </NuxtLink>
                </div>
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
                            <NuxtLink href="/class/1"
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
                            <NuxtLink href="/class/2"
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
                            <NuxtLink href="/class/3"
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
                            <NuxtLink href="/class/4"
                                class="bg-[#6d4dff] text-white p-2 rounded px-4 block w-fit">Mulai Kelas</NuxtLink>
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