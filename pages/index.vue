<template>
    <div class="bg-black text-white">
        <NuxtLayout :name="layouts.header">
            <nav class="flex p-4 items-center justify-between w-10/12 block m-auto">
                <h3 class="font-bold">
                    <NuxtLink to="/">Raka</NuxtLink>
                </h3>
                <p><a href="#https://codepen.io/Raka_ramadhan/pen/gOGRRaw" target="_blank"><i
                            class="fa-brands fa-codepen"></i> Codepen</a></p>
            </nav>
        </NuxtLayout>
        <main class="w-10/12 m-auto block p-4">
            <div class="hero flex my-12 gap-2 lg:flex-row flex-col">
                <div class="">
                    <h2 class="text-4xl font-bold">Membuat website dengan mudah</h2>
                    <p class="text-white/[0.9] text-sm my-4">Dalam tutorial ini, kamu akan diajarkan cara membuat website
                        dengan mudah dan cepat tanpa harus memiliki pengalaman atau pengetahuan coding yang mendalam. Kamu
                        akan belajar bagaimana membuat tampilan website yang menarik dan memikat serta membuat website
                        interaktif untuk para penggunanya.
                    </p>
                    <a href="#mulai" class="bg-sky-500 p-2 rounded block w-fit my-4 px-4 text-sm">Pelajari Lebih Lanjut</a>
                </div>
                <img src="https://img1.wsimg.com/cdn/Image/All/All/1/en-US/dd0b8505-0e30-427f-8984-3a1bdf50fa06/gd-websitebuilder-marquee-mobile2x.jpg"
                    alt="" class="rounded 2xl:w-full lg:w-[500px]">
            </div>
            <div class="" id="mulai">
                <h3 class="font-bold text-2xl text-center my-8">Pembelajaran</h3>
                <div class="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="flex gap-2 w-full">
                        <div
                            class="bg-white/[0.1] rounded flex items-center justify-center flex-col p-2 text-center hover:shadow-lg hover:shadow-white/[0.2] shadow-white transition duration-300 ease-in-out w-full">
                            <i class="font-bold text-4xl my-8 fa-solid fa-code"></i>
                            <h4 class="font-bold text-xl my-2">Struktur</h4>
                        </div>
                        <div
                            class="bg-white/[0.1] rounded flex items-center justify-center flex-col p-2 text-center hover:shadow-lg hover:shadow-white/[0.2] shadow-white transition duration-300 ease-in-out w-full">
                            <i class="font-bold text-4xl my-8 fa-solid fa-palette"></i>
                            <h4 class="font-bold text-xl my-2">Design</h4>
                        </div>
                        <div
                            class="bg-white/[0.1] rounded flex items-center justify-center flex-col p-2 text-center hover:shadow-lg hover:shadow-white/[0.2] shadow-white transition duration-300 ease-in-out w-full">
                            <i class="font-bold text-4xl my-8 fa-solid fa-code"></i>
                            <h4 class="font-bold text-xl my-2">Fungsi</h4>
                        </div>
                    </div>
                    <div class="">
                        <p class="text-sm leading-relaxed lg:mt-0 mt-4">Kita akan belajar bagaimana membuat sebuah struktur
                            website yang baik dan benar, sehingga website kita mudah dipahami oleh pengguna. <br><br>Selain
                            itu, kita juga akan mempelajari bagaimana membuat tampilan website yang menarik dan profesional
                            menggunakan teknologi-teknologi terkini, sehingga website kita akan terlihat lebih modern dan
                            elegan. <br><br>Selain itu, kita juga akan belajar cara membuat website menjadi interaktif dan
                            responsif agar pengguna merasa lebih nyaman dan mudah dalam mengaksesnya.</p>
                    </div>
                </div>
            </div>
            <div class="">
                <h3 class="font-bold text-2xl my-8">Tutorial</h3>
                <div class = "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                    <Card title="Web Portfolio Sederhana" image="tutorial-1.png" link="tutorial" date = "12 Januari 2002"></Card>
                    <Card title="Reponsive Design" image="tutorial-2.png" link = "#" date = "20 Januari 2002"></Card>
                    <Card title="Designing A Website" image="tutorial-3.jpg" link = "#" date = "14 Februari 2002"></Card>
                    <Card title="Interactive With Js" image="tutorial-4.jpg" link = "#" date = "28 Februari 2002"></Card>
                </div>
            </div>
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