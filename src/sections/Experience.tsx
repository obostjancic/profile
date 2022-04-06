import React from 'react';
import styled from 'styled-components';
import { theme, SectionHeading, VSSection } from '../components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const JobWrapper = styled.div`
  margin: 4em auto;

  & > h2 {
    font-size: 23px;
    margin-bottom: 0.25em;
  }
  & > h3 {
    font-size: 18px;
    margin: 0;
    color: ${theme.primary};
  }
  & > h4 {
    margin-top: 0;
    font-size: 0.8em;
    line-height: 1.5;
    font-weight: normal;
  }
  & > p {
    background-color: #f5f7fb;
    line-height: 1.5;
  }

  @media only screen and (max-width: 992px) {
    & {
      text-align: left;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin: 0.25em 0.5em 0.25em 0;
  padding: 0.25em 0.75em;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ddd;
  font-weight: bold;
  font-size: 0.85em;
  background-color: ${theme.primary};
  color: ${theme.backgroundDark};
  opacity: 1;
}`;

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

const JobCard = ({ job, children }: JobCardProps) => (
  <JobWrapper>
    <h2>{job.company}</h2>
    <h3>{job.position}</h3>
    <h4>{job.duration}</h4>
    {job.badgeNames.map((name: string) => (
      <Badge key={name}>{name}</Badge>
    ))}
    <p>{children}</p>
  </JobWrapper>
);

export const Experience = () => (
  <VSSection anchor="experience">
    <Wrapper>
      <SectionHeading>Experience</SectionHeading>
      <JobCard
        job={{
          company: 'Anyline, Vienna',
          position: 'Full stack web developer',
          duration: 'February 2020 - Present',
          badgeNames: ['Node.js', 'Typescript', 'React', 'Electron', 'Google Cloud'],
        }}
      >
        As a full-stack web developer, I am responsible for the development of multiple
        microservices inside the cloud-based ecosystem, as well as their frontend clients. Apart
        from that, I also took ownership of an internal IDE, which is used to develop various OCR
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
        Starting out as an intern, I transitioned into a developer position. I developed a new REST
        API as a part of the existing codebase using the Spring framework. I also briefly worked on
        an a Vue.js frontend application that consumed the API.
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
        gathering and analysis, design, implementation, testing, and deployment. Additionally, I
        developed and maintained a couple of smaller applications used to facilitate internal
        processes.
      </JobCard>
    </Wrapper>
  </VSSection>
);
