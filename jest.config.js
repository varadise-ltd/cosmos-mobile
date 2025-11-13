module.exports = {
  projects: [
    {
      displayName: 'unit',
      preset: 'jest-expo',
      testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
    },
    {
      displayName: 'nativewind-integration',
      preset: 'jest-expo',
      testMatch: ['<rootDir>/src/**/*.integration.test.ts?(x)'],
      moduleNameMapper: {
        '^react-native$': 'react-native-web',
      },
      testEnvironment: 'node',
    },
  ],
};
