import React from "react";
import Image from "next/image";
import bg1 from "../public/main-bg.jpg";
import bg2 from "../public/covid.png";
import bg3 from "../public/ananda.png";
import bg4 from "../public/gitlab.png";
import Parallax from "react-rellax";

export default function Portofolio() {
  return (
    <section id='Portofolio'>
      <Parallax speed={3}>
        <h1 className='text-center my-20 font-serif'>Portofolio</h1>
        <div className='flex my-10 lg:flex-row flex-col'>
          <div className='col lg:w-6/12 flex'>
            <div className='flex flex-col w-full items-center lg:items-end ml-5'>
              <div className='bg-1 shadow-md my-10 w-10/12 rounded-lg'>
                <div className='flex justify-center items-center'>
                  <div className='col hidden sm:inline w-3/12 mt-5 ml-5 shadow-2xl'>
                    <Image src={bg1} />
                  </div>
                  <div className='flex flex-col font-sans font-semibold text-gray-900 w-10/12 text-sm'>
                    <p className='ml-5 mt-5 filter drop-shadow-md'>The first project was studied at Binar Academy where this website created traditional games, namely game suits. the technology I use only uses HTML, CSS, bootstrap, and javascript.</p>
                    <a className='bg-GreenPrimary cursor-pointer text-white py-1 px-3 m-5 rounded-md font-display uppercase text-center w-6/12 lg:w-3/12' href='https://gemology.vercel.app/' target='_blank'>See to website</a>
                  </div>
                </div>
              </div>

              <div className='bg-2 w-10/12 rounded-lg shadow-md'>
                <div className='flex items-center'>
                  <div className='col hidden shadow-2xl sm:inline w-3/12 mt-5 ml-5'>
                    <Image src={bg2} />
                  </div>
                  <div className='flex flex-col font-sans font-semibold text-gray-900 w-10/12 text-sm'>
                    <p className='ml-5 mt-5 filter drop-shadow-md'>The second project where we learn to use the public rest API, I use the API from KAWAL COVID to monitor daily Covid 19 data and also learn the REDUX concept. The technology I use is NextJS and Tailwindcss</p>
                    <a className='bg-GreenPrimary cursor-pointer text-white py-1 px-3 m-5 rounded-md font-display uppercase text-center w-6/12 lg:w-3/12' href='https://cov-19.vercel.app/' target='_blank'>see to website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col lg:w-6/12 flex items-center justify-center'>
            <div className='flex flex-col w-full items-center lg:items-start ml-5'>
              <div className='bg-3 shadow-md my-10 w-10/12 rounded-lg'>
                <div className='flex'>
                  <div className='col hidden sm:inline w-3/12 mt-5 ml-5'>
                    <Image src={bg3} />
                  </div>
                  <div className='flex flex-col font-sans font-semibold text-gray-900 w-10/12 text-sm'>
                    <p className='ml-5 mt-5 filter drop-shadow-md'>In the learning process, I also took the time to open a restaurant business specifically on digital platforms such as GOJEK, GRAB, and SHOPEE. The technology I use is only NextJS and Tailwindcss</p>
                    <a className='bg-GreenPrimary cursor-pointer text-white py-1 px-3 m-5 rounded-md font-display uppercase text-center w-6/12 lg:w-3/12' href='https://anandakitchen.vercel.app/' target='_blank'>see to website</a>
                  </div>
                </div>
              </div>
              <div className='bg-4 shadow-md w-10/12 rounded-lg'>
                <div className='flex items-center'>
                  <div className='col hidden sm:inline w-3/12 mt-5 shadow-2xl ml-5'>
                    <Image src={bg4} />
                  </div>
                  <div className='flex flex-col font-sans font-semibold text-gray-900 w-10/12 text-sm'>
                    <p className='ml-5 mt-5 filter drop-shadow-md'>The center of the results of my coding is in GITLAB and GITHUB at this time I am also still repeating the previous material to strengthen what I have learned.</p>
                    <a className='bg-GreenPrimary cursor-pointer text-white py-1 px-3 m-5 rounded-md font-display uppercase text-center w-6/12 lg:w-3/12' href='https://gitlab.com/Kavinsebastian' target='_blank'>see to website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
