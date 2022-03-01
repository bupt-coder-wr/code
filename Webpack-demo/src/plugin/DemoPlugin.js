class DemoPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    console.log('applying', this.options)
  }
}
module.exports = DemoPlugin
