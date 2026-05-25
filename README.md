# E-Commerce Automation Framework

[![Playwright Tests](https://github.com/yourusername/playwright-ecommerce-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/yourusername/playwright-ecommerce-automation/actions/workflows/playwright.yml)

A production-grade, enterprise-level test automation framework built with Playwright and TypeScript, demonstrating professional QA engineering practices for UI and API testing.

## 🎯 Project Overview

This framework showcases a complete end-to-end testing solution for e-commerce applications, featuring:

- **UI Testing**: Full user journey automation from login to checkout
- **API Testing**: Comprehensive backend validation and integration testing
- **Hybrid Approach**: Combined UI + API testing for maximum coverage
- **CI/CD Integration**: Automated testing pipeline with GitHub Actions
- **Professional Architecture**: Scalable, maintainable, and production-ready code

### Why This Project?

This portfolio project demonstrates real-world automation engineering skills that companies value:

✅ **Production-Ready Code**: Clean, maintainable, and follows industry best practices  
✅ **Scalable Architecture**: Page Object Model with reusable fixtures and utilities  
✅ **Complete Test Coverage**: UI flows, API validation, positive/negative scenarios  
✅ **Professional Tooling**: TypeScript, ESLint, Prettier, comprehensive reporting  
✅ **CI/CD Pipeline**: Automated testing across multiple browsers  
✅ **Real Business Flows**: Login, cart management, checkout, order completion  

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Language** | TypeScript |
| **Test Framework** | Playwright Test |
| **Architecture** | Page Object Model (POM) |
| **API Testing** | Playwright API Testing |
| **Code Quality** | ESLint, Prettier |
| **CI/CD** | GitHub Actions |
| **Reporting** | HTML, JSON, JUnit |
| **Environment Management** | dotenv |

## 📁 Project Structure

```
playwright-ecommerce-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline configuration
├── api/
│   └── apiClient.ts                # API client for backend testing
├── config/
│   └── environment.ts              # Environment configuration
├── data/
│   ├── testData.ts                 # UI test data
│   └── apiData.ts                  # API test data
├── fixtures/
│   └── baseFixtures.ts             # Custom fixtures and authenticated state
├── pages/
│   ├── basePage.ts                 # Base page with common methods
│   ├── loginPage.ts                # Login page object
│   ├── productsPage.ts             # Products/inventory page object
│   ├── cartPage.ts                 # Shopping cart page object
│   ├── checkoutPage.ts             # Checkout information page object
│   ├── checkoutOverviewPage.ts     # Checkout overview page object
│   └── checkoutCompletePage.ts     # Order completion page object
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts           # Login flow tests
│   │   ├── shoppingCart.spec.ts    # Cart management tests
│   │   ├── checkout.spec.ts        # Complete checkout flow
│   │   └── productBrowsing.spec.ts # Product browsing and sorting
│   └── api/
│       ├── userManagement.spec.ts  # User CRUD operations
│       └── authentication.spec.ts  # API auth flow tests
├── utils/
│   ├── dataGenerator.ts            # Dynamic test data generation
│   └── logger.ts                   # Logging utility
├── reports/                        # Test reports (generated)
├── test-results/                   # Test artifacts (generated)
├── .env.example                    # Environment variables template
├── .eslintrc.js                    # ESLint configuration
├── .gitignore                      # Git ignore rules
├── .prettierrc                     # Prettier configuration
├── package.json                    # Dependencies and scripts
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

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

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file if you need to customize any values (optional for this project).

### Environment Variables

The framework uses the following environment variables (all have defaults):

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | UI application base URL | `https://www.saucedemo.com` |
| `API_BASE_URL` | API base URL | `https://jsonplaceholder.typicode.com` |
| `STANDARD_USER` | Test user username | `standard_user` |
| `USER_PASSWORD` | Test user password | `secret_sauce` |
| `HEADLESS` | Run tests in headless mode | `true` |
| `WORKERS` | Number of parallel workers | `4` |

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run UI Tests Only
```bash
npm run test:ui
```

### Run API Tests Only
```bash
npm run test:api
```

### Run Smoke Tests
```bash
npm run test:smoke
```

### Run Regression Tests
```bash
npm run test:regression
```

### Run Tests in Headed Mode
```bash
npm run test:headed
```

### Debug Tests
```bash
npm run test:debug
```

### View Test Report
```bash
npm run report
```

## 🔍 Test Suites

### UI Test Suites

#### 1. Login Flow (`login.spec.ts`)
- ✅ Successful login with valid credentials
- ❌ Error handling for locked out user
- ❌ Error handling for invalid credentials
- ❌ Validation for empty username
- ❌ Validation for empty password

#### 2. Shopping Cart Flow (`shoppingCart.spec.ts`)
- ✅ Add multiple products to cart
- ✅ Remove products from cart
- ✅ Verify cart item count
- ✅ Display correct items in cart page
- ✅ Continue shopping from cart

#### 3. Complete Checkout Flow (`checkout.spec.ts`)
- ✅ End-to-end checkout process
- ✅ Verify order summary and pricing
- ✅ Order completion confirmation
- ❌ Validation for incomplete checkout information
- ✅ Cancel checkout and return to cart

#### 4. Product Browsing Flow (`productBrowsing.spec.ts`)
- ✅ Display all products
- ✅ Sort products (A-Z, Z-A, price low-high, high-low)
- ✅ Data-driven tests for adding products
- ✅ Logout functionality

### API Test Suites

#### 1. User Management (`userManagement.spec.ts`)
- ✅ Get list of users with pagination
- ✅ Get single user by ID
- ❌ Handle non-existent user (404)
- ✅ Create new user
- ✅ Update existing user
- ✅ Delete user

#### 2. Authentication Flow (`authentication.spec.ts`)
- ✅ Successful user registration
- ❌ Failed registration with missing data
- ✅ Successful login
- ❌ Failed login with invalid credentials
- ✅ Response time validation

## 🏗️ Framework Architecture

### Page Object Model (POM)

The framework implements a clean Page Object Model pattern:

- **BasePage**: Contains common methods used across all pages
- **Page Objects**: Each page has its own class with locators and methods
- **Separation of Concerns**: Test logic separated from page interactions
- **Reusability**: Page methods can be reused across multiple tests

### Custom Fixtures

Two types of fixtures are provided:

1. **Standard Fixtures**: Page objects and API client injection
2. **Authenticated Fixtures**: Pre-authenticated state for tests requiring login

### Test Data Management

- **Static Data**: Stored in `data/` directory
- **Dynamic Data**: Generated using `DataGenerator` utility
- **Environment-Based**: Configuration through environment variables

### Utilities

- **Logger**: Structured logging for better debugging
- **DataGenerator**: Creates unique test data (emails, usernames, etc.)

## 📊 Reporting

The framework generates multiple report formats:

- **HTML Report**: Interactive visual report (`reports/html-report/`)
- **JSON Report**: Machine-readable results (`reports/test-results.json`)
- **JUnit Report**: CI/CD integration format (`reports/junit.xml`)

View the HTML report:
```bash
npm run report
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. ✅ Checks out code
2. ✅ Sets up Node.js environment
3. ✅ Installs dependencies
4. ✅ Installs Playwright browsers
5. ✅ Runs type checking
6. ✅ Runs linting
7. ✅ Executes tests across multiple browsers (Chromium, Firefox, WebKit)
8. ✅ Uploads test reports and artifacts

### Triggering CI/CD

- **Automatic**: On push to `main`, `master`, or `develop` branches
- **Automatic**: On pull requests to these branches
- **Manual**: Via GitHub Actions UI (workflow_dispatch)

## 🎨 Code Quality

### Linting
```bash
npm run lint
npm run lint:fix
```

### Formatting
```bash
npm run format
npm run format:check
```

### Type Checking
```bash
npm run type-check
```

## 🎓 Skills Demonstrated

This project showcases professional automation engineering skills:

### Technical Skills
- ✅ TypeScript programming
- ✅ Playwright Test framework
- ✅ Page Object Model architecture
- ✅ API testing and validation
- ✅ Fixture-based test design
- ✅ Async/await patterns
- ✅ Promise handling
- ✅ Test data management

### QA Engineering Skills
- ✅ Test strategy and planning
- ✅ Positive and negative testing
- ✅ Data-driven testing
- ✅ End-to-end flow validation
- ✅ API contract testing
- ✅ Cross-browser testing
- ✅ Test reporting and analysis

### Software Engineering Skills
- ✅ Clean code principles
- ✅ SOLID principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ Code organization and structure
- ✅ Version control (Git)
- ✅ CI/CD pipeline setup
- ✅ Documentation

### DevOps Skills
- ✅ GitHub Actions
- ✅ Environment management
- ✅ Secrets handling
- ✅ Artifact management
- ✅ Multi-browser testing

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- **Sauce Demo**: Stable demo application for testing
- **JSONPlaceholder**: Free, reliable public API for testing
- **Playwright Team**: Excellent testing framework
- **Open Source Community**: Inspiration and best practices

---

**Note**: This is a portfolio project demonstrating professional automation engineering skills. The target applications (Sauce Demo and JSONPlaceholder) are public testing platforms designed for automation practice.
