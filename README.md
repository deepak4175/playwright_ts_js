# Playwright Automation Framework for Web Application (UI & API)

This repository contains an automated test framework using [Playwright](https://playwright.dev/) with TypeScript. It is designed for testing both the UI and API layers of a web application that supports multiple service layers and uses a single authentication token for all API calls within a service.

## Features

- **UI and API Testing:** Easily test both frontend and backend endpoints.
- **Multi-Service Layer Support:** Easily extendable for different service endpoints.
- **Single Auth Token Handling:** Authentication token is globally managed and reused for all API requests.
- **Parallel Test Execution:** Optimized for fast execution.
- **TypeScript Support:** Write your tests with the safety and power of TypeScript.
- **Reporting:** Supports HTML and Allure reports.
- **Schema Validation:** API responses validated using Zod schemas.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/deepak4175/playwright_ts_js.git
cd playwright_ts_js
npm install
```

### Project Structure

```
playwright_ts_js/
├── config/                  # API endpoints, base URLs
├── schema/                  # Zod schemas for API validation
├── tests/                   # All test cases (UI and API)
│   └── api/
│       └── cp/
│           └── baseTest.ts  # Shared fixtures for API tests
├── util/                    # Helpers (e.g., apiHelper, validation)
├── playwright.config.ts     # Playwright configuration
└── package.json             # Project dependencies
```

### Running Tests

- **All tests:**
  ```bash
  npx playwright test
  ```

- **Specific file:**
  ```bash
  npx playwright test tests/api/cp/Manifest/DeliveryAddress.api.spec.ts
  ```

- **Generate HTML report:**
  ```bash
  npx playwright show-report
  ```

### Authentication

A single authentication token is required for API tests. The global setup script fetches and sets this token as an environment variable. Ensure your environment or CI pipeline provides the correct credentials or token fetching logic in `globalsetup.ts`.

### Configuration

- Edit `playwright.config.ts` for test settings, base URLs, and reporters.
- API endpoints and base URLs can be set in `config/`.

### Extending/Customizing

- Add new test specs inside the `tests/` folder.
- Use existing helpers in `util/` or create new ones as needed.
- Update Zod schemas in `schema/` to match API response changes.

## Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/deepak4175/playwright_ts_js/issues).

## License

This project is licensed under the ISC License.

---

> For more details, browse the source code or raise an issue for specific questions.
