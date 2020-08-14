module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // collectCoverageFrom: ['<rootDir>'],
  // coverageDirectory: '',
  coverageReporters: ["json", "lcov"],
  testMatch: ["<rootDir>/**/*.test.ts"],
  transform: { "^.+\\.ts$": "ts-jest" }
};
