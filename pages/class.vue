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
                        <NuxtLink to="/class">Tutorial</NuxtLink>
                    </li>
                    <li><a href="#"><i class="fa-brands fa-codepen"></i> Codepen</a></li>
                </ul>
            </nav>
        </NuxtLayout>
        <main class="w-10/12 mx-auto my-4">
            <section id="tutorial">
                <div class="grid grid-cols-3 gap-4 col-gap-8">
                    <div class="bg-white shadow-lg rounded">
                        <NuxtLink to="/tutorial/html">
                            <div class="">
                                <img src="/images/html.jpg" alt="" class="w-full h-[250px] object-cover object-top">
                            </div>
                            <div class="p-4">
                                <h3 class="font-bold text-2xl flex items-center">HTML</h3>
                                <p class="my-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Perferendis earum rem dolorem cumque provident. Illo quas voluptatum, quidem adipisci
                                    voluptas minima, laudantium doloribus saepe corporis exercitationem minus ut modi nisi.
                                </p>
                            </div>
                            <p
                                class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">
                                Mulai
                                Kelas</p>
                        </NuxtLink>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <div class="">
                            <img src="/images/css.jpeg" alt="" class="w-full h-[250px] object-cover object-top">
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-2xl flex items-center">CSS</h3>
                            <p class="my-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
                                earum rem dolorem cumque provident. Illo quas voluptatum, quidem adipisci voluptas minima,
                                laudantium doloribus saepe corporis exercitationem minus ut modi nisi.</p>
                        </div>
                        <a
                            class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">Mulai
                            Kelas</a>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <div class="">
                            <img src="/images/javascript.jpg" alt="" class="w-full h-[250px] object-cover object-top">
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-2xl flex items-center">Javascript</h3>
                            <p class="my-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
                                earum rem dolorem cumque provident. Illo quas voluptatum, quidem adipisci voluptas minima,
                                laudantium doloribus saepe corporis exercitationem minus ut modi nisi.</p>
                        </div>
                        <a
                            class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">Mulai
                            Kelas</a>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <div class="">
                            <img src="/images/php.jpg" alt="" class="w-full h-[250px] object-cover object-top">
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-2xl flex items-center">Php</h3>
                            <p class="my-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
                                earum rem dolorem cumque provident. Illo quas voluptatum, quidem adipisci voluptas minima,
                                laudantium doloribus saepe corporis exercitationem minus ut modi nisi.</p>
                        </div>
                        <a
                            class="bg-[#6d4dff] w-auto block p-2 rounded text-white text-center m-4 hover:bg-[#542eff] transition duration-500 ease-in-out">Mulai
                            Kelas</a>
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