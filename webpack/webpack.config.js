const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

const clientEntry = {
  production:  './src/index.tsx',
  development: './src/index.development.tsx',
}

const devtool = {
  development: 'inline-source-map'
}

module.exports = (env, argv) => {

  return [
    {

      devServer: {
        static: {
          directory: './public',
        },
      },

      devtool: devtool[argv.mode],

      entry: clientEntry[argv.mode],

      output: {
        filename: 'index.js'
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
          template: './public/index.html',
          inlineSource: '.(js|css)$',
        }),
        new HtmlWebpackInlineSourcePlugin(),
      ],
    },
  ];
}
