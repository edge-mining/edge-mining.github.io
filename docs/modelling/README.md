# Architecture Documentation

This section contains the architectural documentation for the Edge Mining platform, focusing on Domain-Driven Design principles and system architecture.

## Overview

Edge Mining follows a **Domain-Driven Design (DDD)** approach to create a clean, maintainable, and scalable architecture. The system is organized into distinct domains and subdomains, each with clear boundaries and responsibilities.

## Documentation Structure

### [Domain-Driven Architecture Overview](./domain-driven-architecture-overview.md)

A comprehensive overview of the Edge Mining architecture, including:

- **Core Domains**: Mining, Network, Wallet, and User domains
- **Subdomains**: Specific areas within each domain
- **Bounded Contexts**: Clear boundaries between domains
- **Architectural Patterns**: Clean Architecture, CQRS, Event Sourcing
- **Technology Stack**: Backend, frontend, and infrastructure choices
- **Implementation Guidelines**: Code organization and testing strategies

### [Glossary](./glossary.md)

A comprehensive glossary of terms and concepts used throughout the Edge Mining documentation and codebase, including:

- **Domain-Driven Design terms**: Aggregate, Entity, Value Object, etc.
- **Cryptocurrency terms**: Block, Hash, Mining Pool, etc.
- **Technical terms**: API, Repository, Service, etc.

## Key Architectural Principles

1. **Domain-Driven Design**: Organize code around business domains
2. **Clean Architecture**: Separate concerns into layers
3. **CQRS**: Separate read and write operations
4. **Event Sourcing**: Store all changes as events
5. **Microservices**: Decompose into small, focused services

## Getting Started with Architecture

1. **Read the Overview**: Start with the [Domain-Driven Architecture Overview](./domain-driven-architecture-overview.md)
2. **Understand the Glossary**: Familiarize yourself with the [Glossary](./glossary.md)
3. **Explore the Code**: Look at the actual implementation in the main repository
4. **Join Discussions**: Participate in architectural discussions on GitHub

## Contributing to Architecture

When contributing to the architecture:

1. **Follow DDD Principles**: Organize code around business domains
2. **Maintain Boundaries**: Keep bounded contexts separate
3. **Document Changes**: Update this documentation when making architectural changes
4. **Get Review**: Have architectural changes reviewed by the team

## Related Resources

- [Main Project Repository](https://github.com/bitsalv/edgemining.energy)
- [Domain-Driven Design Resources](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) 