import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Logger } from '../utils/logger';

export class CartPage extends BasePage {
  readonly pageTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly cartItemNames: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartItemNames = page.locator('.inventory_item_name');
  }

  async getPageTitle(): Promise<string> {
    return await this.getText(this.pageTitle);
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async getCartItemNames(): Promise<string[]> {
    return await this.cartItemNames.allTextContents();
  }

  async removeItem(productName: string): Promise<void> {
    Logger.info(`Removing item from cart: ${productName}`);
    const productId = productName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const removeButton = this.page.locator(`[data-test="remove-${productId}"]`);
    await this.clickElement(removeButton);
  }

  async proceedToCheckout(): Promise<void> {
    Logger.info('Proceeding to checkout');
    await this.clickElement(this.checkoutButton);
  }

  async continueShopping(): Promise<void> {
    await this.clickElement(this.continueShoppingButton);
  }
}
