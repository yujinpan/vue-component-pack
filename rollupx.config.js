module.exports = {
  banner:
    '/*!\n' +
    ` * your-component v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} your-name\n` +
    ' * Released under the MIT License.\n' +
    ' */\n'
};
