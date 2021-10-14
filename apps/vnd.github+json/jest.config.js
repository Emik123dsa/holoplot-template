module.exports = {
  displayName: 'vnd.github+json',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/vnd.github+json',
  moduleNameWrapper: [],
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      babelConfig: '<rootDir>/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/vnd.github+json/tsconfig.spec.json',
      babelConfig: 'apps/vnd.github+json/babel.config.js',
    },
  },
};
