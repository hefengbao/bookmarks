module.exports = {
    title: '导航',
    description: '地址导航',
    base:'/nav/',
	plugins: [
		'@vuepress/active-header-links',
		'@vuepress/back-to-top',
		{
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}
	],
	themeConfig: {
		nav: [
			{ text: '主页', link: 'https://hefengbao.github.io' },
		],
		// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		nextLinks: false,
		// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		prevLinks: false,
		sidebar: [
			['/资讯', '资讯'],
			['/搜索', '搜索'],
			['/程序员', '程序员'],
			['/工具', '工具'],
			['/阅读', '阅读'],
			['/图像', '图像'],
			['/影视', '影视'],
			['/音频', '音频'],
			['/电子书', '电子书'],
			['/博客', '博客'],
		]
	}
  }