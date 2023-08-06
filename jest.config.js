module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/tests/.*\\.test)\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
};
