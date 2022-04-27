import React from 'react';
import { Section } from '../../components/Section';
import { Icons } from '../../components/Icons';
import Vanta from './Vanta';
import { isMobile } from '../../utils';

export default function Intro() {
  return (
    <>
      {!isMobile() && <Vanta />}
      <Section>
        <div className="min-h-screen flex text-center mt-8 md:mt-0 ">
          <div className="max-w-screen-sm mt m-auto">
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
              <h2 className="text-xl mt-2 font-bold text-gradient">Software developer</h2>
            </hgroup>
            <summary className="mx-6 mt-4 leading-8 ">
              <p className="p-4 text-lg opacity-70 font-semibold shadow-black shadow=[0_0_50]">
                Hello, I&apos;m Ogi, a software developer focused on Web apps. Using TypeScript with
                React and NestJS daily.
              </p>
              <p className="leading-8 my-4">
                Currently, I work as a Software engineer for{' '}
                <a
                  className="pointer-events-auto font-semibold text-gradient"
                  href="https://bitmovin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bitmovin
                </a>
                , where I am committed to the enhancement of a cloud based infrastructure that is
                used to orchestrate automated testing of a video player across a range of smart
                Devices. When I am not rolling out new features, I spend my time battling the
                ever-growing complexity by refactoring and applying design patterns. Coworkers know
                me as a motivated and communicative team member who is enthusiastic about taking the
                development process to the next level.
              </p>
            </summary>
            <Icons />
          </div>
        </div>
      </Section>
    </>
  );
}
