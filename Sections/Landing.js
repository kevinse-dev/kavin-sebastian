import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Arrow from "../public/Arrow.png";
import hero from "../public/Hero.svg";
import Parallax from "react-rellax";
import Fade from "react-reveal/Fade";
import openQuote from "../public/backtick1.png";
import closeQuote from "../public/backtick2.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
export default function Landing() {
  // console.log(navbar);
  return (
    <>
      <section id='Landing' className='relative'>
        <Navbar />
        <div className='sm:flex flex-row justify-center'>
          <div className='w-9/12 sm:w-6/12 lg:w-3/12 rotate-90 justify-center absolute -left-28 sm:-left-32 md:-left-40 lg:-left-36 top-2/4 xl:-left-20 flex'>
            <div className='w-full flex justify-center items-center'>
              <div className=' w-full hidden dark:text-white sm:flex justify-around mx-auto text-lg lg:text-2xl filter drop-shadow-xl text-gray-600 font-serif'>
                <h1>Social Media</h1>
                <a href='https://www.instagram.com/kavinsebastiannn/'>IG</a>
                <a href='https://www.facebook.com/kavinsebastian99'>FB</a>
                <a href='#'>TW</a>
                <a href='https://www.linkedin.com/in/kavin-sebastian-96510a16a/'>IN</a>
                <div className='absolute w-1/12 -right-24 -top-5 sm:-top-8  -rotate-90'>
                  <Parallax speed={-5}>
                    <Image src={Arrow} alt='' srcSet='' width='30px' className='h-[50px]' />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>

          <Parallax speed={7}>
            <div className='w-full flex justify-center'>
              <Image src={hero} width='700' />
            </div>
          </Parallax>
          <div className='my-10 sm:my-0 sm:absolute sm:w-3/12 right-10 top-1/4 font-serif'>
            <Parallax speed={5}>
              <Fade left>
                <p className='flex flex-col justify-end items-end flex-nowrap'>
                  <div className='flex w-full py-2'>
                    <FaQuoteLeft />
                  </div>
                  a graduate from Binar Academy's Fullstack Developer wave#9, during my time at Binar Academy, I studied and created projects from web applications to the deployment process.
                  <FaQuoteRight />
                </p>
              </Fade>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
}
