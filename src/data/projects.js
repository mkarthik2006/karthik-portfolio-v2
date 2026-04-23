export const projects = [
  {
    id: "vaultcore-financial",
    featured: true,
    priority: 1,
    domain: "FinTech",
    title: "VaultCore Financial - Secure Digital Banking and Trading Core",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    tagline:
      "Enterprise-style FinTech platform with OAuth2/OIDC security, ACID transaction handling, immutable-ledger foundation, and containerized cloud-native deployment.",
    problemStatement:
      "Build a secure financial platform that supports digital banking and portfolio workflows while enforcing strict authentication, transaction integrity, and operational reliability.",
    solution:
      "Implemented a gateway-first platform using Spring Boot, Keycloak, PostgreSQL, and Redis with token-protected APIs and migration-driven schema governance.",
    architectureSummary:
      "Nginx gateway fronts frontend, backend, and Keycloak identity endpoints. Spring Boot backend handles secured financial APIs with JWT validation, Flyway-managed schema evolution, and PostgreSQL/Redis-backed runtime services.",
    architectureImage: "/diagrams/vaultcore-financial-architecture.svg",
    proofLinks: [
      { label: "GitHub", url: "https://github.com/mkarthik2006/vaultcore-financial" },
      { label: "Docker Compose Setup", url: "https://github.com/mkarthik2006/vaultcore-financial/blob/main/docker-compose.yml" },
      { label: "Swagger API Docs", url: "https://github.com/mkarthik2006/vaultcore-financial#readme" },
      { label: "Postman Collection", url: "https://github.com/mkarthik2006/vaultcore-financial#readme" },
      { label: "Architecture Diagram", url: "/diagrams/vaultcore-financial-architecture.svg" }
    ],
    engineeringDecisions: [
      "Kept identity externalized through Keycloak to decouple auth from core financial domain logic",
      "Used Flyway for repeatable schema evolution and safer release rollouts",
      "Added virtual threads and health checks to improve runtime responsiveness and operational reliability"
    ],
    challengesSolved: [
      "Reduced startup fragility in a multi-container environment with stricter readiness checks",
      "Validated strict unauthorized behavior on protected routes to enforce security boundaries",
      "Aligned data model and API flow to support ledger-style, audit-friendly financial transactions"
    ],
    techStack: {
      backend: ["Java 21", "Spring Boot 3.x", "Spring Security 6", "Spring Data JPA", "Hibernate 6", "Flyway"],
      frontend: ["React (Vite)", "Keycloak JS integration"],
      security: ["OAuth2/OIDC", "Keycloak 24", "JWT Resource Server"],
      datastore: ["PostgreSQL 15", "Redis 7"],
      infrastructure: ["Nginx Gateway", "Docker Compose", "Containerized local deployment"],
      runtimeAndOps: ["Java Virtual Threads (Project Loom)", "Health checks", "Environment-driven configuration"]
    },
    corePatterns: [
      "Gateway-mediated routing and service exposure",
      "Externalized identity with Keycloak and token-based endpoint protection",
      "ACID-oriented transaction flow design",
      "Immutable-ledger aligned financial data model foundation",
      "Flyway migration strategy for controlled schema evolution",
      "Container health and startup reliability hardening"
    ],
    impactMetrics: [
      "Simulated ~100 concurrent requests using multi-threading and virtual-thread-enabled execution (validated in local tests)",
      "Observed ~150-180ms response time for secured gateway-routed APIs in local test environment",
      "Ensured zero unauthorized access in protected API checks with consistent 401 behavior without token"
    ],
    // NOTE: Currently unused fields retained for future expansion
    productionChecklist: [
      "JWT Authentication and role-aware route protection",
      "Input validation and controlled request contracts",
      "Global exception handling with predictable API failures",
      "Idempotency-aware service operations for critical workflows",
      "Dockerized deployment with health-check-driven startup",
      "Operational logging and health endpoint monitoring"
    ],
    productionProof: [
      "Container health checks validated for gateway, identity, and backend services",
      "JWT-protected endpoints consistently reject unauthorized access with expected 401 responses",
      "Database schema lifecycle controlled through repeatable Flyway migrations",
      "Runtime readiness verified through gateway health and integration smoke checks"
    ],
    tradeOffs: [
      "Chose external identity provider integration for stronger security boundaries, trading off local setup complexity",
      "Prioritized ACID and auditability for financial workflows, accepting higher implementation effort versus simpler eventual consistency",
      "Used containerized local orchestration for reproducibility, with a slightly heavier developer bootstrapping flow"
    ],
    proofPoints: [
      "Gateway routes split traffic across frontend, API, and Keycloak paths",
      "JWT validation configured at backend protected routes",
      "Virtual threads explicitly enabled in backend configuration",
      "Compliance and security evidence documented in evaluator-facing docs"
    ],
    verifiedSignals: [
      "OAuth2/OIDC + JWT",
      "Gateway Routing",
      "Flyway Migrations",
      "Virtual Threads Enabled",
      "Docker Compose Stack",
      "Health Check Validation"
    ],
    demoFlow: [
      "Start complete stack with docker compose build and startup",
      "Verify gateway health response and running container set",
      "Call protected portfolio endpoint without token to validate security boundary",
      "Authenticate via Keycloak flow and re-test protected API access",
      "Review evidence docs for compliance and operational validation"
    ],
    githubUrl: "https://github.com/mkarthik2006/vaultcore-financial",
    liveUrl: "",
    liveDemoVerified: false,
    recruiterPitch:
      "Built a security-first FinTech core with gateway-routed services, Keycloak-based identity, and containerized operations focused on transaction integrity."
  },
  {
    id: "shopscale-fabric",
    featured: true,
    priority: 2,
    domain: "Marketplace",
    title: "ShopScale Fabric - Event-Driven Microservices Marketplace",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tagline:
      "Production-style e-commerce platform using Java 21 microservices, Kafka event flows, and resilient gateway-first architecture.",
    problemStatement:
      "Build a scalable marketplace backend that can process order workflows across distributed services without tight coupling, while preserving reliability under failures.",
    solution:
      "Delivered a distributed Java platform with Kafka event choreography, SAGA compensation, and gateway-enforced security for consistent order processing.",
    architectureSummary:
      "API Gateway routes all business APIs and validates JWT from Keycloak. Order lifecycle uses Kafka topics and SAGA-style compensation with outbox/inbox patterns for reliable eventual consistency.",
    architectureImage: "/diagrams/shopscale-fabric-architecture.svg",
    proofLinks: [
      { label: "GitHub", url: "https://github.com/mkarthik2006/shopscale-fabric-microservices" },
      { label: "Docker Compose Setup", url: "https://github.com/mkarthik2006/shopscale-fabric-microservices/blob/main/docker-compose.yml" },
      { label: "Swagger API Docs", url: "https://github.com/mkarthik2006/shopscale-fabric-microservices#readme" },
      { label: "Postman Collection", url: "https://github.com/mkarthik2006/shopscale-fabric-microservices#readme" },
      { label: "Concurrency Test Script", url: "https://github.com/mkarthik2006/shopscale-fabric-microservices#readme" },
      { label: "Architecture Diagram", url: "/diagrams/shopscale-fabric-architecture.svg" }
    ],
    engineeringDecisions: [
      "Adopted outbox/inbox patterns to make event publishing and consumption resilient to transient failures",
      "Centralized auth and routing at gateway to simplify service boundaries and policy enforcement",
      "Used Resilience4j fallbacks and Redis rate limiting to protect downstream dependencies"
    ],
    challengesSolved: [
      "Handled partial service outages through circuit breaker fallbacks with clear degraded responses",
      "Improved consistency guarantees in async workflows via compensation and idempotent consumers",
      "Contained abusive traffic with gateway rate limiting and deterministic 429 behavior"
    ],
    techStack: {
      backend: ["Java 21", "Spring Boot 3.3.x", "Spring Cloud Gateway", "Eureka", "Config Server"],
      messaging: ["Apache Kafka"],
      security: ["Keycloak 24", "Spring Security OAuth2 Resource Server", "JWT"],
      datastore: ["PostgreSQL 16", "MongoDB 7", "Redis 7"],
      resilience: ["Resilience4j (Circuit Breaker, Retry, TimeLimiter)"],
      observability: ["Micrometer Tracing", "Zipkin"],
      devops: ["Docker", "Docker Compose", "MailHog"]
    },
    corePatterns: [
      "Gateway-first API architecture",
      "SAGA compensation workflow",
      "Outbox event publishing in order-service",
      "Inbox/idempotency consumers in inventory and notification services",
      "Redis-backed rate limiting (100 requests/minute)",
      "Circuit breaker fallback for cart-price dependency"
    ],
    impactMetrics: [
      "Simulated ~120 concurrent order placement requests with stable event flow (validated in local tests)",
      "Observed ~180ms p95 gateway API latency for authenticated core commerce routes in local environment",
      "Reduced order failure cascade to near-zero in fault injection tests using circuit-breaker fallback + SAGA compensation"
    ],
    // NOTE: Currently unused fields retained for future expansion
    productionChecklist: [
      "JWT Authentication and RBAC boundary enforcement at gateway",
      "DTO-style validation and schema checks on critical request flows",
      "Centralized exception handling and fallback responses",
      "Idempotent consumer handling for event-driven operations",
      "Dockerized microservice stack with health and startup policies",
      "Tracing, logs, and monitoring hooks via Zipkin and service metrics"
    ],
    productionProof: [
      "SAGA compensation paths validated using failure injections across inventory and ordering services",
      "Outbox and inbox persistence verified for reliable event replay and idempotency",
      "Gateway rate limiting tested with deterministic 429 behavior under sustained traffic",
      "Distributed tracing confirms request flow across gateway and downstream services"
    ],
    tradeOffs: [
      "Chose eventual consistency and compensation over strict cross-service transactions for higher scalability",
      "Introduced outbox/inbox reliability patterns, increasing persistence complexity to reduce message-loss risk",
      "Centralized gateway controls for uniform policy enforcement, accepting gateway as a critical dependency"
    ],
    proofPoints: [
      "Kafka topics wired for order.placed, inventory.failure, and order.cancelled",
      "Outbox publishing and inbox idempotency persisted in service databases",
      "Gateway-level JWT validation and route protection tested with token flow",
      "Fallback and rate-limit behavior validated in runtime checks"
    ],
    verifiedSignals: [
      "Kafka Event Flow",
      "SAGA Compensation",
      "Outbox/Inbox Reliability",
      "Gateway JWT Validation",
      "Rate Limiting + 429",
      "Zipkin Tracing"
    ],
    demoFlow: [
      "Start full stack with docker compose and verify health checks",
      "Obtain token via gateway auth endpoint and execute gateway-only business APIs",
      "Place order and verify event progression through inventory and notification flow",
      "Stop price service and validate circuit breaker fallback behavior",
      "Inspect traces in Zipkin for cross-service request visibility"
    ],
    githubUrl: "https://github.com/mkarthik2006/shopscale-fabric-microservices",
    liveUrl: "",
    liveDemoVerified: false,
    recruiterPitch:
      "Implemented an event-driven Java microservices platform with Kafka, SAGA compensation, and resilience patterns for production-style order reliability."
  },
  {
    id: "bus-ticket-booking-system",
    featured: false,
    priority: 3,
    domain: "TravelTech",
    title: "Bus Ticket Booking System",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tagline:
      "Full-stack booking platform with JWT authentication, seat management, payment flow, and PDF receipt generation.",
    problemStatement:
      "Create a booking platform that handles seat discovery, reservation flow, and secure user access while keeping booking operations consistent.",
    solution:
      "Built secured booking APIs and a React interface to support seat selection, payment simulation, and PDF ticket generation in one cohesive flow.",
    architectureSummary:
      "Spring Boot backend exposes role-aware REST APIs for user auth, bus management, booking, payment, and seat operations. React frontend consumes these APIs and enforces token-based access for protected actions.",
    architectureImage: "/diagrams/bus-booking-architecture.svg",
    proofLinks: [
      { label: "GitHub", url: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3" },
      { label: "Docker Compose Setup", url: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3#readme" },
      { label: "Swagger API Docs", url: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3#readme" },
      { label: "Postman Collection", url: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3#readme" },
      { label: "JUnit Test Cases", url: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3#readme" },
      { label: "Architecture Diagram", url: "/diagrams/bus-booking-architecture.svg" }
    ],
    engineeringDecisions: [
      "Separated booking domain behavior into layered services for cleaner testing and maintainability",
      "Applied JWT on protected booking routes to enforce authenticated transactional actions",
      "Exposed binary export endpoints for ticket receipts to support practical user outcomes"
    ],
    challengesSolved: [
      "Implemented seat-state handling to avoid invalid booking attempts on unavailable seats",
      "Connected booking and payment flow while maintaining clear API contracts",
      "Documented and grouped endpoints for faster manual testing and recruiter demo walkthroughs"
    ],
    techStack: {
      backend: ["Java 11+", "Spring Boot", "Spring Data JPA", "Hibernate"],
      frontend: ["React.js"],
      security: ["JWT Authentication", "Role-based Authorization"],
      datastore: ["MySQL"],
      integration: ["REST APIs", "PDF Ticket Generation", "Seat Booking APIs"],
      tooling: ["Git", "Postman", "Maven"]
    },
    corePatterns: [
      "Layered architecture with controller-service-repository separation",
      "JWT-based secured API access",
      "Seat availability and booking-state handling",
      "Backend-driven booking and ticket generation workflow",
      "Admin APIs for bus and city management"
    ],
    impactMetrics: [
      "Validated complete booking flow in local test scenarios from authentication to PDF ticket generation",
      "Validated API groups for auth, bus, booking, payment, and seat modules in local test scenarios",
      "Simulated secured booking and payment requests using JWT bearer authorization checks"
    ],
    // NOTE: Currently unused fields retained for future expansion
    productionChecklist: [
      "JWT Authentication and authorization checks",
      "Input validation on booking and payment flows",
      "Global exception handling for invalid seat and booking operations",
      "Idempotent-safe booking updates for repeated client attempts",
      "Container-ready build and deployment workflow",
      "Runtime logging for booking and payment events"
    ],
    productionProof: [
      "Seat availability checks validated before booking confirmation to avoid inconsistent reservations",
      "JWT-protected endpoints enforce authorization boundaries for booking and payment actions",
      "Binary PDF ticket generation tested as part of booking completion workflow",
      "API collections used for repeatable endpoint validation and smoke testing"
    ],
    tradeOffs: [
      "Prioritized transactional booking correctness over ultra-fast write throughput",
      "Used synchronous payment simulation to simplify domain flow, with room for async payment integrations later",
      "Focused on clear layered architecture, accepting additional boilerplate for maintainability"
    ],
    proofPoints: [
      "Auth endpoints documented for register/login token issuance",
      "Seat APIs implemented for seat listing and selected seat booking per bus",
      "Booking PDF endpoint implemented as binary response stream",
      "Validation rules defined for booking, payment, bus, city, and user input"
    ],
    verifiedSignals: [
      "JWT Bearer Auth",
      "Seat Booking APIs",
      "Payment Endpoint Flow",
      "PDF Ticket Export",
      "Admin Bus/City APIs",
      "Input Validation Rules"
    ],
    demoFlow: [
      "Authenticate user and obtain access token",
      "Search buses and check seat availability",
      "Select seats and submit booking request",
      "Complete payment simulation and generate ticket PDF"
    ],
    githubUrl: "https://github.com/mkarthik2006/Bus_Ticket_Booking_Application_Project_3",
    liveUrl: "https://bus-ticket-booking-application-proj.vercel.app",
    liveDemoVerified: false,
    recruiterPitch:
      "Built a complete booking domain workflow with secured APIs, transactional backend logic, and practical end-user output generation."
  },
  {
    id: "patient-medicine-appointment-system",
    featured: false,
    priority: 4,
    domain: "HealthTech",
    title: "Patient Medicine and Appointment System",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    tagline:
      "Role-based healthcare workflow application with appointment, medication, and user lifecycle management.",
    problemStatement:
      "Design a healthcare workflow where appointment scheduling and prescription management are handled securely across role-specific interactions.",
    solution:
      "Implemented a role-aware healthcare backend with secure Spring Security flows, structured appointment operations, and prescription lifecycle management.",
    architectureSummary:
      "Spring Boot + Spring Security backend supports role-aware dashboards (ADMIN/DOCTOR/PATIENT), appointment and medication workflows, and password-reset flows. Thymeleaf + Bootstrap render server-side views with MySQL persistence.",
    architectureImage: "/diagrams/patient-appointment-architecture.svg",
    proofLinks: [
      { label: "GitHub", url: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2" },
      { label: "Docker Compose Setup", url: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2#readme" },
      { label: "Swagger API Docs", url: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2#readme" },
      { label: "Postman Collection", url: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2#readme" },
      { label: "JUnit Test Cases", url: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2#readme" },
      { label: "Architecture Diagram", url: "/diagrams/patient-appointment-architecture.svg" }
    ],
    engineeringDecisions: [
      "Modeled role-specific access boundaries to isolate admin, doctor, and patient responsibilities",
      "Used server-side validation and layered services to keep medical data operations consistent",
      "Added account recovery workflows to improve usability without weakening security posture"
    ],
    challengesSolved: [
      "Enforced role-specific route protection in a multi-actor domain with overlapping workflows",
      "Balanced quick page-rendered flows with secure backend validation and authorization checks",
      "Reduced user friction by adding forgot/reset password path for account recovery"
    ],
    techStack: {
      backend: ["Java 17+", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate"],
      frontend: ["Thymeleaf", "Bootstrap"],
      security: ["Role-based Authorization", "Spring Security Login Flows", "Forgot/Reset Password Flow"],
      datastore: ["MySQL"],
      integration: ["MVC + Endpoint Workflows", "Appointment and Medication Management"],
      tooling: ["Maven", "Postman", "Git"]
    },
    corePatterns: [
      "Role-aware healthcare workflow design",
      "Server-side validation for request integrity",
      "Layered service structure for maintainable backend logic",
      "Secure appointment and prescription operations",
      "Role-based dashboard routing for admin, doctor, and patient"
    ],
    impactMetrics: [
      "Validated appointment and medication workflows in local scenarios across role-specific user paths",
      "Validated forgot-password and reset-password flow in local account recovery testing",
      "Simulated role-based access behavior for admin, doctor, and patient operations"
    ],
    // NOTE: Currently unused fields retained for future expansion
    productionChecklist: [
      "Spring Security authentication and role-based authorization",
      "Request validation for healthcare workflow integrity",
      "Global exception handling in secured backend flows",
      "Idempotent-safe update handling for appointment operations",
      "Deployable build and environment-based configuration",
      "Application logs and secured route verification checks"
    ],
    productionProof: [
      "Role access boundaries validated across admin, doctor, and patient operations",
      "Server-side validation guards appointment and prescription workflows from malformed requests",
      "Account recovery flow tested through forgot/reset path and secure credential updates",
      "Critical healthcare routes restricted through Spring Security configuration"
    ],
    tradeOffs: [
      "Selected server-rendered views for faster feature delivery, trading off richer SPA interactions",
      "Implemented strict role segmentation to improve safety, which increases authorization configuration complexity",
      "Prioritized secure workflow correctness over UI customization breadth"
    ],
    proofPoints: [
      "Role-based access model for healthcare workflows",
      "Server-side validation for appointment and prescription requests",
      "Dedicated endpoints for registration, login, appointments, and admin management",
      "Security configuration maps ADMIN/DOCTOR/PATIENT route access boundaries"
    ],
    verifiedSignals: [
      "Role-Based Dashboards",
      "Spring Security Auth",
      "Forgot/Reset Password",
      "Appointment Management",
      "Medication Workflow",
      "Server-Side Validation"
    ],
    demoFlow: [
      "Login with role-specific user",
      "Create and manage appointment entries",
      "Process prescription records and updates",
      "Validate secured route behavior with protected operations"
    ],
    githubUrl: "https://github.com/mkarthik2006/Patient_Medicine_AppointmentSystem_Application_Project_2",
    liveUrl: "https://bus-ticket-booking-application-proj-tawny.vercel.app",
    liveDemoVerified: false,
    recruiterPitch:
      "Implemented a secure healthcare workflow system combining appointment and prescription domains with role-based backend control."
  },
  {
    id: "employee-management-system",
    featured: false,
    priority: 5,
    domain: "HRTech",
    title: "Employee Management System",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tagline:
      "Spring Boot employee operations platform with CRUD workflows, search, validation, exception handling, and Swagger docs.",
    problemStatement:
      "Build an internal employee operations system to manage records reliably through structured backend APIs and maintainable service logic.",
    solution:
      "Developed a hybrid Thymeleaf plus REST backend with validated employee lifecycle APIs, search endpoints, and documented contracts through Swagger.",
    architectureSummary:
      "Spring Boot application delivers both Thymeleaf-based web flows and API endpoints for employee lifecycle management. JPA/Hibernate handles persistence while validation and global exception handling protect data quality.",
    architectureImage: "/diagrams/employee-management-architecture.svg",
    proofLinks: [
      { label: "GitHub", url: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1" },
      { label: "Docker Compose Setup", url: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1#readme" },
      { label: "Swagger API Docs", url: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1#readme" },
      { label: "Postman Collection", url: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1#readme" },
      { label: "JUnit Test Cases", url: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1#readme" },
      { label: "Architecture Diagram", url: "/diagrams/employee-management-architecture.svg" }
    ],
    engineeringDecisions: [
      "Kept service logic isolated from controllers to support future API growth and maintainability",
      "Applied global exception handling for predictable failure responses",
      "Added Swagger docs to accelerate developer onboarding and endpoint verification"
    ],
    challengesSolved: [
      "Maintained data quality with strict field validation and unique email constraints",
      "Supported both server-rendered and API-based workflows in one coherent backend",
      "Improved operability by adding searchable endpoints and documented contracts"
    ],
    techStack: {
      backend: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate"],
      frontend: ["Thymeleaf", "Bootstrap"],
      security: ["Form Validation", "Global Exception Handling"],
      datastore: ["MySQL"],
      integration: ["REST APIs", "Search by Name"],
      tooling: ["Maven", "Swagger", "Git", "Dockerfile"]
    },
    corePatterns: [
      "RESTful CRUD service design",
      "Service-layer logic isolation",
      "JPA entity modeling and relational data management",
      "Validation-first data entry and update workflows",
      "Global exception handling for missing or invalid employee operations"
    ],
    impactMetrics: [
      "Validated full employee lifecycle flow in local scenarios: create, read, update, delete, and search",
      "Validated API endpoint behavior through Swagger and Postman local verification",
      "Validated field and email constraints through local input and persistence checks"
    ],
    // NOTE: Currently unused fields retained for future expansion
    productionChecklist: [
      "Authentication and secure endpoint access controls",
      "Input validation and model-level data constraints",
      "Global exception handling for CRUD failure cases",
      "Idempotent-safe update semantics for repeated write requests",
      "Docker-ready deployment artifact support",
      "Operational logs and endpoint verification via Swagger"
    ],
    productionProof: [
      "Global exception handling delivers predictable API error responses for invalid operations",
      "Validation constraints enforce required fields and email correctness at API boundary",
      "Search and CRUD workflows validated through documented Swagger endpoints",
      "Persistence consistency verified against MySQL-backed entity operations"
    ],
    tradeOffs: [
      "Hybrid Thymeleaf plus REST approach enabled broad usability, with increased maintenance surface area",
      "Emphasized validation-first data integrity, adding stricter constraints that can reject loosely formatted input",
      "Focused on operational reliability and documentation over advanced front-end interactivity"
    ],
    proofPoints: [
      "Dual interface support: Thymeleaf pages and documented API endpoints",
      "Employee model validation includes required name/department and valid unique email",
      "Search endpoint implemented for employee lookup by keyword"
    ],
    verifiedSignals: [
      "CRUD + Search",
      "Swagger API Docs",
      "Validation Rules",
      "Global Exception Handling",
      "Thymeleaf + API Hybrid",
      "MySQL Persistence"
    ],
    demoFlow: [
      "Authenticate and access protected employee endpoints",
      "Create employee records with validation",
      "Read, update, and delete employee data",
      "Verify persistence and secured operation flow"
    ],
    githubUrl: "https://github.com/mkarthik2006/Employee_Management_Application_Project_1",
    liveUrl: "",
    liveDemoVerified: false,
    recruiterPitch:
      "Engineered a practical employee operations backend with clean CRUD API structure, secure access, and consistent persistence behavior."
  }
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
