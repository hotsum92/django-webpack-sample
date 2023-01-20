const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');

const srcDir = './src';
const entries = glob
  .sync('entry/**/*.tsx', {
    cwd: srcDir,
  })

module.exports = (env, argv) => {

  return entries.map(function(entry) {
    const file = entry.split('/').pop()
    const filename = file.substr(0, file.lastIndexOf('.'))

    return {
      entry: path.resolve(srcDir, entry),

      output: {
        filename: filename + '.js',
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
        new HtmlWebpackPlugin({
          filename: filename + '.html',
          inject: false,
          minify: false,
          template: path.resolve(__dirname, 'public/index.html'),
          templateParameters: {
            jsref: '{% static "myapp/' + filename + '.js' + '" %}',
          },
        }),
      ],
    }
  });
}
