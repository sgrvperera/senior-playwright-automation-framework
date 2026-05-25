import { test, expect } from '../../fixtures/baseFixtures';
import { apiTestData } from '../../data/apiData';

test.describe('API User Management @smoke @regression', () => {
  test('should get list of users', async ({ apiClient }) => {
    const response = await apiClient.getUsers(1);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('email');
    expect(body[0]).toHaveProperty('name');
  });

  test('should get single user by ID', async ({ apiClient }) => {
    const userId = 1;
    const response = await apiClient.getUserById(userId);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', userId);
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('username');
  });

  test('should return 404 for non-existent user', async ({ apiClient }) => {
    const response = await apiClient.getUserById(999);
    expect(response.status()).toBe(404);
  });

  test('should create new user', async ({ apiClient }) => {
    const response = await apiClient.createUser(apiTestData.users.validUser);

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('name', apiTestData.users.validUser.name);
    expect(body).toHaveProperty('job', apiTestData.users.validUser.job);
    expect(body).toHaveProperty('id');
  });

  test('should update existing user', async ({ apiClient }) => {
    const userId = 1;
    const response = await apiClient.updateUser(userId, apiTestData.users.updateUser);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('name', apiTestData.users.updateUser.name);
    expect(body).toHaveProperty('job', apiTestData.users.updateUser.job);
  });

  test('should delete user', async ({ apiClient }) => {
    const userId = 1;
    const response = await apiClient.deleteUser(userId);
    expect(response.status()).toBe(200);
  });
});
