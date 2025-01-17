# Load environment variables from .env file if it exists
ifneq (,$(wildcard .env))
include .env
export
endif

.PHONY: install start build test lint format type-check clean help

# Default target
.DEFAULT_GOAL := help

# =================================================================
# DEVELOPMENT COMMANDS
# =================================================================
install: ## Install project dependencies
	npm install

start: ## Start development server
	npm start

build: ## Build for production
	npm run build

# =================================================================
# TESTING AND QUALITY
# =================================================================
test: ## Run tests
	npm test

test-coverage: ## Run tests with coverage
	npm test -- --coverage --watchAll=false

lint: ## Run ESLint
	npm run lint

lint-fix: ## Fix ESLint errors
	npm run lint:fix

format: ## Format code with Prettier
	npm run format

type-check: ## Run TypeScript type checking
	npm run type-check

# =================================================================
# CLEANUP
# =================================================================
clean: ## Clean build artifacts
	rm -rf build
	rm -rf node_modules
	rm -rf coverage

# =================================================================
# CI/CD
# =================================================================
ci: install lint type-check test-coverage ## Run all checks (CI)

# =================================================================
# HELP
# =================================================================
help: ## Show this help message
	@echo 'Usage:'
	@echo '  make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) 