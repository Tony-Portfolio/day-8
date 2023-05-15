<template>
    <div class = "bg-black text-white">
    <NuxtLayout :name="layouts.header">
            <nav class="flex p-4 items-center justify-between w-10/12 block m-auto">
                <h3 class="font-bold"><NuxtLink to="/">Raka</NuxtLink></h3>
                <p><a href="#https://codepen.io/Raka_ramadhan/pen/gOGRRaw" target="_blank"><i class="fa-brands fa-codepen"></i> Codepen</a></p>
            </nav>
        </NuxtLayout>
    <main class="w-10/12 m-auto block p-4">
        <div class="flex items-center justify-center gap-8 w-full mb-24">
            <div class="text-center flex items-center justify-center flex-col">
                <h3 class="text-4xl leading-relaxed">Cara Membuat Web Portfolio Simpel</h3>
                <p class="text-white/[0.8]">Pada tutorial kali ini, kita akan mempelajari bagaimana cara membuat sebuah
                    landing page dengan
                    desain unik dan keren.</p>
                <div class="flex gap-2">
                    <a href="#1" class="block w-fit bg-sky-500 p-2 rounded my-2 px-4">Mulai Membuat</a>
                    <NuxtLink to="/" class="block w-fit bg-sky-500 p-2 rounded my-2 px-4">Kembali ke halaman utama</NuxtLink>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">1.</h3>
            <p class="" id="1">Buatlah File Html dengan nama index.html,
                kemudian ketik html:5 dan tekan enter, dan tampilan pada visual studio akan seperti ini</p>
        </div>
        <div class="flex">
            <pre class="w-full">
                <code class = "">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    
&lt;/body&gt;
&lt;/html&gt;
            </code>
        </pre>
        </div>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">2</h3>
            <p class="">Tambahkan Tag <strong>'&lt;div&gt;'</strong> dengan id 'portfolio-container' dalam body dan
                tambahkan tag <strong>&lt;img&gt;</strong> didalam div tersebut set attribute <strong>src</strong>
                sesuai
                dengan foto profil. Kemudian dibawah tag <strong>img</strong> Tambahkan Keterangan Nama, Informasi Diri,
                dan penjelasan yang menarik</p>
        </div>
        <div class="flex">
            <pre class="w-full">
                <code class = "">&lt;!DOCTYPE html&gt;
&lt;html&gt;
                    
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Portfolio&lt;/title&gt;
                        
&lt;/head&gt;
                    
&lt;body&gt;
    &lt;div id="portfolio-container"&gt;
        &lt;img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&amp;dl=pexels-simon-robben-614810.jpg&amp;fm=jpg" alt="My Photo"&gt;
        &lt;div class=""&gt;
            &lt;h2&gt;Raka Okto Ramadhan&lt;/h2&gt;
            &lt;p&gt;Jakarta, 20 Oktober 2004 | Single | 175 cm | 75 Kg&lt;/p&gt;
            &lt;p&gt;Saya seorang pengembang web dengan pengalaman dalam HTML, CSS, JavaScript, dan Vue.js. Saya suka membuat situs web yang indah dan fungsional yang memecahkan masalah dan meningkatkan pengalaman pengguna.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
                    
