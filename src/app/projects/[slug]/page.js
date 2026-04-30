import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  featuredProjects,
  getFeaturedProjectBySlug,
} from "../../../lib/projectsData";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getFeaturedProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Wasif Hasan",
    };
  }

  return {
    title: `${project.name} | Project Details`,
    description: project.description,
  };
}

export default function ProjectDetailsPage({ params }) {
  const project = getFeaturedProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-details-shell px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="project-back-link">
          Back to Projects
        </Link>

        <header className="project-details-header mt-6">
          <p className="section-eyebrow">Project Details</p>
          <h1 className="section-title">{project.name}</h1>
          <p className="exp-summary mt-4 max-w-3xl text-slate-300">
            {project.description}
          </p>
        </header>

        <figure className="project-details-image-wrap mt-10">
          <Image
            src={project.image}
            alt={`${project.name} hero preview`}
            fill
            className="project-details-image"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </figure>

        <section className="project-details-grid mt-10">
          <article className="project-details-card">
            <h2>Main Technology Stack</h2>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="project-details-card">
            <h2>Project Links</h2>
            <div className="project-details-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Live Project
              </a>
              <a
                href={project.githubClientLink}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Client Repository
              </a>
            </div>
          </article>
        </section>

        <section className="project-details-card project-challenges mt-8">
          <h2>Challenges Faced While Developing</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
