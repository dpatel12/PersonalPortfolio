'use client';
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import React from 'react';
import Typewriter from './Typewriter';
import MagicButton from "./ui/MagicButton";
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { socialMedia } from "@/data";


const Hero = () => {
  return (
    <div className="pb-20 pt-36"> 
        <div>
            <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
            />
            <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]" fill="green"
            />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
        flex items-center justify-center absolute top-0 left-0">
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center mask-image:radial-gradient(ellipse_at_center, transparent 20%, black)">
          </div>
        </div>
        <div className="flex justify-center relative my-20 z-10"> 
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to my portfolio
            </h2>
            <h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Hi, I'm Danyaal Patel, a recent Computer Science & Business Graduate"
              /> 
            </h2>
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                <Typewriter
                    initialText="I like to "
                    words={[
                        'learn new things.',
                        'fuse tech know-how with business savvy.',
                        'create full-stack projects.',
                        'play, watch, breathe 🏈.',
                        'master the art of Agile project management',
                        'streamline everyday tasks with automation.',
                        'dive into data and see what it tells me',
                        'bridge the gap between tech and business goals'
                    ]}
                    typingSpeed={85}
                    deletingSpeed={40}
                    delayBetweenPhrases={500}
                    initialDelay={2000}
                />

            </div>
            <div className="flex gap-4"> 
              <Link href="/DanyaalPatelResumeSeptember24.pdf" passHref>
                  <MagicButton
                    title="View My Resume"
                    icon={<IoPersonOutline/>}  
                    position='right'
                  />
              </Link>
            </div>
            <div className="flex items-center md:gap-3 gap-6 sm:gap-3 pt-2">
              {socialMedia.map((info) => (
                <a
                key={info.id}
                href={info.link}  
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hero