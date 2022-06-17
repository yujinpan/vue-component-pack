const { VueLoaderPlugin } = require('vue-loader');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    // single file test
    // files: ['src/components/*.spec.+(js|ts)'],
    files: ['src/**/*.spec.+(js|ts)'],

    preprocessors: {
      'src/**/*.+(js|ts)': ['webpack', 'sourcemap']
    },
    browsers: ['Chrome'],
    singleRun: true,

    webpack: {
      mode: 'development',
      resolve: {
        alias: require('./alias.config.js'),
        extensions: ['.ts', '.js']
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.js$/,
            exclude: (file) =>
              /node_modules/.test(file) && !/\.vue\.js/.test(file),
            loader: 'babel-loader'
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
          },
          {
            exclude: /\.(js|ts|vue)$/,
            loader: 'null-loader'
          }
        ]
      },
      plugins: [new VueLoaderPlugin()]
    },

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  });
};
