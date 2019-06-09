const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fileLoaderConfig = {
  // 対象となるファイルの拡張子
  test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
  // 画像を埋め込まず任意のフォルダに保存する
  loader: 'file-loader',
  options: { name: './images/[name].[ext]' }
};

const sassLoaderConfig = {
  loader: 'sass-loader',
  options: { sourceMap: enabledSourceMap, }
};

const cssLoaderConfig = {
  loader: 'css-loader',
  options: {
    // オプションでCSS内のurl()メソッドを取り込む
    url: true,
    // ソースマップの利用有無
    sourceMap: enabledSourceMap,

    // 0 => no loaders (default);
    // 1 => postcss-loader;
    // 2 => postcss-loader, sass-loader
    importLoaders: 0
  },
};

const devServer = {
  contentBase: path.join( __dirname, 'docs' ),
  compress: true,
  port: 9000,
  hot: true,
  open: 'Google Chrome'
};

const output = {
  path: path.resolve( __dirname, 'docs' ),
  filename: 'bundle.js'
};

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  entry: './src/js/index.js',
  output,
  devServer,
  module: {
    rules: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../../style/'
            // ( resourcePath, context ) => { return path.relative(path.dirname(resourcePath), context) + '/'; },
        },
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.css/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          cssLoaderConfig,
          // Sassをバンドルするための機能
          sassLoaderConfig
        ],
      },
      fileLoaderConfig
    ],
  }
};
