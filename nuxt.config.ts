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
            "https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css",
          rel: "stylesheet",
          type: "text/css"
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
