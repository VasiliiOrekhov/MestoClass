import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.resolve();

const config = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: './images/[name].[hash][ext][query]',

    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js)?$/i,
        resolve: { fullySpecified: false },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
  ],
};

export default config;
