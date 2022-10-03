const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV;
const minify = env === 'production' ? process.env.TARGET_ENV === 'staging' : false;
const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    publicPath: '/',
  },
  serve: {
    host: 'localhost',
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: env === 'development'
    ? 'cheap-module-eval-source-map' // development
    : process.env.TARGET_ENV === 'staging'
      ? 'sourcemap' // staging
      : undefined,  // production
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader',
      },
      {
        test: /\.(png|jp(e*)g|webp|svg|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'static', 'index.html'),
      inject: true,
      minify: minify
        ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        }
        : false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'static', 'robots.txt'),
          to: path.join(__dirname, 'dist', 'robots.txt'),
          flatten: true,
        },
        {
          from: path.join(__dirname, 'static', 'sitemap.xml'),
          to: path.join(__dirname, 'dist', 'sitemap.xml'),
          flatten: true,
        },
        {
          from: path.join(__dirname, 'static', 'web.config'),
          to: path.join(__dirname, 'dist', 'web.config'),
          flatten: true,
        },
        {
          from: path.join(__dirname, 'static', 'assets', '*'),
          to: path.join(__dirname, 'dist', 'assets'),
          flatten: true,
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        TARGET_ENV: JSON.stringify(process.env.TARGET_ENV),
      },
    }),
  ],
  resolve: {
    alias: {
      '@API$': path.resolve(__dirname, 'src/services/API.js'),
      '@Config$': path.resolve(__dirname, 'src/config.js'),
      '@Service': path.resolve(__dirname, 'src/services/'),
      '@Component': path.resolve(__dirname, 'src/components/'),
      '@Directive': path.resolve(__dirname, 'src/directives/'),
      '@View': path.resolve(__dirname, 'src/views/'),
      '@MasterStyle$': path.resolve(__dirname, 'src/scss/master.scss'),
      '@Asset': path.resolve(__dirname, 'src/assets/'),
      '@Test': path.resolve(__dirname, '__test__'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};

if (minify) {
  config.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ];
}

module.exports = config;
