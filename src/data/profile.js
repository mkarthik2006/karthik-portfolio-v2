import {
  Activity,
  Atom,
  Coffee,
  Code2,
  Container,
  Database,
  GitBranch,
  Leaf,
  Network,
  Palette,
  Shield
} from "lucide-react";

export const ACTIVE_VARIANT = "product";

export const PROFILE_VARIANTS = {
  product: {
    summary:
      "Java Backend / Full Stack Developer focused on building scalable systems using Spring Boot, Kafka, and clean architecture.",
    highlights: [
      "Built distributed systems with Kafka event flows and SAGA compensation",
      "Implemented secure gateway-first API architecture with Keycloak JWT validation",
      "Worked with Spring Cloud stack, Redis caching, and Docker-based orchestration"
    ],
    impactBar: [
      "Built production-grade backend systems",
      "Designed microservices with Kafka event workflows",
      "Implemented concurrency-safe processing patterns",
      "Dockerized full-stack deployments end-to-end"
    ]
  },
  fintech: {
    summary:
      "Java Backend / Full Stack Developer focused on building scalable systems using Spring Boot, Kafka, and clean architecture.",
    highlights: [
      "Implemented OAuth2/JWT security boundaries with gateway-enforced route protection",
      "Applied ACID-first transaction flows and consistency-focused backend modeling",
      "Hardened service reliability with health checks, idempotency, and controlled failure handling"
    ],
    impactBar: [
      "Built security-first transaction workflows",
      "Enforced zero-trust API access patterns",
      "Validated resilience under failure scenarios",
      "Containerized services for reliable delivery"
    ]
  },
  saas: {
    summary:
      "Java Backend / Full Stack Developer focused on building scalable systems using Spring Boot, Kafka, and clean architecture.",
    highlights: [
      "Designed scalable API workflows with clean service boundaries and version-friendly contracts",
      "Implemented event-driven processing with Kafka and idempotent consumers",
      "Improved production readiness through observability, retry strategy, and Dockerized deployments"
    ],
    impactBar: [
      "Built scalable API-first backends",
      "Improved reliability with async workflows",
      "Handled concurrency-safe processing",
      "Shipped deployable Dockerized stacks"
    ]
  }
};

