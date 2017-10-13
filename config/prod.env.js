var merge = require('webpack-merge')
var defaults = require('./defaults.env')

module.exports = merge(defaults, {
  NODE_ENV: '"production"'
})
