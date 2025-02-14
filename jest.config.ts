
// jest.config.ts

import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;
