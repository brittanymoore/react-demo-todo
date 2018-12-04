/*
 * Docs: https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  rootDir: '../../',

  setupTestFrameworkScriptFile: '<rootDir>/config/test/setup.js',

  // exclude App and index from coverage, since they contain no business logic.
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.jsx', '!src/App.jsx'],

  // resolves CSS Module class names while testing
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },

  // specify patterns that locate test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],

  transform: {
    // handle babel language features in components
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    // ignore css and other file imports
    '^.+\\.css$': '<rootDir>/config/test/transformImport.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/config/test/transformImport.js'
  },

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
}
