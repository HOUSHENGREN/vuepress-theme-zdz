// const theme = require('../../index')
console.log('TEST-require.resolve', require.resolve('../../'))

module.exports = {
    // theme: require.resolve('../../index.js')
    title: 'test my theme',
    // theme
    theme: require.resolve('../../')
    // theme: '../../index.js'
}