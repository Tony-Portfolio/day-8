export default {
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous"
        },
        {
          href:
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
          rel: "stylesheet"
        },
        {
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"
        },
        {
          src:"https://kit.fontawesome.com/5e4963521e.js",
          crossorigin: "anonymous"
        },
        
        { innerHTML: "hljs.highlightAll();" }
      ],
    }    
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'vercel-edge',
  },
};
