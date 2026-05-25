import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Logger } from '../utils/logger';

export class ProductsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;
  readonly sortDropdown: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async getPageTitle(): Promise<string> {
    return await this.getText(this.pageTitle);
  }

  async addProductToCart(productName: string): Promise<void> {
    Logger.info(`Adding product to cart: ${productName}`);
    const productId = productName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const addButton = this.page.locator(`[data-test="add-to-cart-${productId}"]`);
    await this.clickElement(addButton);
  }

  async removeProductFromCart(productName: string): Promise<void> {
    Logger.info(`Removing product from cart: ${productName}`);
    const productId = productName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const removeButton = this.page.locator(`[data-test="remove-${productId}"]`);
    await this.clickElement(removeButton);
  }

  async getCartItemCount(): Promise<number> {
    const isVisible = await this.shoppingCartBadge.isVisible();
    if (!isVisible) return 0;
    const count = await this.getText(this.shoppingCartBadge);
    return parseInt(count, 10);
  }

  async goToCart(): Promise<void> {
    Logger.info('Navigating to cart');
    await this.clickElement(this.shoppingCartLink);
  }

  async sortProducts(option: string): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async getProductCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  async logout(): Promise<void> {
    await this.clickElement(this.menuButton);
    await this.clickElement(this.logoutLink);
  }
}
