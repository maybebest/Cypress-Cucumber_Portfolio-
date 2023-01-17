# System requirements
## Operating System
* macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (x86_64 or Arm 64-bit (x64 or arm64))
* Windows 7 and above (64-bit only)
## Node
* Node.js 12 or 14 and above
## Install packages
* `npm install`
## About project
* cypress version: 10 or above 
* for gherkin syntax used: `cypress-cucumber-preprocessor` 
  https://www.npmjs.com/package/cypress-cucumber-preprocessor
* reporter: `cypress-allure-plugin` with `allure-commandline` for CLI commands
  https://www.npmjs.com/package/@shelex/cypress-allure-plugin
  https://www.npmjs.com/package/allure-commandline
## Supported environments
### QA 
* config for QA env: `qa.config.js`
* open cypress (with UI): `npm run cy:open:qa`
* run all tests (without UI): `cy:run:qa:all`
* run all tests with allure reporter (without UI): `cy:run:qa:all:allure`
* run tests tagged by @smoke (without UI): `cy:run:qa:smoke`
* run tests tagged by @smoke with allure reporter (without UI): `cy:run:qa:smoke:allure`