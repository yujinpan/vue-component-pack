module.exports = {
  banner:
    '/*!\n' +
    ` * your-component v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} your-name\n` +
    ' * Released under the MIT License.\n' +
    ' */\n',
  outputDir: 'lib',

  formats: [
    {
      format: 'es',
      inputFiles: ['**/*'],
      outputDir: 'lib/es',
      outputFile: '[name][ext]',
    },
    {
      format: 'cjs',
      inputFiles: ['**/*'],
      outputDir: 'lib/cjs',
      outputFile: '[name][ext]',
    },
  ],

  typesOutputDir: 'types',
};
