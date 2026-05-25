import { test, expect } from '../../fixtures/baseFixtures';
import { apiTestData } from '../../data/apiData';

test.describe('API Authentication Flow @smoke @regression', () => {
  // Note: JSONPlaceholder doesn't have real authentication endpoints
  // These tests demonstrate the pattern using the /users endpoint
  
  test('should register user successfully', async ({ apiClient }) => {
    const response = await apiClient.register(apiTestData.registration.validRegistration);

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('email', apiTestData.registration.validRegistration.email);
  });

  test('should handle registration with missing password', async ({ apiClient }) => {
    const response = await apiClient.register(apiTestData.registration.invalidRegistration);

    // JSONPlaceholder accepts any data, so this will succeed
    // In a real API, this would return 400
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  test('should login successfully', async ({ apiClient }) => {
    const response = await apiClient.login(apiTestData.login.validLogin);

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('email', apiTestData.login.validLogin.email);
  });

  test('should handle login with invalid credentials', async ({ apiClient }) => {
    const response = await apiClient.login(apiTestData.login.invalidLogin);

    // JSONPlaceholder accepts any data, so this will succeed
    // In a real API, this would return 400 or 401
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  test('should validate response time for login', async ({ apiClient }) => {
    const startTime = Date.now();
    const response = await apiClient.login(apiTestData.login.validLogin);
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    expect(response.status()).toBe(201);
    expect(responseTime).toBeLessThan(3000);
  });
});
