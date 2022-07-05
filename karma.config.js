const { VueLoaderPlugin } = require('vue-loader');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    // single file test
    // files: ['src/components/*.spec.+(js|ts)'],
    files: ['src/**/*.spec.+(js|ts)'],

    preprocessors: {
      'src/**/*.+(js|ts)': [
        'webpack'
        // 'sourcemap'
      ]
    },
    browsers: ['Chrome'],
    singleRun: true,

    webpack: {
      mode: 'development',
      resolve: {
        alias: require('./alias.config.js'),
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.vuex']
      },
      // devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
          },
          {
            test: /\.tsx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  exclude: /node_modules/
                }
              },
              {
                loader: 'ts-loader',
                options: {
                  appendTsxSuffixTo: [/\.vue$/]
                }
              }
            ]
          },
          {
            exclude: /\.(js|jsx|ts|tsx|vue|vuex)$/,
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
