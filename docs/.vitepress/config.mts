import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "软件商店",
  description: "常用软件合集",
  base: "/nav/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Links', link: '/资讯' }
    ],

    sidebar: [
      {
        text: 'Links',
        items: [
          { text: '资讯', link: '/资讯' },
          { text: '搜索', link: '/搜索' },
          { text: '影视', link: '/影视' },
          { text: '音乐', link: '/音乐' },
          { text: '图像', link: '/图像' },
          { text: '电子书', link: '/电子书' },
          { text: '博客', link: '/博客' },
          { text: '程序员', link: '/程序员' },
          { text: '其他', link: '/other' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao/nav' }
    ]
  }
})
