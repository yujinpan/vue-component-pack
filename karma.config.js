const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (config) => {
  const debug = !config.singleRun;

  config.set({
    frameworks: ['jasmine', 'webpack'],

    // single file test
    // files: ['src/components/*.spec.+(js|ts)'],
    files: ['src/**/*.spec.+(js|ts)'],

    preprocessors: {
      'src/**/*.+(js|ts)': debug ? ['webpack', 'sourcemap'] : ['webpack'],
    },
    browsers: ['Chrome'],
    client: {
      captureConsole: false,
    },

    webpack: {
      mode: 'development',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.vue', '.vuex'],
      },
      devtool: debug ? 'eval-source-map' : 'eval',
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          debug && {
            test: /\.js$/,
            include: /node_modules/,
            enforce: 'pre',
            loader: 'source-map-loader',
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
                options: { transpileOnly: true, appendTsSuffixTo: [/\.vue$/] },
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
                  transpileOnly: true,
                  appendTsxSuffixTo: [/\.vue$/],
                },
              },
            ],
          },
          {
            test: /\.(css|scss|sass|less|stylus|png|jpeg|jpg|gif|svg)$/,
            loader: 'null-loader',
          },
        ].filter((item) => !!item),
      },
      plugins: [new VueLoaderPlugin()],
    },

    plugins: [
      'karma-webpack',
      debug && 'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-chrome-launcher',
    ].filter((item) => !!item),
  });
};
