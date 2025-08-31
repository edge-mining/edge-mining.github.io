# Contribution

## Get Involved

Join our growing community of developers and energy enthusiasts. Together, we're building the future of energy optimization.

## How to Contribute

There are many ways to contribute to Edge Mining:

### 🐛 Report Bugs

If you find a bug, please:

1. Search existing [issues](https://github.com/edge-mining/docs/issues) to see if it's already been reported
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce the bug
   - System information (OS, version, etc.)
   - Screenshots if applicable

### 💡 Suggest New Features

To suggest new features:

1. Create an issue with the `enhancement` tag
2. Describe the feature and its value to users
3. Include mockups or examples if possible

### 📝 Improve Documentation

Documentation is crucial! You can contribute by:

- Fixing grammatical errors
- Adding examples
- Improving clarity
- Translating to other languages

### 🔧 Contribute Code

#### Prerequisites

- Node.js 18+
- Git
- Knowledge of JavaScript/TypeScript
- Familiarity with Domain-Driven Design principles

#### Development Environment Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/edge-mining.git
cd edge-mining

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Run tests
npm test
```

#### Contribution Process

1. **Fork** the repository on GitHub
2. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** on GitHub

#### Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for build/configuration changes

### 🧪 Testing

Help us test:

- Try new features
- Verify bug fixes
- Test on different operating systems
- Report performance issues

## Code Guidelines

### Code Style

- Follow the project's ESLint conventions
- Write readable, well-commented code
- Add tests for new features
- Maintain high test coverage

### Architecture

- Keep code modular
- Follow SOLID principles
- Avoid code duplication
- Document public APIs

### Domain-Driven Design

Since Edge Mining follows Domain-Driven Design principles:

- **Entities**: Implement as classes with identity and lifecycle
- **Value Objects**: Immutable objects representing concepts
- **Aggregates**: Clusters of entities with consistency boundaries
- **Repositories**: Abstract data access for aggregates
- **Services**: Domain logic that doesn't belong to entities

## Review Process

1. **Automatic checks**: All PRs must pass automatic tests
2. **Code review**: At least one maintainer must approve
3. **Testing**: Changes must be tested
4. **Documentation**: Update documentation if necessary

## Community

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general discussions
- **Discord**: [Join our community](https://discord.gg/edgemining)
- **Main Website**: [edgemining.energy](https://edgemining.energy)

### Events

- **Hacktoberfest**: Participate every October
- **Community calls**: Monthly community calls
- **Development sprints**: Intensive development sessions

## Acknowledgments

All contributors are listed in the [CONTRIBUTORS.md](https://github.com/edge-mining/docs/blob/main/CONTRIBUTORS.md) file.

## License

By contributing to Edge Mining, you agree that your contributions will be released under the MIT license of the project.

## Questions?

If you have questions about contributing, don't hesitate to:

- Open an issue on GitHub
- Ask on GitHub Discussions
- Contact the maintainers on Discord

Thank you for your contribution! 🚀 