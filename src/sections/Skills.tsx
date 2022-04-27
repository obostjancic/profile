import React from 'react';
import arrowStraight from '/images/vectors/arrow-straight.svg';
import Badge from '../components/Badge';
import { Section } from '../components/Section';

function SkillBadges() {
  return (
    <div className="mx-4 flex py-2 ">
      <div className="flex flex-col w-fit min-w-fit">
        <SkillGroup title="Frontend" abbreviation="FE" skills={['React', 'Svelte', 'Electron']} />
        <SkillGroup title="Backend" abbreviation="BE" skills={['NestJS', 'Express', 'Node.js']} />
        <SkillGroup title="Database" abbreviation="DB" skills={['PostgresSQL', 'Redis', 'MySQL']} />
        <SkillGroup title="Infrastructure" abbreviation="Inf" skills={['GCP', 'AWS', 'Vercel']} />
      </div>
      <div className="hidden sm:flex lg:hidden xl:flex ml-2">
        <div className="w-16">
          <img src={arrowStraight} className="arrow-straight" />
          <img src={arrowStraight} className="arrow-down" />
        </div>
        <div className="w-fit min-w-fit pt-2 text-3xl  handwritten text-gradient text-center leading-[1.25rem]">
          with
          <br />
          Typescript&nbsp;
        </div>
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  abbreviation,
  skills,
}: {
  title: string;
  abbreviation: string;
  skills: string[];
}) {
  return (
    <div className="border border-gray-300 rounded-xl p-1 px-2 mb-2 flex ">
      <div className="w-28 font-bold text-md text-gradient items-center ml-1 hidden sm:flex">
        {title}
      </div>
      <div className="w-6 font-bold text-md text-gradient items-center mr-1 sm:hidden flex">
        {abbreviation}:
      </div>
      {skills.map((skill) => (
        <Badge name={skill} key={skill} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section anchor="skills">
      <div>
        <h2 className="text-center uppercase mb-8 text-3xl">Skills & interests</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="text-left mx-4 mb-6 lg:mb-0">
            <p>
              Apart from end-to-end development and maintenance of stable and scalable RESTful web
              applications, during the past years I have taken on myself a series of other
              Responsibilities. Some of them include: migration from JavaScript to TypeScript,
              ownership of private NPM packages and UI kit libraries, writing extensive database
              Migration scripts, and integration of monitoring and error tracking services.
            </p>
            <p>
              Outside of work, I am frequently working on my side projects or going through the
              articles and blog posts on my reading list.
            </p>
          </div>

          <SkillBadges />
        </div>
      </div>
    </Section>
  );
}
