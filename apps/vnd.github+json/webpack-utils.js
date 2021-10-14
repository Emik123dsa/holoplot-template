/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { isDev } = require('./webpack-constants');

exports.resolve = (baseFile) => path.resolve(__dirname, baseFile);

const cssLoaderFactory = ({ mode }) =>
  [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(process.cwd(), './postcss.config.js'),
        },
        sourceMap: isDev({ mode }),
      },
    },
  ].filter(Boolean);

exports.sassLoaderFactory = ({ mode }) => [
  ...cssLoaderFactory({ mode }),

  {
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
      sassOptions: {
        indentedSyntax: true,
      },
    },
  },
];

exports.scssLoaderFactory = ({ mode }) => [
  ...cssLoaderFactory({ mode }),
  {
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
      sassOptions: {
        indentedSyntax: false,
      },
    },
  },
];
