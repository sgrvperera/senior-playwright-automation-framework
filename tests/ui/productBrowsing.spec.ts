import { authenticatedTest as test, expect } from '../../fixtures/baseFixtures';
import { products } from '../../data/testData';

test.describe('Product Browsing Flow @regression', () => {
  const productList = [
    products.backpack,
    products.bikeLight,
    products.boltTShirt,
    products.fleeceJacket,
  ];

  test('should display all products on inventory page', async ({ productsPage }) => {
    await expect(productsPage.pageTitle).toHaveText('Products');
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
  });

  test('should sort products by name A to Z', async ({ productsPage }) => {
    await productsPage.sortProducts('az');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  test('should sort products by name Z to A', async ({ productsPage }) => {
    await productsPage.sortProducts('za');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  test('should sort products by price low to high', async ({ productsPage }) => {
    await productsPage.sortProducts('lohi');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  test('should sort products by price high to low', async ({ productsPage }) => {
    await productsPage.sortProducts('hilo');
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  for (const product of productList) {
    test(`should add ${product} to cart`, async ({ productsPage }) => {
      await productsPage.addProductToCart(product);
      const cartCount = await productsPage.getCartItemCount();
      expect(cartCount).toBeGreaterThan(0);
    });
  }

  test('should logout successfully', async ({ productsPage, loginPage }) => {
    await productsPage.logout();
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.page).toHaveURL(/.*saucedemo.com/);
  });
});
