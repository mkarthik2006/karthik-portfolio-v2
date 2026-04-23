import { memo } from "react";
import { ArrowUpRight, ExternalLink, GitBranch, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

function ProjectCard({ project }) {
  const topMetrics = project.impactMetrics.slice(0, 2);
  const techChips = Object.values(project.techStack)
    .flat()
    .slice(0, 4);
  const coverImage = project.image || FALLBACK_PROJECT_IMAGE;

  return (
    <article className="project-card premium-project-card">
      <div className="project-media">
        <img src={coverImage} alt={`${project.title} project preview`} className="project-image" loading="lazy" />
        <div className="project-image-overlay" />
        <div className="project-media-badges badge-row">
          {project.featured && <span className="badge">Featured</span>}
          {project.domain && <span className="domain-badge">{project.domain}</span>}
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-title-row">
          <Sparkles size={16} />
          <span>{project.title}</span>
        </h3>
        <p className="card-tagline">{project.tagline}</p>
        <ul className="card-bullets">
          {topMetrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>

        <div className="chip-row">
          {techChips.map((tech) => (
            <span key={tech} className="chip card-tech-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link btn-link-primary"
            aria-label={`View code for ${project.title}`}
          >
            <GitBranch size={16} />
            <span>View Code</span>
            <ArrowUpRight size={14} />
          </a>
          <Link to={`/projects/${project.id}`} className="btn-link btn-link-secondary" aria-label={`Open details for ${project.title}`}>
            <Layers3 size={16} />
            <span>Details</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link
            to={`/projects/${project.id}#architecture`}
            className="btn-link btn-link-secondary"
            aria-label={`Open architecture section for ${project.title}`}
          >
            <Layers3 size={16} />
            <span>Architecture</span>
            <ArrowUpRight size={14} />
          </Link>
          {project.liveUrl && project.liveDemoVerified && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link btn-link-secondary"
              aria-label={`Open live demo for ${project.title}`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProjectCard);
