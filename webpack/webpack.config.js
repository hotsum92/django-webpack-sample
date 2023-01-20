const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');

const srcDir = './src';
const entries = glob
  .sync('entry/**/*.tsx', {
    cwd: srcDir,
  })
  .map(function(entry) {
    const file = entry.split('/').pop()
    const filename = file.substr(0, file.lastIndexOf('.'))

    return {
      entry,
      filename,
    }
  })

module.exports = (env, argv) => {
  return {
    entry: entries.reduce(function(obj, { entry, filename }) {
      return {
        ...obj,
        [filename]: path.resolve(srcDir, entry),
      }
    }, {}),

    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      ...entries.map(function({ entry, filename }) {
        return new HtmlWebpackPlugin({
          filename: filename + '.html',
          publicPath: 'http://localhost:8000/static/myapp',
          chunks: [ filename ],
          minify: false,
          template: path.resolve(__dirname, 'public/index.html'),
        })
      }),
      new CleanWebpackPlugin(),
    ],

    optimization: {
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}
