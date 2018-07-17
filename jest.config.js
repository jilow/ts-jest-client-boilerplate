module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '.*(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
    '**/src/*.test.(ts|tsx|js)'
  ]
}