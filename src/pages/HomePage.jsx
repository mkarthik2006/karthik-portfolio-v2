import { useMemo } from "react";
import {
  Activity,
  BriefcaseBusiness,
  Coffee,
  FolderKanban,
  GitBranch,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
  Sparkles,
  UserRound,
  Cpu
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const HERO_TECH_TAGS = [
  { name: "Java", icon: Coffee },
  { name: "Spring Boot", icon: Leaf },
  { name: "MySQL", icon: Shield },
  { name: "Docker", icon: Network }
];

function SkillItem({ skill }) {
  const Icon = skill.icon;
  return (
    <li className="skill-item">
      <Icon size={16} aria-hidden="true" />
      <span>{skill.name}</span>
    </li>
  );
}

export default function HomePage() {
  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)),
    []
  );
  const featuredProjects = useMemo(() => sortedProjects.filter((project) => project.featured), [sortedProjects]);
  const otherProjects = useMemo(() => sortedProjects.filter((project) => !project.featured), [sortedProjects]);

  return (
    <main id="main-content" className="layout">
      <Seo
        title="Karthik Muthuirulappan | Java Full Stack Developer Portfolio"
        description="Portfolio of Karthik Muthuirulappan featuring Java Spring Boot projects, microservices architecture, and dynamic React-based project documentation."
        image={featuredProjects[0]?.image}
      />

      <section className="scan-panel" aria-label="30-second recruiter scan">
        {profile.quickScan.map((item) => (
          <article key={item.label} className="scan-panel-item">
            <p className="scan-panel-label">{item.label}</p>
            <p className="scan-panel-value">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="impact-bar" aria-label="High-impact engineering highlights">
        {profile.impactBar.map((item) => (
          <p key={item} className="impact-bar-item">
            <span aria-hidden="true">✓</span>
            <span>{item}</span>
          </p>
        ))}
      </section>

      <header className="hero" aria-labelledby="home-hero-title">
        <p className="eyebrow">{profile.role}</p>
        <h1 id="home-hero-title">{profile.name}</h1>
        <p className="hero-subtitle">{profile.summary}</p>
        <ul className="hero-highlight-list" aria-label="Core backend and architecture highlights">
          {profile.heroHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="hero-tech-tags" aria-label="Primary technology tags">
          {HERO_TECH_TAGS.map((tag) => {
            const TagIcon = tag.icon;
            return (
              <span key={tag.name} className="hero-tech-tag">
                <TagIcon size={15} aria-hidden="true" />
                <span>{tag.name}</span>
              </span>
            );
          })}
        </div>
      </header>

      <section className="section section-shell" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-heading">
          <UserRound size={16} />
          <span>About</span>
        </h2>
        <p className="section-intro">{profile.about}</p>
        <ul className="detail-list">
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section section-shell" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="section-heading">
          <BriefcaseBusiness size={16} />
          <span>Experience</span>
        </h2>
        <p className="section-intro">{profile.experienceSummary}</p>
        <div className="stack-grid">
          {profile.experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="stack-block">
              <h4>{item.role}</h4>
              <p className="section-intro">
                {item.company} | {item.duration}
              </p>
              <ul className="detail-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section-heading">
          <Sparkles size={16} />
          <span>Core Skills</span>
        </h2>
        <div className="stack-grid">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category} className="stack-block">
              <h4>{category.replace(/([A-Z])/g, " $1")}</h4>
              <ul className="skill-list">
                {items.map((item) => (
                  <SkillItem key={item.name} skill={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-shell" aria-labelledby="engineering-strengths-heading">
        <h2 id="engineering-strengths-heading" className="section-heading">
          <Cpu size={16} />
          <span>Engineering Strengths</span>
        </h2>
        <ul className="detail-list">
          {profile.engineeringStrengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>

      <section className="section section-shell" aria-labelledby="failures-debugged-heading">
        <h2 id="failures-debugged-heading" className="section-heading">
          <Activity size={16} />
          <span>Failures I Debugged</span>
        </h2>
        <p className="section-intro">Practical debugging and reliability improvements from real project implementations.</p>
        <ul className="detail-list">
          {profile.failuresDebugged.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section section-shell" aria-labelledby="featured-projects-heading">
        <h2 id="featured-projects-heading" className="section-heading">
          <FolderKanban size={16} />
          <span>Featured Projects</span>
        </h2>
        <p className="section-intro">Top production-focused projects with architecture, outcomes, and engineering proof.</p>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section section-shell" aria-labelledby="additional-projects-heading">
        <h2 id="additional-projects-heading" className="section-heading">
          <BriefcaseBusiness size={16} />
          <span>Additional Projects</span>
        </h2>
        <p className="section-intro">More backend-focused implementations and problem-solving case studies.</p>
        <div className="project-grid">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section section-shell" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-heading">
          <Mail size={16} />
          <span>Contact</span>
        </h2>
        <div className="contact-card">
          <p>
            Open to Backend Engineer opportunities (Java, Spring Boot, Kafka). Available for immediate joining. Let's discuss how I can contribute to your team.
          </p>
          <ul className="detail-list">
            <li className="contact-item">
              <Mail size={16} />
              <span>Email:</span> <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
            </li>
            <li className="contact-item">
              <Phone size={16} />
              <span>Phone:</span> <a href={`tel:${profile.links.phone}`}>{profile.links.phone}</a>
            </li>
            <li className="contact-item">
              <MapPin size={16} />
              <span>Location:</span> {profile.location}
            </li>
            <li className="contact-item">
              <Globe size={16} />
              <span>LinkedIn:</span>{" "}
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
                Profile
              </a>
            </li>
            <li className="contact-item">
              <GitBranch size={16} />
              <span>GitHub:</span>{" "}
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
                Repository Portfolio
              </a>
            </li>
            <li className="contact-item">
              <Sparkles size={16} />
              <span>LeetCode:</span>{" "}
              <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="Open LeetCode profile">
                Profile
              </a>
            </li>
            <li className="contact-item">
              <Sparkles size={16} />
              <span>Certification:</span>{" "}
              <a href={profile.certification.link} target="_blank" rel="noopener noreferrer" aria-label="Open certification verification">
                Verification
              </a>
            </li>
          </ul>
          <div className="card-actions">
            <a
              href={profile.links.resumePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link btn-link-secondary"
              aria-label="Preview resume in a new tab"
            >
              Preview Resume
            </a>
            <a
              href={profile.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link btn-link-secondary"
              aria-label="Download resume PDF in a new tab"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
