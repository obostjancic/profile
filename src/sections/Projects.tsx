import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Section } from '../components/Section';
import { Image, LinkProps, Project } from '../types';
import { projects } from './data';

export const Projects = () => {
  return (
    <Section anchor="projects">
      <h2 className="text-center uppercase mb-8 text-3xl">Projects</h2>

      <div>
        <ProjectCard project={projects.kolorkross} />
        <ProjectCard project={projects.team8} />
      </div>
    </Section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [selectedId, setSelectedId] = useState('0');
  const { name, description, images, url } = project;
  const summary = images.find((img: Image) => img.id === selectedId)?.description;

  return (
    <div className="project-wrapper md:flex xs:flex-col mx-8 mt-6 mb-24 transition-all">
      <div className="project-image w-1/2 min-w-[14em] mr-8 mb-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          onChange={(id) => {
            setSelectedId(JSON.stringify(id));
          }}
        >
          {images.map((img: Image) => (
            <img
              key={img.id}
              src={img.srcPng}
              alt="Project images"
              // srcSet={srcSet(img.src)}
              // onerror={`this.onerror=null; this.src='/images/${img.src}'`}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex-col justify-start min-w-1/2 text-left">
        <div className="min-w-[5em] mb-2 pb-2">
          <h2 className="text-2xl mb-1">
            <ProjectLink href={url}>{name}</ProjectLink>
          </h2>
          <p className="mb-1">
            <b>{description}</b>
          </p>
        </div>
        {/* <Divider /> */}
        <div className="divider w-16 bg-prim-light border-2 border-prim-light rounded-r-sm mb-2" />
        <p>{summary}</p>
      </div>
    </div>
  );
};

const ProjectLink = ({ children, href }: LinkProps) => (
  <a
    className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
