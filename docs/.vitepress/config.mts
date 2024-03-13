import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bookmark",
  description: "网络书签",
  base: "/bookmarks/",
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
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao/bookmarks' }
    ]
  }
})
