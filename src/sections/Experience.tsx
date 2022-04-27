import React from 'react';
import { Section } from '../components/Section';
import Badge from '../components/Badge';
interface Job {
  company: string;
  position: string;
  duration: string;
  badgeNames: string[];
}

interface JobCardProps {
  job: Job;
  children: React.ReactNode;
}

function JobCard({ job, children }: JobCardProps) {
  return (
    <div className="mx-8 pb-8 md:text-center sm:text-left">
      <h2 className="text-2xl mb-1 ">{job.company}</h2>
      <h3 className="text-xl text-gradient">{job.position}</h3>
      <h4 className="leading-6 text-gray-500 font-semibold">{job.duration}</h4>
      {job.badgeNames.map((name: string) => (
        <Badge name={name} key={name} />
      ))}
      <p className="leading-6">{children}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <Section anchor="experience">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center uppercase mb-8 text-3xl">Experience</h2>
        <JobCard
          job={{
            company: 'Bitmovin, Vienna',
            position: 'Software engineer',
            duration: 'February 2022 - Present',
            badgeNames: ['NestJS', 'Typescript', 'React'],
          }}
        >
          As a parto of the test automation team that develops and maintains a number of services
          used to orchestrate automated tests of the Bitmovin video player across a wide range of
          smart devices.
        </JobCard>
        <JobCard
          job={{
            company: 'Anyline, Vienna',
            position: 'Full stack web developer',
            duration: 'February 2020 - January 2022',
            badgeNames: ['NestJS', 'Typescript', 'React', 'Electron', 'Google Cloud'],
          }}
        >
          As a full-stack web developer, I was responsible for the development of multiple
          microservices inside the cloud-based system, as well as their frontend clients. Apart from
          that, I also took ownership of an internal IDE, which is used to develop various OCR
          products.
        </JobCard>
        <JobCard
          job={{
            company: 'Workflow EDV, Vienna',
            position: 'Backend web developer',
            duration: 'May 2018 - Jan 2020',
            badgeNames: ['Java', 'Spring', 'Hibernate', 'Vue.js', 'Typescript'],
          }}
        >
          Starting out as an intern, I transitioned into a developer position. I developed a new
          REST API as a part of the existing codebase using the Spring framework. I also briefly
          worked on an a Vue.js frontend application that consumed the API.
        </JobCard>
        <JobCard
          job={{
            company: 'IT Services, Sarajevo',
            position: 'Backend web developer',
            duration: 'Mar 2017 - May 2018',
            badgeNames: ['Java', 'Spring', 'Hibernate', 'JasperReports'],
          }}
        >
          The focus of my work was on developing a REST API backend for the new student management
          system. I worked mostly with Java and Spring. My responsibilities included requirement
          gathering and analysis, design and implementationt. Additionally, I developed and
          maintained a couple of smaller applications used to facilitate internal processes.
        </JobCard>
      </div>
    </Section>
  );
}
