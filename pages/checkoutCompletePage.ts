import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutCompletePage extends BasePage {
  readonly pageTitle: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;
  readonly ponyExpressImage: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
    this.ponyExpressImage = page.locator('.pony_express');
  }

  async getPageTitle(): Promise<string> {
    return await this.getText(this.pageTitle);
  }

  async getCompleteHeader(): Promise<string> {
    return await this.getText(this.completeHeader);
  }

  async getCompleteText(): Promise<string> {
    return await this.getText(this.completeText);
  }

  async isOrderComplete(): Promise<boolean> {
    return await this.ponyExpressImage.isVisible();
  }

  async backToHome(): Promise<void> {
    await this.clickElement(this.backHomeButton);
  }
}
