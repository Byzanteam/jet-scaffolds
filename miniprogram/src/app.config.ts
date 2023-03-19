export default defineAppConfig({
  pages: ['pages/tabbar/a', 'pages/tabbar/b', 'pages/page-c'],
  window: {
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  tabBar: {
    custom: true,
    // tabbar 的页面必须在 pages 中定义，不能在分包中定义
    list: [
      {
        pagePath: 'pages/tabbar/a',
        text: 'TabbarA',
      },
      {
        pagePath: 'pages/tabbar/b',
        text: 'TabbarB',
      },
    ],
  },
})
