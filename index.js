module.exports = {
    plugins: [
        ['@vuepress/blog', {
            directories: [
              {
                id: 'post',
                dirname: '_test',
                // dirname: '_posts',
                path: '/',
                // itemPermalink: '/post/:year/:month/:day/:slug.html',
                pagination: {
                  perPagePosts: 2,
                },
              },
            ],
            frontmatters: [
              {
                id: "tag",
                keys: ['tag', 'tags'],
                path: '/tag/',
                layout: 'Tag',
                frontmatter: { title: 'Tag' },
                itemlayout: 'Tag',
                pagination: {
                  perPagePosts: 3
                }
              },
            ]
        }],
    ]
}