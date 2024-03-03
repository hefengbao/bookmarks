import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bookmark",
  description: "网络书签",
  base: "/nav/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Links', link: '/information' }
    ],

    sidebar: [
      {
        text: 'Links',
        items: [
          { text: '资讯', link: '/information' },
          { text: '', link: '/information' },
          { text: '搜索', link: '/search' },
          { text: '影视', link: '/video' },
          { text: '音乐', link: '/music' },
          { text: '图像', link: '/photo' },
          { text: '电子书', link: '/ebook' },
          { text: '博客', link: '/blog' },
          { text: '程序员', link: '/programmer' },
          { text: '其他', link: '/other' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao/nav' }
    ]
  }
})
