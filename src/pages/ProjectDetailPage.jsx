import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Compass, ExternalLink, Layers3, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import Seo from "../components/Seo";
import { getProjectById } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const project = getProjectById(id);
  const [activeSectionId, setActiveSectionId] = useState("problem-statement");
  const mergedImpactMetrics = [
    ...(project?.impactMetrics ?? []),
    ...(project?.productionProof ?? []),
    ...(project?.proofPoints ?? [])
  ];
  const validProofLinks = (project?.proofLinks ?? []).filter((link) => link.url && link.url !== "#");
  const hasProductionChecklist = (project?.productionChecklist ?? []).length > 0;
  const hasValidProofLinks = validProofLinks.length > 0;

  const navSections = [
    { id: "problem-statement", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "architecture", label: "Architecture" },
    { id: "validation-impact", label: "Impact" },
    { id: "production-readiness", label: "Readiness" },
    { id: "verification-artifacts", label: "Links" }
  ];

  if (!project) {
    return (
      <main className="layout">
        <h1>Project not found</h1>
        <Link to="/">Return to home</Link>
      </main>
    );
  }

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".detail-section-card[data-section-id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries.length > 0) {
          const nextId = visibleEntries[0].target.getAttribute("data-section-id");
          if (nextId) setActiveSectionId(nextId);
        }
      },
      { root: null, threshold: [0.3, 0.5, 0.7], rootMargin: "-15% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [project.id]);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    // Wait one frame so the section exists after route render.
    const rafId = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSectionId(hash);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [location.hash, project.id]);

  function handleMiniNavClick(event, sectionId) {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSectionId(sectionId);
  }

  return (
    <main id="main-content" className="layout project-detail-layout">
      <Seo title={`${project.title} | Karthik Portfolio`} description={project.tagline} image={project.image} />

      <Link to="/" className="back-link">
        Back to projects
      </Link>

      <header className="detail-hero" aria-labelledby="project-detail-title">
        <div className="badge-row">
          {project.featured && <span className="badge">Featured</span>}
          {project.domain && <span className="domain-badge">{project.domain}</span>}
        </div>
        <h1 id="project-detail-title">{project.title}</h1>
        <p>{project.recruiterPitch}</p>
      </header>

      <nav className="detail-mini-nav" aria-label="On this page">
        {navSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`mini-nav-link ${activeSectionId === section.id ? "is-active" : ""}`}
            onClick={(event) => handleMiniNavClick(event, section.id)}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <section
        id="problem-statement"
        data-section-id="problem-statement"
        className={`section section-shell detail-section-card ${
          activeSectionId === "problem-statement" ? "is-active" : ""
        }`}
        aria-labelledby="problem-statement-heading"
      >
        <h2 id="problem-statement-heading" className="section-heading">
          <Compass size={16} />
          <span>Problem Statement</span>
        </h2>
        <p>{project.problemStatement}</p>
      </section>

      <section
        id="solution"
        data-section-id="solution"
        className={`section section-shell detail-section-card ${activeSectionId === "solution" ? "is-active" : ""}`}
        aria-labelledby="solution-heading"
      >
        <h2 id="solution-heading" className="section-heading">
          <Lightbulb size={16} />
          <span>Solution</span>
        </h2>
        <p>{project.solution}</p>
      </section>

      <section
        id="architecture"
        data-section-id="architecture"
        className={`section section-shell detail-section-card ${activeSectionId === "architecture" ? "is-active" : ""}`}
        aria-labelledby="architecture-heading"
      >
        <h2 id="architecture-heading" className="section-heading">
          <Layers3 size={16} />
          <span>Architecture Summary</span>
        </h2>
        <p>{project.architectureSummary}</p>
        {project.architectureImage && (
          <figure className="architecture-image-shell">
            <img
              src={project.architectureImage}
              alt={`${project.title} architecture diagram`}
              loading="lazy"
              className="architecture-image"
            />
          </figure>
        )}
      </section>

      <section
        id="validation-impact"
        data-section-id="validation-impact"
        className={`section section-shell detail-section-card ${
          activeSectionId === "validation-impact" ? "is-active" : ""
        }`}
        aria-labelledby="validation-impact-heading"
      >
        <h2 id="validation-impact-heading" className="section-heading">
          <Rocket size={16} />
          <span>Impact and Metrics</span>
        </h2>
        <ul className="detail-list">
          {mergedImpactMetrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      {hasProductionChecklist && (
        <section
          id="production-readiness"
          data-section-id="production-readiness"
          className={`section section-shell detail-section-card ${
            activeSectionId === "production-readiness" ? "is-active" : ""
          }`}
          aria-labelledby="production-readiness-heading"
        >
          <h2 id="production-readiness-heading" className="section-heading">
            <ShieldCheck size={16} />
            <span>Production Readiness</span>
          </h2>
          <ul className="detail-list">
            {(project.productionChecklist ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {hasValidProofLinks && (
        <section
          id="verification-artifacts"
          data-section-id="verification-artifacts"
          className={`section section-shell detail-section-card ${
            activeSectionId === "verification-artifacts" ? "is-active" : ""
          }`}
          aria-labelledby="verification-artifacts-heading"
        >
          <h2 id="verification-artifacts-heading" className="section-heading">
            <ExternalLink size={16} />
            <span>Repository and Links</span>
          </h2>
          <div className="artifact-links">
            {validProofLinks.map((link) => (
              <a
                key={`${link.label}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link btn-link-secondary"
                aria-label={`Open ${link.label} for ${project.title}`}
              >
                <span>{link.label}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