export const profile = {
  name: "Karthik Muthuirulappan",
  role: "Java Full Stack Developer | Backend & System Design",
  location: "Chennai, India",
  summary: PROFILE_VARIANTS[ACTIVE_VARIANT].summary,
  quickScan: [
    { label: "Role", value: "Java Backend / Full Stack Developer" },
    { label: "Experience", value: "0-1 year (early-career, production-focused)" },
    { label: "Stack", value: "Java, Spring Boot, Kafka, React, Docker" },
    { label: "Best Project", value: "ShopScale Fabric (event-driven microservices)" },
    { label: "Availability", value: "Immediate Joiner" }
  ],
  experience: [
    {
      role: "Java Full Stack Developer",
      company: "Zaalima Development Pvt. Ltd",
      duration: "Jan 2026 – Present",
      points: [
        "Built REST APIs using Spring Boot",
        "Implemented JWT authentication and endpoint validation",
        "Worked with Docker-based project environments and workflows"
      ]
    },
    {
      role: "Java Full Stack Developer Intern (Project-Based)",
      company: "GUVI",
      duration: "Dec 2024 – Jun 2025",
      points: [
        "Developed REST APIs and authentication workflows using Spring Boot",
        "Applied clean code and structured exception handling in backend services"
      ]
    }
  ],
  experienceSummary:
    "Previously worked as Planning Engineer, applying structured problem-solving and system thinking in large-scale operations.",
  impactBar: PROFILE_VARIANTS[ACTIVE_VARIANT].impactBar,
  about:
    "Backend-focused Java engineer with hands-on experience in API design, JWT security, data modeling, and microservices reliability patterns.",
  heroHighlights: [
    "Designed microservices with Kafka event choreography and SAGA compensation flows",
    "Built JWT/OAuth2-secured APIs with gateway-first routing and role-aware authorization",
    "Shipped containerized deployments using Docker Compose, health checks, and resilient startup policies"
  ],
  highlights: PROFILE_VARIANTS[ACTIVE_VARIANT].highlights,
  // NOTE: Currently unused fields retained for future expansion
  whatICanDo: [
    "Design backend services for high-throughput, failure-tolerant workflows",
    "Model APIs and domain boundaries for maintainable long-term systems",
    "Implement secure auth flows with JWT, OAuth2/OIDC, and route-level policy enforcement",
    "Turn architecture decisions into measurable outcomes with observability and tests"
  ],
  engineeringStrengths: [
    "Concurrency handling with queue-based processing, idempotency, and contention-safe workflows",
    "Transaction management with ACID boundaries, compensation paths, and consistency guarantees",
    "Microservices design using gateway routing, service discovery, and async communication",
    "API design focused on versioning, validation, contract clarity, and error semantics"
  ],
  apiShowcase: [
    {
      method: "POST",
      path: "/api/bookings",
      description: "Creates a booking transaction with seat lock, validation, and payment trigger."
    },
    {
      method: "GET",
      path: "/api/buses",
      description: "Returns paginated buses with route filters and seat availability metadata."
    },
    {
      method: "PUT",
      path: "/api/appointments",
      description: "Updates appointment lifecycle state with role-based permission checks."
    }
  ],
  failuresDebugged: [
    "Mitigated race-condition risks in booking workflows by tightening seat-state and request validation flow",
    "Resolved JWT authorization mismatches across gateway-routed protected endpoints and token scopes",
    "Debugged event-driven reliability issues by tuning retry and idempotency-oriented consumer handling"
  ],
  skills: {
    backend: [
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
      { name: "Spring Security", icon: Shield },
      { name: "JPA/Hibernate", icon: Database },
      { name: "REST APIs", icon: Network }
    ],
    cloudAndMicroservices: [
      { name: "Spring Cloud Gateway", icon: Network },
      { name: "Eureka", icon: Network },
      { name: "Config Server", icon: Network },
      { name: "Kafka", icon: Activity },
      { name: "Resilience4j", icon: Shield }
    ],
    data: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database }
    ],
    frontend: [
      { name: "React.js", icon: Atom },
      { name: "Thymeleaf", icon: Leaf },
      { name: "Bootstrap", icon: Code2 },
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette }
    ],
    tools: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "Postman", icon: Network },
      { name: "Maven", icon: Code2 },
      { name: "Zipkin", icon: Activity }
    ],
    testing: [
      { name: "JUnit", icon: Shield },
      { name: "Mockito", icon: Shield },
      { name: "Postman", icon: Network },
      { name: "Swagger/OpenAPI", icon: Code2 }
    ],
    architecture: [
      { name: "ACID Transactions", icon: Database },
      { name: "Transaction Isolation", icon: Database },
      { name: "Concurrency Handling", icon: Activity },
      { name: "SOLID Principles", icon: Code2 }
    ]
  },
  certification: {
    title: "Full Stack Java Developer",
    org: "GUVI (IITM Incubated, HCL)",
    link: "https://drive.google.com/file/d/1kknos1RWYazCa23lQ34Z9RQCm9GdCGyE/view?usp=sharing"
  },
  links: {
    github: "https://github.com/mkarthik2006",
    linkedin: "https://www.linkedin.com/in/karthik-muthuirulappan-333aba320/",
    email: "karthikm930620@gmail.com",
    phone: "+91 9600848309",
    leetcode: "https://leetcode.com/u/mkarthik2006/",
    resumePreview: "https://docs.google.com/document/d/1sym5h1JgBKBFXyEcEqDT12wwqU0kkmqQ/preview",
    resumePdf: "https://docs.google.com/document/d/1sym5h1JgBKBFXyEcEqDT12wwqU0kkmqQ/export?format=pdf"
  }
};
