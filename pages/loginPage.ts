import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from '../config/environment';
import { Logger } from '../utils/logger';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.logo = page.locator('.login_logo');
  }

  async goto(): Promise<void> {
    Logger.info('Navigating to login page');
    await this.navigate(config.ui.baseUrl);
  }

  async login(username: string, password: string): Promise<void> {
    Logger.info(`Logging in with username: ${username}`);
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
}
