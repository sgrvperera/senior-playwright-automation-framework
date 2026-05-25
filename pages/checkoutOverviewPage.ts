import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Logger } from '../utils/logger';

export class CheckoutOverviewPage extends BasePage {
  readonly pageTitle: Locator;
  readonly cartItems: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.cartItems = page.locator('.cart_item');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
  }

  async getPageTitle(): Promise<string> {
    return await this.getText(this.pageTitle);
  }

  async getSubtotal(): Promise<string> {
    return await this.getText(this.subtotalLabel);
  }

  async getTax(): Promise<string> {
    return await this.getText(this.taxLabel);
  }

  async getTotal(): Promise<string> {
    return await this.getText(this.totalLabel);
  }

  async finishCheckout(): Promise<void> {
    Logger.info('Finishing checkout');
    await this.clickElement(this.finishButton);
  }

  async cancel(): Promise<void> {
    await this.clickElement(this.cancelButton);
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }
}
