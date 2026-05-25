export const config = {
  ui: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    timeout: {
      default: 15000,
      navigation: 30000,
    },
  },
  api: {
    // Using JSONPlaceholder - a free, stable public API for testing
    baseUrl: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 30000,
  },
  users: {
    standard: {
      username: process.env.STANDARD_USER || 'standard_user',
      password: process.env.USER_PASSWORD || 'secret_sauce',
    },
    locked: {
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
  },
};
