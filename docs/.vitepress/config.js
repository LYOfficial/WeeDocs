// docs/.vitepress/config.js

import { defineConfig } from 'vitepress'
//const base = "/WeeDocs/"; 
export default {
//  base,
    // 站点级选项
    title: "WeeDocs", // 网站标题
    description: "智能学习手册", // 网站描述
    head: [
      // 配置网站的图标（显示在浏览器的 tab 上）
      ["link", { rel: "icon", href: `${base}LOGO.ico` }],
    ],
  
    themeConfig: {
      search: {
        provider: 'local'
      },
      nav: [
        
        {
          text: 'AI 宣传入门',
          items: [
            { text: "天码秋令营", link: "/SkyCode/" }
          ]
        },
        {
          text: '红石电路',
          items: [
            { text: "序", link: "/bigFrontEnd/css/" },
            { text: "红石·理论基础", link: "/Redstone/Part1/" },
            { text: "生电·理论基础", link: "/Redstone/Part2/" },
            { text: "数模·电路基础", link: "/Redstone/Part3/" },
            { text: "红石·反应原理", link: "/Redstone/Part4/" },
            { text: "方块新论", link: "/Redstone/Partelse/" }
          ]
        },
        { text: '关于', link: '/about' }

      ],

      sidebar: {
        "/SkyCode/": {
          text: "SkyCode",
          items: [
            { text: "命令行", link: "/SkyCode/Part1/" },
            { text: "Git", link: "/SkyCode/Part2/" },
            { text: "命令行工具及其安装", link: "/SkyCode/Part3/" },
          ],
        },
       
      },
      lastUpdated: true,
      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },
    }
  };