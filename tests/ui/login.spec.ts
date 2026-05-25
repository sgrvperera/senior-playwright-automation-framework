import { test, expect } from '../../fixtures/baseFixtures';
import { config } from '../../config/environment';

test.describe('Login Flow @smoke @regression', () => {
  test('should login successfully with valid credentials', async ({ loginPage, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(config.users.standard.username, config.users.standard.password);

    await expect(productsPage.pageTitle).toHaveText('Products');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  test('should display error for locked out user', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(config.users.locked.username, config.users.locked.password);

    await expect(loginPage.errorMessage).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out');
  });

  test('should display error for invalid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_password');

    await expect(loginPage.errorMessage).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Username and password do not match');
  });

  test('should display error when username is empty', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', config.users.standard.password);

    await expect(loginPage.errorMessage).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Username is required');
  });

  test('should display error when password is empty', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(config.users.standard.username, '');

    await expect(loginPage.errorMessage).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Password is required');
  });
});
