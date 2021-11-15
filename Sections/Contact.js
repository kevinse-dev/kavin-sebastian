import React from 'react'
import Image from 'next/image'
import In from '../public/In.png'
import Ig from '../public/Ig.png'
import Fb from '../public/Fb.png'
import Tw from '../public/Tw.png'
import Addrs from '../public/Addrs.png'
import Parallax from 'react-rellax'

export default function Contact() {
    return (
            <Parallax speed={2}>
        <section id='Contact'>
            <h1 className='text-center my-20 font-serif'>Contact</h1>
            <div className="flex flex-col xl:flex-row justify-center items-center pb-10">
                <div className="col flex xl:mr-10 bg-DarkThrid  sm:w-10/12 md:w-6/12 xl:h-[500px] 2xl:h-[500px] h-auto  lg:w-4/12">
                <div className=" bg-DarkSecondary m-2 lg:m-5 w-4/12">
                    <div className="flex flex-col my-5">
                        <div className="lg:m-5 flex flex-col justify-center items-center">
                        <a href="https://www.linkedin.com/in/kavin-sebastian-96510a16a/" className='hover:opacity-80' target='_blank'>
                        <Image src={In}/>
                        </a><br />
                        
                        <a href="https://z-p4.www.instagram.com/Kavinsebastiannn/" className='hover:opacity-80' target='_blank'>
                        <Image src={Ig}/>
                        </a><br />
                        <a href="#" className='hover:opacity-80' target='true'>
                        <Image src={Fb}/>
                        </a><br />
                        <a href="#" className='hover:opacity-80' target='true'>
                        <Image src={Tw}/>
                        </a><br />
                        </div>
                    </div>
                </div>
                <div className=" bg-DarkSecondary flex justify-center items-center w-full sm:m-5 ml-0 text-black">
                    <div className="sm:p-2  bg-DarkFour flex flex-col">
                    <h1 className='sm:my-5 sm:text-xl text-sm'>www.Kevinsebastian.com</h1>
                    <h1 className='sm:my-5 sm:text-xl text-sm'>+6289684820181</h1>
                    <h1 className='sm:my-5 sm:text-xl text-sm'>kavin.sebastian25@gmail.com</h1>
                    <h1>Cileunyi, Bandung, Indonesia 40622</h1>
                    </div>
                </div>
                </div>
                <div className="col text-white sm:w-6/12 xl:mt-0 mt-10 xl:w-3/12">
                <form action="">
                    <div className="Addres flex">
                        <div className="label bg-DarkThrid w-full font-display flex">
                    <label htmlFor="input" className='w-6/12 pl-2'>Name
                    </label>
                    <input type="text" placeholder='Username' className='bg-DarkSecondary border-2 p-1 border-gray-700 text-white focus:outline-none'/>
                        </div>
                    </div>
                    <div className="Addres flex my-5">
                        <div className="label bg-DarkThrid w-full font-display flex">
                    <label htmlFor="input" className='w-6/12 pl-2'>Email
                    </label>
                    <input type="text" placeholder='Email' className=' bg-DarkSecondary border-2 p-1 border-gray-700 text-white focus:outline-none'/>
                        </div>
                    </div>
                    <div className="Addres flex my-5">
                        <div className="label bg-DarkThrid w-full font-display flex">
                    <label htmlFor="input" className='w-6/12 pl-2'>Website URL
                    </label>
                    <input type="text" placeholder='Your Website' className=' bg-DarkSecondary border-2 p-1 border-gray-700 text-white focus:outline-none'/>
                        </div>
                    </div>
                    <div className="Addres flex flex-col my-5">
                        <div className="my-5 label bg-DarkThrid w-6/12 flex font-display">
                    <label htmlFor="input" className='w-6/12 pl-2 py-2'>Comments
                    </label>
                        </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Comments' className='bg-DarkSecondary focus:outline-none'></textarea>
                    </div>
                </form>
                <div className="flex justify-end -mt-2 uppercase hover:opacity-80">
                <a href="#" className='bg-black px-10 font-display py-2 hover:opacity-80'>SEND</a>
                </div>
                </div>
            </div>
        </section>
            </Parallax>
    )
}
