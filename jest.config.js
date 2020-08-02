/** @typedef {import('ts-jest')} */

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  resetMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['./test/setupExpectEachTestHasAssertions.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testEnvironment: 'node',
  transform: {
    '\\.tsx?': 'ts-jest'
  }
};

module.exports = config;
