import { authenticatedTest as test, expect } from '../../fixtures/baseFixtures';
import { products } from '../../data/testData';

test.describe('Shopping Cart Flow @smoke @regression', () => {
  test('should add products to cart and verify count', async ({ productsPage }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.addProductToCart(products.bikeLight);

    const cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(2);
  });

  test('should remove product from cart', async ({ productsPage }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.addProductToCart(products.bikeLight);

    let cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(2);

    await productsPage.removeProductFromCart(products.backpack);
    cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(1);
  });

  test('should display correct items in cart page', async ({ productsPage, cartPage }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.addProductToCart(products.onesie);
    await productsPage.goToCart();

    await expect(cartPage.pageTitle).toHaveText('Your Cart');
    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBe(2);

    const itemNames = await cartPage.getCartItemNames();
    expect(itemNames).toContain(products.backpack);
    expect(itemNames).toContain(products.onesie);
  });

  test('should continue shopping from cart', async ({ productsPage, cartPage }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.goToCart();
    await cartPage.continueShopping();

    await expect(productsPage.pageTitle).toHaveText('Products');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });
});
