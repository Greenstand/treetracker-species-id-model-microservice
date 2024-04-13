# ChatGPT generated tips

Based on the README you've provided, it sounds like this microservice is structured with a variety of development, testing, and deployment tools integrated. Here’s a breakdown of key points from the README and suggestions on how you might proceed with modifications or contributions.
## Development Toolkit

- db-migrate: This tool is used for database migrations, allowing you to create and modify database tables and objects. Understanding and using db-migrate will be crucial for any database-related changes.
- Conventional Commits: The project follows Conventional Commits standards for commit messages. Familiarize yourself with this format, as it's enforced by husky.
- husky: This tool ensures commit messages follow the required format. Make sure your commits comply to avoid issues.
- prettier / lint: Code formatting and linting tools to maintain code quality and consistency. Ensure you run these before committing.
- GitHub Actions: Used for CI/CD pipelines. Check the .github/workflows directory (if not mentioned, it's a common convention) to understand the CI/CD process.
- Mocha: The testing framework used for writing unit and integration tests. Familiarize yourself with Mocha to write or modify tests.

## Getting Started
### Project Setup

Follow the steps for cloning the repository and installing dependencies. The initial setup is straightforward and essential for starting any work.
### Generate Initial Code

Running the generate-resource.sh script generates initial endpoints. If you’re adding new features, this might be a useful starting point.
### Environment and Database Setup

Setting up the development environment involves getting tokens, installing the doctl command-line tool, setting up database passwords, and configuring environment variables as per the .env.*.example files. For database migrations, db-migrate is used, and the instructions are provided for running migrations.
### Architecture

The microservice follows a layered architecture similar to MVC, with Handlers (for API endpoint handling and validation), Services (orchestration and business logic), Models (domain logic), and Repositories (database access). Understanding this structure will help you navigate the codebase and determine where to make changes or additions.
### Testing

- Unit Tests: Run with npm run test-unit. Writing unit tests for any new code or when modifying existing logic is good practice.
- Integration Tests: Located in the __tests__ folder and can be run with npm run test-integration. Integration tests are crucial for ensuring that components work together correctly.
- Database Seeding Tests: Useful for testing the database seeding/clearing functions, run with npm run test-seedDB.
- Continuous Testing: npm run test-watch allows for continuous testing during development, re-running tests on code changes.

### Suggestions for Modification

1. Familiarize Yourself: With the tools and structure as outlined in the README. Understanding these will be crucial for effective modifications.
2. Identify Where to Make Changes: Based on the feature or fix you’re working on, identify the relevant parts of the architecture (Handlers, Services, Models, Repositories).
3. Follow the Development Guidelines: Make sure to follow the guidelines for commits, testing, and code style as outlined.
4. Write Tests: Update existing tests or write new ones for your changes. This ensures your code works as expected and integrates well with the existing codebase. 
5. Use the Development Tools: Utilize the scripts and tools provided (like the resource generator and testing commands) to streamline your development process. 
6. Seek Help if Needed: If you’re unsure about how to proceed with specific modifications or encounter issues, consider reaching out to the engineering leads or utilizing community resources like GitHub issues or discussions for assistance.

By following the structure and guidelines provided in the README, you should be well-equipped to make modifications to the microservice.



### Server Directory
- handlers: This directory usually contains controller-like logic that handles the incoming requests and dispatches responses. Handlers often parse request parameters, validate them, and then pass them to services. 
- infra: Short for "infrastructure", this directory typically includes code that directly deals with technical details that support the application but aren't part of the core business logic, such as database connections, configuration management, messaging systems, etc. 
- models: This folder generally holds the application’s data models. These might define the schema for database tables/collections, include validation, or encapsulate database access methods. 
- repositories: Repositories abstract the logic needed to access the data sources. They sit between the models and the service layer, providing a more abstracted way to manipulate the data without dealing with database queries directly. 
- routes: This directory defines the endpoints of your web server or API. It maps the routes to their respective handlers. 
- services: Services contain the core business logic of the application. They orchestrate the application's response to input received from the controllers/handlers, manage the interaction with the database via repositories, and perform the necessary business logic. 
- utils: Utilities or helpers that provide generic functionality across the application, such as data formatting functions, validation utilities, or any other small utilities needed by various modules.

### Other Top-Level Directories
- deployment: Contains files and scripts related to deploying the application, such as Dockerfiles, Kubernetes configurations, or other CI/CD scripts. 
- scripts: This directory usually includes various scripts for development tasks, such as database migrations, build processes, or local development tools. 
- docs: Documentation about the project, such as API documentation, getting started guides, and development practices. 
- node_modules: Contains all Node.js dependencies as installed by NPM or Yarn. This directory is automatically managed by the package manager and generally not included in the version control. 
- .husky: Contains configurations for Husky, a tool used for managing Git hooks. It ensures scripts like linters, formatters, or tests are run before committing or pushing code. 
- tests: Houses test files and related testing infrastructure, like mock data or configurations necessary for running tests. 
- config: Typically includes application configuration files, potentially split by environment (development, production, etc.).

### JavaScript Files, Markdown Files, and JSONs
JavaScript files at the root might be entry points (like app.js or server.js), or configuration files (like webpack.config.js).
    Markdown files (.md) are usually documentation files, like README.md, which provides the project overview, setup instructions, and other essential information.
    JSON files could include package.json (managing project metadata and dependencies), package-lock.json or yarn.lock (lock files for dependencies), and possibly other configuration files in JSON format.

This structure is beneficial for keeping the project organized, making it easier to manage and understand, especially for new developers joining the project. Each part of the application has its own space, reducing the coupling between components and aligning with good software design principles.