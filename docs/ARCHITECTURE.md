# Framework Architecture

## Overview

This document describes the architectural decisions and design patterns used in this Playwright automation framework.

## Design Principles

### 1. Page Object Model (POM)

**Why POM?**
- Separates test logic from UI interactions
- Improves code reusability and maintainability
- Makes tests more readable and easier to update
- Reduces code duplication

**Implementation:**
- Each page has its own class in the `pages/` directory
- All locators are defined as class properties
- Page methods encapsulate user actions
- BasePage provides common functionality

### 2. Fixture-Based Architecture

**Benefits:**
- Automatic setup and teardown
- Dependency injection for page objects
- Reusable authenticated state
- Clean test code without boilerplate

**Types of Fixtures:**
- **Standard Fixtures**: Inject page objects and API client
- **Authenticated Fixtures**: Pre-login state for tests requiring authentication

### 3. Separation of Concerns

**Structure:**
```
Tests → Fixtures → Page Objects → Base Page → Playwright API
Tests → Fixtures → API Client → Playwright Request API
```

**Responsibilities:**
- **Tests**: Define what to test (business logic)
- **Fixtures**: Provide test dependencies
- **Page Objects**: Define how to interact with UI
- **API Client**: Define how to interact with backend
- **Utilities**: Provide helper functions
- **Data**: Store test data separately

## Directory Structure Explained

### `/pages`
Contains Page Object Model classes. Each page in the application has a corresponding class.

**Key Files:**
- `basePage.ts`: Common methods for all pages
- `loginPage.ts`: Login page interactions
- `productsPage.ts`: Product listing and cart actions
- `cartPage.ts`: Shopping cart operations
- `checkoutPage.ts`: Checkout form handling
- `checkoutOverviewPage.ts`: Order review
- `checkoutCompletePage.ts`: Order confirmation

### `/tests`
Contains test specifications organized by feature.

**Structure:**
- `/ui`: User interface tests
- `/api`: Backend API tests

**Naming Convention:**
- `*.spec.ts`: Test files
- One business flow per file
- Descriptive file names

### `/fixtures`
Custom Playwright fixtures for dependency injection.

**Purpose:**
- Inject page objects into tests
- Provide authenticated state
- Reduce test boilerplate
- Improve test readability

### `/api`
API client for backend testing.

**Features:**
- RESTful API methods
- Request/response handling
- Logging integration
- Type-safe responses

### `/data`
Test data and payloads.

**Organization:**
- `testData.ts`: UI test data
- `apiData.ts`: API test payloads
- Centralized data management
- Easy to update and maintain

### `/utils`
Reusable utility functions.

**Utilities:**
- `dataGenerator.ts`: Generate unique test data
- `logger.ts`: Structured logging

### `/config`
Configuration files.

**Purpose:**
- Environment-specific settings
- Centralized configuration
- Easy environment switching

## Test Design Patterns

### 1. Arrange-Act-Assert (AAA)

All tests follow the AAA pattern:

```typescript
test('should complete checkout', async ({ productsPage, cartPage, checkoutPage }) => {
  // Arrange
  await productsPage.addProductToCart(products.backpack);
  
  // Act
  await productsPage.goToCart();
  await cartPage.proceedToCheckout();
  
  // Assert
  await expect(checkoutPage.pageTitle).toHaveText('Checkout: Your Information');
});
```

### 2. Data-Driven Testing

Tests can be parameterized using loops:

```typescript
for (const product of productList) {
  test(`should add ${product} to cart`, async ({ productsPage }) => {
    await productsPage.addProductToCart(product);
    const cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBeGreaterThan(0);
  });
}
```

### 3. Fixture-Based Setup

Authentication is handled via fixtures:

```typescript
export const authenticatedTest = base.extend<PageFixtures>({
  page: async ({ page }, use) => {
    // Setup: Login before test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);
    
    // Use: Run test
    await use(page);
    
    // Teardown: Automatic cleanup
  },
});
```

## Configuration Management

### Environment Variables

Configuration is managed through:
1. `.env` file (local development)
2. Environment variables (CI/CD)
3. Default values (fallback)

### Playwright Configuration

Key settings in `playwright.config.ts`:
- **Parallel execution**: Faster test runs
- **Retries**: Handle flaky tests in CI
- **Multiple reporters**: HTML, JSON, JUnit
- **Trace on failure**: Debug failed tests
- **Screenshots/videos**: Visual evidence
- **Multiple browsers**: Cross-browser testing

## API Testing Strategy

### Request Context

Uses Playwright's built-in API testing:
- No external HTTP libraries needed
- Integrated with test framework
- Automatic request/response logging
- Type-safe responses

### API Client Pattern

Centralized API methods:
- Consistent error handling
- Logging integration
- Reusable across tests
- Easy to maintain
- **No Authentication Required**: Using JSONPlaceholder public API
- Clean, simple request structure

## Error Handling

### Locator Strategy

- Use data-test attributes when available
- Fallback to stable selectors
- Avoid brittle XPath
- Wait for elements automatically

### Timeouts

- Action timeout: 15 seconds
- Navigation timeout: 30 seconds
- Configurable per environment
- Automatic retries in CI

### Assertions

- Use Playwright's built-in assertions
- Auto-retry assertions
- Clear error messages
- Screenshot on failure

## Scalability Considerations

### Adding New Tests

1. Create page object if needed
2. Add test data to `/data`
3. Write test in appropriate directory
4. Use existing fixtures
5. Follow naming conventions

### Adding New Pages

1. Extend BasePage
2. Define locators as properties
3. Create methods for user actions
4. Add to fixtures if needed

### Adding New API Endpoints

1. Add method to ApiClient
2. Create test data in `/data/apiData.ts`
3. Write tests in `/tests/api`

## CI/CD Integration

### GitHub Actions Workflow

**Strategy:**
- Matrix testing across browsers
- Parallel execution
- Artifact upload
- Fail-fast disabled for complete results

**Optimization:**
- Cache npm dependencies
- Install only required browsers
- Upload artifacts conditionally
- Retention policy for storage

## Best Practices Implemented

1. ✅ **One assertion per test**: Clear test purpose
2. ✅ **Independent tests**: No test dependencies
3. ✅ **Descriptive names**: Self-documenting tests
4. ✅ **DRY principle**: Reusable components
5. ✅ **Type safety**: TypeScript throughout
6. ✅ **Code quality**: Linting and formatting
7. ✅ **Documentation**: Comprehensive README
8. ✅ **Version control**: Git best practices
9. ✅ **CI/CD**: Automated testing
10. ✅ **Reporting**: Multiple formats

## Future Enhancements

Potential improvements for scaling:

- Visual regression testing
- Performance testing
- Accessibility testing
- Database validation
- Mock API responses
- Test data factories
- Custom reporters
- Allure reporting
- Docker containerization
- Kubernetes deployment

## Conclusion

This architecture provides:
- **Maintainability**: Easy to update and extend
- **Scalability**: Grows with project needs
- **Reliability**: Stable and repeatable tests
- **Readability**: Clear and understandable code
- **Professional Quality**: Production-ready framework
