<template>
    <div class="bg-[#e2e9f4] w-full">
        <NuxtLayout :name="layouts.header">
            <nav class="font-bold flex items-center justify-between w-10/12">
                <div class="">
                    <h2>
                        <NuxtLink to="/">Coster</NuxtLink>
                    </h2>
                </div>
                <ul class="flex items-center justify-evenly gap-8">
                    <li>
                        <NuxtLink to="/">Beranda</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">Tentang Kami</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/class/index">Kelas</NuxtLink>
                    </li>
                    <li><a href="https://codepen.io/Raka_ramadhan" target="_blank"><i class="fa-brands fa-codepen"></i>
                            Codepen</a></li>
                </ul>
            </nav>
        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="class">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-gap-8">
                    <div class="bg-white shadow-lg rounded">
                        <NuxtLink to="/class/html-html.jpg" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img src="/images/html.jpg" alt="" class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <h3 class="font-bold text-2xl flex items-center">HTML</h3>
                                    <p class="my-2 text-sm">
                                        HTML (HyperText Markup Language): Mari kita mulai dengan HTML, bahasa yang menjadi
                                        "tulang punggung" dari halaman web yang Anda lihat. HTML memungkinkan kita untuk
                                        membuat
                                        dan mengorganisir konten yang menarik, seperti teks, gambar, tautan, dan banyak
                                        lagi.
                                        Dengan menggunakan HTML, kita dapat membentuk struktur halaman web dengan mudah.
                                    </p>
                                </div>
                            </div>
                            <p
                                class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                Mulai
                                Kelas</p>
                        </NuxtLink>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <NuxtLink to="/class/css-css.jpeg" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img src="/images/css.jpeg" alt="" class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <h3 class="font-bold text-2xl flex items-center">CSS</h3>
                                    <p class="my-2 text-sm">CSS (Cascading Style Sheets): Sekarang, mari kita beri sentuhan
                                        indah pada halaman web kita dengan CSS. Dengan CSS, kita bisa membuat tampilan dan
                                        gaya
                                        yang memukau. Bagaimana rasanya bisa mengubah warna, ukuran, dan tata letak
                                        elemen-elemen halaman hanya dengan beberapa baris kode? Dengan CSS, kita dapat
                                        menciptakan halaman web yang terlihat profesional, elegan, dan sepenuhnya sesuai
                                        dengan
                                        kreativitas kita.</p>
                                </div>
                            </div>
                            <p
                                class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                Mulai
                                Kelas</p>
                        </NuxtLink>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <NuxtLink to="/class/javascript-javascript.jpg" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img src="/images/javascript.jpg" alt=""
                                        class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <h3 class="font-bold text-2xl flex items-center">Javascript</h3>
                                    <p class="my-2 text-sm">JavaScript: Dengan JavaScript, kita bisa membuat halaman web
                                        menjadi
                                        hidup dan berinteraksi dengan pengguna. Kita dapat membuat animasi yang memukau,
                                        tombol-tombol yang bergerak, dan formulir yang responsif.</p>
                                </div>
                            </div>
                            <p
                                class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                Mulai
                                Kelas</p>
                        </NuxtLink>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <NuxtLink to="/class/php-php.jpg" class="flex flex-col justify-between h-full">
                            <div class="">
                                <div class="">
                                    <img src="/images/php.jpg" alt="" class="w-full h-[250px] object-cover object-top">
                                </div>
                                <div class="p-4">
                                    <h3 class="font-bold text-2xl flex items-center">Php</h3>
                                    <p class="my-2 text-sm">PHP (Hypertext Preprocessor): PHP membantu kita mengolah data di
                                        sisi server dan menciptakan aplikasi web yang dinamis. Dengan PHP, kita dapat
                                        berinteraksi dengan database, mengirim formulir, mengelola pengguna, dan melakukan
                                        banyak tugas lainnya yang membuat situs web kita menjadi lebih fungsional dan
                                        efisien.
                                    </p>
                                </div>
                            </div>
                            <p
                                class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                Mulai
                                Kelas</p>
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </main>
        <NuxtLayout :name="layouts.footer">
            <p><a href="https://bit.ly/raka-rmdn-portfolio" target="_blank">All right reserved @Raka_Ramadhan</a></p>
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