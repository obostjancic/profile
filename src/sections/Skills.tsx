import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';

export const SkillBadges = ({ visible }: { visible: boolean }) => (
  <div className="text-left mx-4">
    {['Node.js', 'React', 'JavaScript', 'TypeScript', 'NestJS', 'Spring', 'Django'].map((skill) => (
      <Badge name={skill} key={skill} />
    ))}
  </div>
);

export const Skills = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <Section anchor="skills" handleChange={handleChange}>
      <div>
        <h2 className="text-center uppercase mb-8 text-3xl">Skills & interests</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="text-left mx-4">
            <p>
              Apart from end-to-end development and maintenance of stable and scalable RESTful web
              applications, I have taken on myself a series of other responsibilities. Some of them
              include: migration from JavaScript to TypeScript, ownership of private NPM packages
              and UI kit libraries, writing extensive database migration scripts, and integration of
              monitoring and error tracking services.
            </p>
            <p>
              Outside of work, I am frequently working on my side projects or going through the
              articles and blog posts on my reading list.
            </p>
          </div>

          <SkillBadges visible={visible} />
        </div>
      </div>
    </Section>
  );
};
