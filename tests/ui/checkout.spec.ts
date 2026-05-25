import { authenticatedTest as test, expect } from '../../fixtures/baseFixtures';
import { products, checkoutData } from '../../data/testData';

test.describe('Complete Checkout Flow @smoke @regression', () => {
  test('should complete full checkout process successfully', async ({
    productsPage,
    cartPage,
    checkoutPage,
    checkoutOverviewPage,
    checkoutCompletePage,
  }) => {
    // Add products to cart
    await productsPage.addProductToCart(products.backpack);
    await productsPage.addProductToCart(products.bikeLight);
    await productsPage.goToCart();

    // Verify cart
    await expect(cartPage.pageTitle).toHaveText('Your Cart');
    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBe(2);

    // Proceed to checkout
    await cartPage.proceedToCheckout();

    // Fill checkout information
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Your Information');
    await checkoutPage.fillCheckoutInformation(
      checkoutData.validCheckout.firstName,
      checkoutData.validCheckout.lastName,
      checkoutData.validCheckout.postalCode
    );
    await checkoutPage.continue();

    // Verify overview
    await expect(checkoutOverviewPage.pageTitle).toHaveText('Checkout: Overview');
    const overviewItemCount = await checkoutOverviewPage.getItemCount();
    expect(overviewItemCount).toBe(2);

    const subtotal = await checkoutOverviewPage.getSubtotal();
    expect(subtotal).toContain('Item total:');

    const tax = await checkoutOverviewPage.getTax();
    expect(tax).toContain('Tax:');

    const total = await checkoutOverviewPage.getTotal();
    expect(total).toContain('Total:');

    // Complete checkout
    await checkoutOverviewPage.finishCheckout();

    // Verify completion
    await expect(checkoutCompletePage.pageTitle).toHaveText('Checkout: Complete!');
    const completeHeader = await checkoutCompletePage.getCompleteHeader();
    expect(completeHeader).toBe('Thank you for your order!');

    const isComplete = await checkoutCompletePage.isOrderComplete();
    expect(isComplete).toBe(true);
  });

  test('should display error when checkout information is incomplete', async ({
    productsPage,
    cartPage,
    checkoutPage,
  }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.goToCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInformation('', '', '');
    await checkoutPage.continue();

    const isErrorDisplayed = await checkoutPage.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const errorMessage = await checkoutPage.getErrorMessage();
    expect(errorMessage).toContain('Error: First Name is required');
  });

  test('should allow canceling checkout and return to cart', async ({
    productsPage,
    cartPage,
    checkoutPage,
  }) => {
    await productsPage.addProductToCart(products.backpack);
    await productsPage.goToCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.cancel();

    await expect(cartPage.pageTitle).toHaveText('Your Cart');
    await expect(cartPage.page).toHaveURL(/.*cart.html/);
  });
});
