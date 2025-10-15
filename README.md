<p align="center">
  <img src="https://beemood.github.io/favicon.png" alt="Logo" />
</p>

# @puq/source

This repository hosts a collection of reusable libraries, foundational modules, and domain-specific database clients designed to support a robust, scalable, and highly standardized application ecosystem. By consolidating shared functionality and architectural concerns into distinct, version-controlled packages, we ensure consistency, maintainability, and rapid feature development across all services.

## Architecture & Philosophy 

This monorepo follows a layered, domain-driven design, centralizing boilerplate and infrastructure to let application developers focus purely on business logic. Key principles include:

1. Strict Type Safety: Enforced through TypeScript and validated via Zod schemas, ensuring runtime and compile-time data integrity.

2. Code Consistency: Managed by core packages for utility functions (names, types), decorators (nest), and standardized error handling (errors).

3. Database Isolation: Each major domain (e.g., inventory, auth, hr) has its own dedicated, pre-configured Prisma client module and schema package, minimizing blast radius and facilitating microservice-style development.


## Core Foundation 

These packages provide fundamental, environment-agnostic utilities essential to the entire codebase.
Package	Purpose

- `crypto`:	Comprehensive encryption, hashing, and secure token generation functions.
- `fs`:	Standardized wrappers for file system operations (read, write, delete).
- `names`:	Utilities for text manipulation and case conversion (PascalCase, CONSTANT_CASE, Title Case, etc.).
- `errors`:	A unified set of application-wide, consistent error classes and handlers.
- `types`:	All common TypeScript utility types, interfaces, and shared type definitions.
- `zod`:	Standardized Zod schemas for common structures like Pagination, IntegerFilterSchema, and other API parameters.
- `barcode`:	A dedicated library for generating various barcode formats.


## Backend & Data Infrastructure

These packages standardize our backend development on NestJS and Prisma, providing ready-to-use, powerful data access layers.


- `nest`:	A collection of combined decorators for NestJS, integrating features like Swagger documentation and common metadata in one place.
- `prisma`:	The core NestJS module that provides a functional, application-ready Prisma Client service.
- `prisma-schema`:	A powerful Zod schema generator that creates validation schemas perfectly aligned with our Prisma models, ensuring API inputs match database requirements.

## Domain-Specific Database Clients

Each of the following libraries provides a fully bundled and compatible set of the Prisma Client and its corresponding Zod schemas for a specific business domain. To access data, import the client from the relevant domain package—never directly from a base Prisma package.

- `inventory-db`: 	Management of inventory records, stock levels, and warehouse locations.
- `app-db`: 	Tracks application installations, operational status, and system configuration.
- `asset-db`: 	Manages company assets, equipment tracking, and equipment room assignments.
- `auth-db`: 	Handles user authentication, authorization, roles, and user data.
- `contact-db`: 	Central repository for all contact and organizational information.
- `hr-db`: 	Manages employee data, working hours, hiring, paychecks, and tax-related information.
- `pm-db`: 	Core system for managing projects, tasks, and team assignments.



[Contact us](mailto:robert.brightline+GitHub@gmail.com?subject=GitHubRepository)

## Funding

Thank you for using the library. It's an open-source project, and maintaining it takes time and effort. If you find this library useful, please consider supporting its ongoing development. Your contributions help ensure that the project stays up-to-date, secure, and well-maintained.

[Fund us](https://cash.app/$puqlib)

## Your funding will go toward

- **Bug fixes and updates** to ensure compatibility with the latest versions of dependencies.

- **New features** that will make the library even more powerful.

- **Documentation** improvements to help users get the most out of the library.

- **General maintenance** to keep the library running smoothly and securely.

[Support us](https://cash.app/$puqlib)