&lt;/html&gt;
            </code>
        </pre>
        </div>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">3</h3>
            <p class="">Tambahkan <strong>'&lt;section&gt;'</strong> skill dibawah <strong>'&lt;div id =
                    'portfolio-container'&gt;'</strong>, kemudian beri judul <strong>"Skills"</strong> menggunakan tag
                '&lt;h3&gt;' tambahkan tag <strong>'&lt;ul&gt;'</strong> dalam section
                tersebut dan tambahkan elemen <strong>'&lt;li&gt;'</strong> pada ul dan isi tag ul dengan skills seperti
                html,css,dan javascript</p>
        </div>
        <div class="flex">
            <pre class="w-full">
                <code class = "">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Portfolio&lt;/title&gt;
                        
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="portfolio-container"&gt;
        &lt;img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&amp;dl=pexels-simon-robben-614810.jpg&amp;fm=jpg" alt="My Photo"&gt;
        &lt;div class=""&gt;
            &lt;h2&gt;Raka Okto Ramadhan&lt;/h2&gt;
            &lt;p&gt;Jakarta, 20 Oktober 2004 | Single | 175 cm | 75 Kg&lt;/p&gt;
            &lt;p&gt;Saya seorang pengembang web dengan pengalaman dalam HTML, CSS, JavaScript, dan Vue.js. Saya suka membuat situs web yang indah dan fungsional yang memecahkan masalah dan meningkatkan pengalaman pengguna.&lt;/p&gt;
        &lt;/div&gt;
        &lt;section&gt;
            &lt;h2&gt;Skills&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Javascript&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
            </code>
        </pre>
        </div>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">4</h3>
            <p class="">Tambahkan <strong>'&lt;section&gt;'</strong> baru. tambahkan tag <strong>'&lt;h3&gt;'</strong>
                Dengan Judul "Proyek". Tambahkan <strong>'&lt;Ul&gt;'</strong> dibawah judul, dan tambahkan tag
                <strong>'&lt;li&gt;'</strong> dan isi tag <strong>'&lt;li&gt;'</strong> dengan "Judul Proyek",
                "Deskripsi Proyek", dan kapan proyek tersebut dibuat.
            </p>
        </div>
        <div class="flex">
            <pre class="w-full">
                <code class = "">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Portfolio&lt;/title&gt;
    
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="portfolio-container"&gt;
        &lt;div class="about"&gt;
            &lt;img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&amp;dl=pexels-simon-robben-614810.jpg&amp;fm=jpg" alt="My Photo"&gt;
            &lt;div class=""&gt;
                &lt;h2&gt;Raka Okto Ramadhan&lt;/h2&gt;
                &lt;p&gt;Jakarta, 20 Oktober 2004 | Single | 175 cm | 75 Kg&lt;/p&gt;
                &lt;p&gt;Saya seorang pengembang web dengan pengalaman dalam HTML, CSS, JavaScript, dan Vue.js. Saya suka membuat situs web yang indah dan fungsional yang memecahkan masalah dan meningkatkan pengalaman pengguna.&lt;/p&gt;
            &lt;/div&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Javascript&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;section&gt;
            &lt;h2&gt;Skills&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Javascript&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;
        &lt;section class="projects"&gt;
            &lt;h2&gt;Projects&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;h3&gt;Website&lt;/h3&gt;
                    &lt;p&gt;pembuatan website keren&lt;/p&gt;
                    &lt;a&gt;25 Januari 2020&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
            </code>
        </pre>
        </div>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">5</h3>
            <p class="">Tambahkan tag <strong>'&lt;style&gt;'</strong> dalam tag <strong>'&lt;head&gt;'</strong> dan
                tambahkan style sesuai keinginan atau tambahkan style dibawah ini
            </p>
        </div>
        <pre class="w-full">
            <code class = "">&lt;style&gt;
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                }
        
                #portfolio-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
        
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #333;
                }
        
                h2 {
                    font-size: 1.5rem;
                    margin-top: 2rem;
                    color: #333;
                }
        
                p {
                    font-size: 1.2rem;
                    line-height: 1.5;
                    color: #666;
                }
        
                ul {
                    margin-top: 1rem;
                    padding-left: 1rem;
                }
        
                li {
                    margin-bottom: 0.5rem;
                }
        
                a {
                    color: #333;
                    text-decoration: none;
                }
        
                img {
                    display: block;
                    margin-top: 2rem;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    object-fit: cover;
                }
        
                .about {
                    display: flex;
                }
        
                .about div {
                    padding: 20px;
                }
&lt;/style&gt;
        </code>
    </pre>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">6</h3>
            <p class="">Maka hasil akhir dari kodingan kita adalah sebagai berikut
            </p>
        </div>
        <pre class="w-full">
            <code class = "">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
                
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;My Portfolio&lt;/title&gt;
&lt;style&gt;
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
            }
                
            #portfolio-container {
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                background-color: #fff;
                border: 1px solid #ddd;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
                
            h1 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: #333;
            }
                
            h2 {
                font-size: 1.5rem;
                margin-top: 2rem;
                color: #333;
            }
                
            p {
                font-size: 1.2rem;
                line-height: 1.5;
                color: #666;
            }
                
            ul {
                margin-top: 1rem;
                padding-left: 1rem;
            }
                
            li {
                margin-bottom: 0.5rem;
            }
                
            a {
                color: #333;
                text-decoration: none;
            }
                
            img {
                display: block;
                margin-top: 2rem;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                object-fit: cover;
            }
                
            .about {
                display: flex;
            }
                
            .about div {
                padding: 20px;
            }
    &lt;/style&gt;
