const common = {
  transform: {
    "^.+\\.(t|j)s$": ["ts-jest", { tsconfig: "./tsconfig.json" }]
  },
  rootDir: ".",
  setupFiles: ["./test/setup.ts"]
};

module.exports = {
  collectCoverageFrom: ["./src/**/*.{js,ts}"],
  projects: [
    {
      displayName: "unit",
      ...common,
      testMatch: ["<rootDir>/src/**/*.spec.ts", "<rootDir>/tests/**/*.spec.ts"],
      setupFilesAfterEnv: ["./test/setup-unit-tests.ts"]
    }
  ]
};
