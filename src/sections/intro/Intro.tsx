import React from 'react';
import { Section } from '../../components/Section';
import { Icons } from '../../components/Icons';
import { Vanta } from './Vanta';
import { isMobile } from '../../utils';

export const Intro = () => {
  return (
    <>
      {!isMobile() && <Vanta />}
      <Section intro>
        <div className="min-h-screen flex text-center mt-8 md:mt-0">
          <div className="flex-col justify-center max-w-screen-sm mt m-auto">
            <div
              className="m-auto border border-prim-light rounded-full pointer-events-auto hover:shadow-[0_0_10px] hover:shadow-prim-light transition-all"
              style={{
                background: 'url(assets/images/profile-photo-square.jpg)',
                backgroundSize: 'contain',
                minHeight: '128px',
                minWidth: '128px',
                maxWidth: '128px',
              }}
            />
            <hgroup>
              <h1 className="text-3xl mt-4 font-bold">Ognjen Bostjančić</h1>
              <h2 className="text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark">
                Software developer
              </h2>
            </hgroup>
            <summary className="mx-6 leading-8 ">
              <p className="p-4 text-lg font-bold opacity-85">
                Hello, I'm Ogi, a software developer focused on Web apps. I use TypeScript with
                React and Node.js daily.
              </p>
              <p className="leading-8">
                Currently, I work as a Web developer for{' '}
                <a
                  className="pointer-events-auto  text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark"
                  href="https://anyline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anyline
                </a>
                , where I am committed to the creation of a cloud infrastructure that is used for
                the automation of machine learning and computer vision processes. When I am not
                rolling out new features, I spend my time improving code quality by refactoring,
                introducing design patterns, or writing additional tests. Coworkers know me as a
                motivated and communicative team member who is enthusiastic about taking the
                development process to the next level.
              </p>
            </summary>
            <Icons />
          </div>
        </div>
      </Section>
    </>
  );
};