&lt;/head&gt;
                
&lt;body&gt;
    &lt;div id="portfolio-container"&gt;
        &lt;div class="about"&gt;
            &lt;img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&amp;dl=pexels-simon-robben-614810.jpg&amp;fm=jpg"
                alt="My Photo"&gt;
            &lt;div class=""&gt;
                &lt;h2&gt;Raka Okto Ramadhan&lt;/h2&gt;
                &lt;p&gt;Jakarta, 20 Oktober 2004 | Single | 175 cm | 75 Kg&lt;/p&gt;
                &lt;p&gt;Saya seorang pengembang web dengan pengalaman dalam HTML, CSS, JavaScript, dan Vue.js. Saya suka membuat situs web yang indah dan fungsional yang memecahkan masalah dan meningkatkan pengalaman pengguna.&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;section&gt;
            &lt;h2&gt;Skills&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Javascript&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;
        &lt;section class="projects"&gt;
            &lt;h2&gt;Projects&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;h3&gt;Website&lt;/h3&gt;
                    &lt;p&gt;pembuatan website keren&lt;/p&gt;
                    &lt;a&gt;25 Januari 2020&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/body&gt;
                
&lt;/html&gt;
        </code>
    </pre>
        <div class="flex items-center justify-start gap-2">
            <h3 class="titles bg-white text-black text-xl p-2 py-1 w-fit rounded">7</h3>
            <p class="">Setelah tag <strong>&lt;/style&gt;</strong> ditambahkan pada <strong>&lt;head&gt;</strong> maka
                tampilan website akan menjadi seperti berikut.
            </p>
        </div>
        <iframe class="w-full h-[1000px] mt-8" srcdoc='
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;title&gt;My Portfolio&lt;/title&gt;
            &lt;style&gt;
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                }
        
                #portfolio-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
        
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #333;
                }
        
                h2 {
                    font-size: 1.5rem;
                    margin-top: 2rem;
                    color: #333;
                }
        
                p {
                    font-size: 1.2rem;
                    line-height: 1.5;
                    color: #666;
                }
        
                ul {
                    margin-top: 1rem;
                    padding-left: 1rem;
                }
        
                li {
                    margin-bottom: 0.5rem;
                }
        
                a {
                    color: #333;
                    text-decoration: none;
                }
        
                img {
                    display: block;
                    margin-top: 2rem;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    object-fit: cover;
                }
        
                .about {
                    display: flex;
                }
        
                .about div {
                    padding: 20px;
                }
            &lt;/style&gt;
        &lt;/head&gt;
        
        &lt;body&gt;
            &lt;div id="portfolio-container"&gt;
                &lt;div class="about"&gt;
                    &lt;img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&amp;dl=pexels-simon-robben-614810.jpg&amp;fm=jpg"
                        alt="My Photo"&gt;
                    &lt;div class=""&gt;
                        &lt;h2&gt;Raka Okto Ramadhan&lt;/h2&gt;
                        &lt;p&gt;Jakarta, 20 Oktober 2004 | Single | 175 cm | 75 Kg&lt;/p&gt;
                &lt;p&gt;Saya seorang pengembang web dengan pengalaman dalam HTML, CSS, JavaScript, dan Vue.js. Saya suka membuat situs web yang indah dan fungsional yang memecahkan masalah dan meningkatkan pengalaman pengguna.&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;section&gt;
                    &lt;h2&gt;Skills&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;Javascript&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/section&gt;
                &lt;section class="projects"&gt;
                    &lt;h2&gt;Projects&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;
                            &lt;h3&gt;Website&lt;/h3&gt;
                            &lt;p&gt;pembuatan website keren&lt;/p&gt;
                            &lt;a&gt;25 Januari 2020&lt;/a&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/section&gt;
            &lt;/div&gt;
        &lt;/body&gt;
        
        &lt;/html&gt;
'></iframe>
    </main>
    <footer class="bg-black text-center p-8">
        <p><a href="https://bit.ly/raka-rmdn-portfolio" target="_blank">All right reserved @Raka_Ramadhan</a></p>
    </footer></div>
</template>
<script>
export default {
    data() {
        return {
            layouts: {
                header: "header"
            }
        }
    }
}
</script>