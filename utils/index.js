// 生产归档页并动态注入归档页

const { path } = require('@vuepress/shared-utils')

/**
 * extendPageData
 * additionalPages
 * 均是vuepress内置api
 * @param {*} options 
 * @param {*} context 
 * @returns 
 */
module.exports = (options = {}, context) => ({
    // 注入各类页面的类型
    extendPageData($page) {
        if($page.path == '/archives/') {
            // 赋值并返回类型
            return $page.pageType = 'archive' 
        } else if($page.path === '/categories/') {
            return $page.pageType = 'category'
        } else if(/^\/categories\/\w/.test($page.path)) {
            return $page.pageType = 'categoryItem'
        } else if($page.path === '/tags/') {
            return $page.pageType = 'tag'
        } else if(/^\/tags\/\w/.test($page.path)) {
            return $page.pageType = 'tagItem'
        }
    },
    additionalPages() {
        const pages = [
            {
                path: '/archives/',
                frontmatter: {
                    title: '文档归档'
                }
            }
        ]
        return pages
    }
})