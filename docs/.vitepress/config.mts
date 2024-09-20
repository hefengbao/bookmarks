import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "书签",
  description: "网络书签",
  base: "/bookmarks/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '书签', link: '/information' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '资讯', link: '/information' },
          { text: 'AI', link: '/ai' },
          { text: 'APP', link: '/app' },
          { text: '汉语', link: '/chinese' },
          { text: '电脑', link: '/computer' },
          { text: '计算机科学', link: '/cs' },
          { text: '数据集', link: '/dataset' },
          { text: '设计', link: '/design' },
          { text: '开发者', link: '/developer' },
          { text: 'DevOps', link: '/DevOps' },
          { text: '文档', link: '/doc' },
          { text: '电子书', link: '/ebook' },
          { text: '编辑器', link: '/editor' },
          { text: '教育', link: '/education' },
          { text: '文件', link: '/file' },
          { text: '外语', link: '/foreign-language' },
          { text: '游戏', link: '/game' },
          { text: 'Git & Github', link: '/git-github' },
          { text: '健康', link: '/health' },
          { text: '灵感', link: '/idea' },
          { text: '学习', link: '/learning' },
          { text: 'Linux', link: '/linux' },
          { text: '生活', link: '/livelihood' },
          { text: '多媒体', link: '/media' },
          { text: '思维导图', link: '/mind-map' },
          { text: '音乐', link: '/music' },
          { text: '网络安全', link: '/network-security' },
          { text: '通知', link: '/notification' },
          { text: '办公', link: '/office' },
          { text: '图像', link: '/picture' },
          { text: '阅读', link: '/read' },
          { text: '资源', link: '/resource' },
          { text: '搜索', link: '/search' },
          { text: '自架', link: '/self-hosted' },
          { text: '创业', link: '/startup' },
          { text: '方法', link: '/technique' },
          { text: '工具', link: '/tools' },
          { text: 'UI', link: '/ui' },
          { text: '影视', link: '/video' },
          { text: '网站', link: '/website' },
          { text: '写作', link: '/write' },
          { text: '其他', link: '/other' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
