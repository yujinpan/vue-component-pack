const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    // single file test
    // files: ['src/components/*.spec.+(js|ts)'],
    files: ['src/**/*.spec.+(js|ts)'],

    preprocessors: {
      'src/**/*.+(js|ts)': [
        'webpack',
        // 'sourcemap'
      ],
    },
    browsers: ['Chrome'],
    singleRun: true,

    webpack: {
      mode: 'development',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.vuex'],
      },
      // devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.ts$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  exclude: /node_modules/,
                },
              },
              {
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] },
              },
            ],
          },
          {
            test: /\.tsx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  exclude: /node_modules/,
                },
              },
              {
                loader: 'ts-loader',
                options: {
                  appendTsxSuffixTo: [/\.vue$/],
                },
              },
            ],
          },
          {
            test: /\.(css|scss|sass|less|stylus|png|jpeg|jpg|gif|svg)$/,
            loader: 'null-loader',
          },
        ],
      },
      plugins: [new VueLoaderPlugin()],
    },

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-chrome-launcher',
    ],
  });
};
