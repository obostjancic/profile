import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Image, LinkProps, Project } from '../types';
import { projects } from './data';

function ProjectLink({ children, href }: LinkProps) {
  return (
    <a className="font-bold text-gradient" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [selectedId, setSelectedId] = useState('0');
  const { name, description, images, url } = project;
  const summary = images.find((img: Image) => img.id === selectedId)?.description;

  return (
    <div className="mx-4 mt-6 mb-24 transition-all project-wrapper md:flex xs:flex-col">
      <div className="project-image w-1/2 min-w- min-w-[18em] mr-8 mb-4">
        <img
          key={images[0].id}
          src={images[0].srcPng}
          alt="Project images"
          // srcSet={srcSet(img.src)}
          // onerror={`this.onerror=null; this.src='/images/${img.src}'`}
        />
      </div>
      <div className="justify-start text-left min-w-1/2">
        <div className="min-w-[5em] mb-2 pb-2">
          <h2 className="mb-1 text-2xl">
            <ProjectLink href={url}>{name}</ProjectLink>
          </h2>
          <p className="mb-1 text-gray-600 lg:mr-12">
            <b>{description}</b>
          </p>
        </div>
        <div className="w-16 mb-2 border-2 rounded-r-sm divider bg-prim-light border-prim-light" />
        <p className="lg:mr-12">{summary}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section anchor="projects">
      <h2 className="mb-8 text-3xl text-center uppercase">Projects</h2>

      <div>
        <ProjectCard project={projects.kolorkross} />
        <ProjectCard project={projects.team8} />
      </div>
    </Section>
  );
}
