module.exports = (options, { themeConfig }) => {
  return {
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post', // inject pid into each post.vue
            dirname: '_test',
            // dirname: '_post',
            path: '/',
            itemPermalink: '/post/:year/:month/:day/:slug.html',
            pagination: {
              perPagePosts: 2,
            },
          },
        ],
        globalPagination: {
          lengthPerPage: 5
        },
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
}