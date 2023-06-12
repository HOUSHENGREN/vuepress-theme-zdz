// const theme = require('../../index')
console.log('TEST-require.resolve', require.resolve('../../'))

module.exports = {
    // theme: require.resolve('../../index.js')
    title: 'test my theme',
    // theme
    theme: require.resolve('../../'),
    themeConfig: {
        // inner or external links
        nav: [
            { text: '👨‍👩‍👧‍👦Home', link: '/' },
            { text: '🐣内部链接', link: '/2022/11/06/test001' },
            { text: '🐥外部链接', link: 'http://google.com' },
        ],
        social: [
            {
                type: 'email',
                link: '2549626703@qq.com'
            },
            {
                type: 'github',
                link: 'houshengren'
            },
            {
                type: 'qq',
                // todo what?
                link: '//qm.qq.com/cgi-bin/qm/qr?k=5qf0UGmRJWavJGOgo5nemY2BezuGKa-V&jump_from=webapi'
            },
            {
                type: 'feed',
                link: 'rss.xml'
            },
        ],
        copyright: `
            @copyright 🤣
            <a target='_blank' href='https://www.baidu.com'>
            baidu
            </a>
        `
    }
    // theme: '../../index.js'
}