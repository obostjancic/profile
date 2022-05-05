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
        <div className="flex min-h-screen mt-8 text-center md:mt-0">
          <div className="z-10 max-w-screen-sm m-auto mt">
            <div
              className="m-auto mt-8 md:mt-0 border border-prim-light rounded-full pointer-events-auto hover:shadow-[0_0_10px] hover:shadow-prim-light transition-all"
              style={{
                background: 'url(/images/prof_gen_blue_350.jpeg)',
                backgroundSize: 'contain',
                minHeight: '128px',
                minWidth: '128px',
                maxWidth: '128px',
              }}
            />
            <hgroup>
              <h1 className="mt-4 text-3xl font-bold">Ognjen Bostjančić</h1>
              <h2 className="mt-2 text-xl font-bold text-gradient">Software developer</h2>
            </hgroup>
            <summary className="mx-6 mt-4 leading-8 ">
              <p className="p-4 text-lg opacity-70 font-semibold shadow-black shadow=[0_0_50]">
                Hello, I&apos;m Ogi, a software developer focused on Web apps. Using TypeScript with
                React and NestJS daily.
              </p>
              <p className="my-4 leading-8">
                Currently, I work as a Software engineer for{' '}
                <a
                  className="font-semibold transition-all pointer-events-auto text-gradient hover:text-prim-dark"
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
