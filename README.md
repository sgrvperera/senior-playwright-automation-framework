# Enterprise E-Commerce Test Automation Framework

**Production-grade Playwright automation framework demonstrating senior-level QA engineering practices for UI and API testing**

[![Playwright Tests](https://github.com/yourusername/playwright-ecommerce-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/yourusername/playwright-ecommerce-automation/actions/workflows/playwright.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.60-green)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

This is a comprehensive test automation framework built to demonstrate enterprise-level quality engineering capabilities. The framework provides complete test coverage for e-commerce workflows, combining UI automation, API validation, and CI/CD integration in a scalable, maintainable architecture.

**Built for real-world application**, this framework showcases the technical depth and professional practices that clients expect from senior automation engineers. It goes beyond basic test scripts to deliver a production-ready solution with proper architecture, reusable components, and robust error handling.

### Why This Framework Matters

- **Client-Ready Quality**: Production-grade code that follows industry best practices and design patterns
- **Complete Coverage**: End-to-end UI flows, API contract testing, and hybrid validation scenarios
- **Scalable Architecture**: Page Object Model with custom fixtures enables rapid test expansion
- **Professional Tooling**: TypeScript, ESLint, Prettier, and comprehensive reporting built-in
- **CI/CD Integration**: Automated testing pipeline with cross-browser execution and artifact management
- **Maintainable Design**: Clear separation of concerns, reusable utilities, and centralized configuration

This framework demonstrates the ability to architect, implement, and maintain automation solutions that deliver business value while remaining stable and easy to extend.

---

## Key Capabilities

### UI Automation
- Complete user journey automation from authentication to checkout
- Page Object Model architecture for maintainability
- Stable locator strategies using data-test attributes
- Automatic waiting and retry mechanisms
- Cross-browser testing (Chromium, Firefox, WebKit)

### API Testing
- RESTful API validation with full CRUD coverage
- Request/response contract testing
- Error handling and negative scenario validation
- Performance assertions (response time validation)
- Clean API client abstraction layer

### Framework Features
- **Custom Fixtures**: Dependency injection for page objects and authenticated state
- **Session Management**: Reusable authentication setup for test efficiency
- **Data Management**: Centralized test data with dynamic generation utilities
- **Environment Configuration**: Multi-environment support via environment variables
- **Comprehensive Reporting**: HTML, JSON, and JUnit reports with trace/screenshot/video capture
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode enforcement
- **CI/CD Pipeline**: GitHub Actions workflow with parallel execution and artifact upload

---

## Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Language** | TypeScript 5.5 | Type safety and modern JavaScript features |
| **Test Framework** | Playwright 1.60 | Cross-browser automation and API testing |
| **Architecture** | Page Object Model | Separation of test logic and UI interactions |
| **Code Quality** | ESLint + Prettier | Consistent code style and quality enforcement |
| **CI/CD** | GitHub Actions | Automated testing pipeline |
| **Reporting** | HTML, JSON, JUnit | Multiple report formats for different audiences |
| **Environment Management** | dotenv | Secure configuration management |

---

## Project Architecture

```
playwright-ecommerce-automation/
│
├── .github/workflows/          # CI/CD pipeline configuration
│   └── playwright.yml          # GitHub Actions workflow
│
├── api/                        # API client layer
│   └── apiClient.ts            # RESTful API methods for backend testing
│
├── config/                     # Environment configuration
│   └── environment.ts          # Centralized config with environment variables
│
├── data/                       # Test data management
│   ├── apiData.ts              # API test payloads and data
│   └── testData.ts             # UI test data and constants
│
├── docs/                       # Additional documentation
│   ├── ARCHITECTURE.md         # Detailed architecture documentation
│   ├── TROUBLESHOOTING.md      # Common issues and solutions
│   └── API_FIX_SUMMARY.md      # API implementation notes
│
├── fixtures/                   # Custom Playwright fixtures
│   └── baseFixtures.ts         # Page object injection and auth setup
│
├── pages/                      # Page Object Model classes
│   ├── basePage.ts             # Base page with common methods
│   ├── loginPage.ts            # Login page interactions
│   ├── productsPage.ts         # Product catalog page
│   ├── cartPage.ts             # Shopping cart page
│   ├── checkoutPage.ts         # Checkout information page
│   ├── checkoutOverviewPage.ts # Order review page
│   └── checkoutCompletePage.ts # Order confirmation page
│
├── tests/                      # Test specifications
│   ├── api/                    # API test suites
│   │   ├── authentication.spec.ts    # Auth flow tests
│   │   └── userManagement.spec.ts    # User CRUD tests
│   └── ui/                     # UI test suites
│       ├── login.spec.ts             # Login flow tests
│       ├── shoppingCart.spec.ts      # Cart management tests
│       ├── checkout.spec.ts          # Checkout flow tests
│       └── productBrowsing.spec.ts   # Product browsing tests
│
├── utils/                      # Reusable utilities
│   ├── dataGenerator.ts        # Dynamic test data generation
│   └── logger.ts               # Structured logging utility
│
├── reports/                    # Generated test reports
├── test-results/               # Test execution artifacts
│
├── .env.example                # Environment variables template
├── .eslintrc.js                # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

### Architecture Highlights

**Page Object Model (POM)**: Each page has a dedicated class containing locators and methods, ensuring test logic remains separate from UI interactions. This makes tests more readable and easier to maintain.

**Custom Fixtures**: Playwright fixtures provide dependency injection for page objects and handle authentication setup, eliminating boilerplate code in tests.

**Layered Design**: Clear separation between test layer, page layer, API layer, and utilities ensures each component has a single responsibility.

**Configuration Management**: Environment-based configuration allows the same tests to run across different environments without code changes.

---

## Test Coverage

### UI Test Suites (22 tests)

#### Login Flow (`login.spec.ts`)
- ✅ Successful authentication with valid credentials
- ❌ Error handling for locked user accounts
- ❌ Invalid credential validation
- ❌ Empty field validation (username and password)

#### Shopping Cart Flow (`shoppingCart.spec.ts`)
- ✅ Add multiple products to cart
- ✅ Remove products from cart
- ✅ Cart item count verification
- ✅ Cart page item display validation
- ✅ Continue shopping navigation

#### Checkout Flow (`checkout.spec.ts`)
- ✅ Complete end-to-end checkout process
- ✅ Order summary and pricing validation
- ✅ Order completion confirmation
- ❌ Incomplete checkout information validation
- ✅ Checkout cancellation flow

#### Product Browsing Flow (`productBrowsing.spec.ts`)
- ✅ Product catalog display
- ✅ Product sorting (A-Z, Z-A, price ascending/descending)
- ✅ Data-driven product addition tests
- ✅ Logout functionality

### API Test Suites (11 tests)

#### User Management (`userManagement.spec.ts`)
- ✅ Retrieve user list with pagination
- ✅ Get single user by ID
- ❌ 404 handling for non-existent users
- ✅ Create new user
- ✅ Update existing user
- ✅ Delete user

#### Authentication Flow (`authentication.spec.ts`)
- ✅ User registration
- ✅ Registration validation (missing data)
- ✅ User login
- ✅ Login validation (invalid credentials)
- ✅ Response time performance validation

### Test Organization

- **Smoke Tests** (`@smoke`): Critical path tests for quick validation (23 tests)
- **Regression Tests** (`@regression`): Full test suite for comprehensive validation (33 tests)
- **Data-Driven Tests**: Parameterized tests for product addition scenarios
- **Authenticated Tests**: Fixtures provide pre-authenticated state for efficiency

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/playwright-ecommerce-automation.git
   cd playwright-ecommerce-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   The framework works with default values. Customize `.env` only if you need to override defaults.

### Verification

Run a quick smoke test to verify setup:
```bash
npm run test:smoke
```

---

## Environment Variables

The framework uses environment variables for configuration flexibility:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `BASE_URL` | UI application base URL | `https://www.saucedemo.com` | No |
| `API_BASE_URL` | API base URL | `https://jsonplaceholder.typicode.com` | No |
| `STANDARD_USER` | Test user username | `standard_user` | No |
| `USER_PASSWORD` | Test user password | `secret_sauce` | No |
| `HEADLESS` | Run tests in headless mode | `true` | No |
| `WORKERS` | Number of parallel workers | `4` | No |

**Security Note**: Never commit actual credentials to version control. Use environment variables or secrets management for sensitive data.

---

## Running Tests

### Full Test Suite
```bash
npm test
```
Executes all tests (UI + API) across all configured browsers with type checking.

### UI Tests Only
```bash
npm run test:ui
```
Runs all tests in the `tests/ui/` directory.

### API Tests Only
```bash
npm run test:api
```
Runs all tests in the `tests/api/` directory.

### Smoke Tests
```bash
npm run test:smoke
```
Executes tests tagged with `@smoke` for quick validation.

### Regression Tests
```bash
npm run test:regression
```
Executes tests tagged with `@regression` for comprehensive coverage.

### Headed Mode (Visible Browser)
```bash
npm run test:headed
```
Runs tests with browser UI visible for debugging or demonstration.

### Debug Mode
```bash
npm run test:debug
```
Opens Playwright Inspector for step-by-step test execution.

### Specific Test File
```bash
npx playwright test tests/ui/login.spec.ts
```

### Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View Test Report
```bash
npm run report
```
Opens the interactive HTML report in your browser.

---

## Code Quality

### Type Checking
```bash
npm run type-check
```
Validates TypeScript types without emitting files.

### Linting
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### Code Formatting
```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

---

## Reporting and Artifacts

### Report Formats

The framework generates multiple report formats for different use cases:

- **HTML Report** (`reports/html-report/`): Interactive visual report with test details, traces, and screenshots
- **JSON Report** (`reports/test-results.json`): Machine-readable format for custom processing
- **JUnit Report** (`reports/junit.xml`): Standard format for CI/CD integration

### Artifacts on Failure

When tests fail, Playwright automatically captures:

- **Screenshots**: Visual state at the point of failure
- **Videos**: Full test execution recording
- **Traces**: Complete execution trace with network activity, console logs, and DOM snapshots

Access artifacts via the HTML report or directly in the `test-results/` directory.

### Viewing Reports

```bash
npm run report
```

This opens the HTML report in your default browser, providing:
- Test execution summary
- Pass/fail status for each test
- Execution time and performance metrics
- Screenshots and videos for failed tests
- Trace viewer for detailed debugging

---

## CI/CD Pipeline

### GitHub Actions Workflow

The framework includes a production-ready CI/CD pipeline (`.github/workflows/playwright.yml`) that automatically:

1. **Triggers on**:
   - Push to `main`, `master`, or `develop` branches
   - Pull requests to these branches
   - Manual workflow dispatch

2. **Execution Strategy**:
   - Parallel execution across 3 browsers (Chromium, Firefox, WebKit)
   - Fail-fast disabled to collect complete results
   - 60-minute timeout per job

3. **Pipeline Steps**:
   - ✅ Checkout code
   - ✅ Setup Node.js 20
   - ✅ Install dependencies
   - ✅ Install Playwright browsers
   - ✅ Run TypeScript type checking
   - ✅ Run ESLint code quality checks
   - ✅ Execute all tests for the browser
   - ✅ Upload test reports as artifacts (30-day retention)
   - ✅ Upload test results as artifacts (30-day retention)

4. **Environment Configuration**:
   - Uses GitHub Secrets for sensitive data
   - Falls back to default values for non-sensitive config
   - Supports multi-environment testing

### Viewing CI Results

1. Navigate to the **Actions** tab in your GitHub repository
2. Select the workflow run
3. View test results and download artifacts
4. Check individual browser job results

### CI Best Practices Implemented

- **Type Safety**: TypeScript compilation checked before tests
- **Code Quality**: Linting enforced in pipeline
- **Parallel Execution**: Faster feedback with browser matrix
- **Artifact Retention**: Test reports preserved for analysis
- **Retry Logic**: Automatic retries in CI for flaky test resilience

---

## What This Framework Demonstrates

### Technical Expertise

✅ **Senior-Level Architecture**: Clean separation of concerns with Page Object Model, fixtures, and utilities  
✅ **TypeScript Proficiency**: Strict type checking, interfaces, and modern ES6+ features  
✅ **Playwright Mastery**: Advanced features including fixtures, API testing, and trace capture  
✅ **API Testing**: RESTful API validation with proper abstraction and error handling  
✅ **CI/CD Integration**: Production-ready GitHub Actions pipeline with matrix testing  

### Quality Engineering Skills

✅ **Test Strategy**: Comprehensive coverage with smoke/regression organization  
✅ **Maintainability**: Reusable components, centralized configuration, and clear structure  
✅ **Scalability**: Framework designed to grow with project needs  
✅ **Best Practices**: DRY principles, SOLID design, and industry standards  
✅ **Documentation**: Clear README, architecture docs, and troubleshooting guides  

### Professional Practices

✅ **Code Quality**: ESLint, Prettier, and TypeScript strict mode  
✅ **Version Control**: Clean Git history with meaningful commits  
✅ **Environment Management**: Secure configuration with environment variables  
✅ **Error Handling**: Proper exception handling and meaningful error messages  
✅ **Reporting**: Multiple report formats for different stakeholders  

### Business Value

This framework demonstrates the ability to:
- Deliver production-ready automation solutions
- Reduce manual testing effort through comprehensive automation
- Catch bugs early with CI/CD integration
- Maintain test suites that scale with application growth
- Provide clear test results for stakeholders

---

## Troubleshooting

### Common Issues

#### Tests Failing Locally

**Issue**: Tests fail with timeout errors  
**Solution**: 
```bash
# Increase timeout in playwright.config.ts or run with more time
npx playwright test --timeout=60000
```

**Issue**: Browser not found  
**Solution**:
```bash
npx playwright install --force
```

#### Environment Issues

**Issue**: Environment variables not loading  
**Solution**: Ensure `.env` file exists in project root and contains valid values

**Issue**: TypeScript errors  
**Solution**:
```bash
npm run type-check
# Fix reported errors, then run tests again
```

#### CI/CD Issues

**Issue**: GitHub Actions failing  
**Solution**: Check that all required secrets are configured in repository settings

**Issue**: Artifacts not uploading  
**Solution**: Ensure tests are generating reports in the correct directories

### Getting Help

- Review the [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) guide for detailed solutions
- Check the [ARCHITECTURE.md](docs/ARCHITECTURE.md) for framework design details
- Examine test traces using `npx playwright show-trace <trace-file>`

---

## Future Enhancements

Potential improvements to further strengthen the framework:

- **Visual Regression Testing**: Add screenshot comparison for UI consistency
- **Performance Testing**: Integrate Lighthouse or custom performance metrics
- **Accessibility Testing**: Add axe-core integration for WCAG compliance
- **Database Validation**: Add database query utilities for data verification
- **Mock API Server**: Integrate MSW for API mocking in isolated tests
- **Allure Reporting**: Add Allure for enhanced test reporting
- **Docker Support**: Containerize the framework for consistent execution
- **Parallel Test Data**: Implement test data isolation for parallel execution

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## About This Project

This framework was built to demonstrate professional-grade test automation capabilities for freelance and consulting opportunities. It showcases real-world engineering practices, clean architecture, and the ability to deliver maintainable automation solutions.

**Target Applications**:
- Sauce Demo (https://www.saucedemo.com) - Stable e-commerce demo for UI testing
- JSONPlaceholder (https://jsonplaceholder.typicode.com) - Reliable public API for API testing

Both are maintained testing platforms designed for automation practice and demonstration.

---

**Built with precision. Designed for scale. Ready for production.**
