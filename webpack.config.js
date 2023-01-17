const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
  entry: {
    '': './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: '/',
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api/*': 'http://localhost:3000/',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      title: '小浮ovo',
      favicon: path.resolve('favicon.ico'),
    }),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '...'],
    alias: {
      "@common": path.resolve(__dirname, 'src/common/'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@": path.resolve(__dirname, 'src')
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
