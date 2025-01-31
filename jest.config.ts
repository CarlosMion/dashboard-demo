import nextJest from "next/jest";
import path from "path";

const createJestConfig = nextJest({
  dir: path.join(__dirname, "./"),
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "../../coverage/apps/app",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  passWithNoTests: true,
  reporters: ["default"],
};

module.exports = createJestConfig(customJestConfig);
