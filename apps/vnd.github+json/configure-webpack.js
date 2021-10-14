/* MIT License

 * Copyright (c) 2021 Emil Shari.

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const path = require('path');

const HappyPack = require('happypack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { resolve } = require('./webpack-utils');

const pluginsFactory = () => [
  new FriendlyErrorsWebpackPlugin({ clearConsole: true }),
];

module.exports = ({ mode, ...config }) => ({
  entry: {
    core: resolve('src/assets/styles/_core.scss'),
  },
  plugins: pluginsFactory({ mode }),
  module: {
    /* rules: [
      * {
      *   test: /\.scss$/,
      *   use: scssLoaderFactory({ mode }),
      * },
      * {
      *   test: /\.sass$/,
      *   use: sassLoaderFactory({ mode }),
      * },
    ],*/
  },
  performance: {
    hints: false,
  },
  stats: {
    children: true,
  },
});
