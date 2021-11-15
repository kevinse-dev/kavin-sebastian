import React,{useState} from "react";
import Image from "next/image";
import Article from "../public/photo-1599420186946-7b6fb4e297f0.jpg";
import Parallax from "react-rellax";
import Fade from "react-reveal";
import Cards from "../Components/Cards";
// import Bootstrap from '/bootstrap.svg'
import {useSprings, animated} from 'react-spring'

function Envalope1(props){
  return<g {...props}>
    <Cards text='HTML' src='html5' />
  </g>
}
function Envalope2(props){
  return<g {...props}>
    <Cards text='CSS' src='css3' />
  </g>
}
function Envalope3(props){
  return<g {...props}>
    <Cards text='Bootstrap' src='bootstrap'/>
  </g>
}
function Envalope4(props){
  return<g {...props}>
    <Cards text='Tailwind' src='tailwind-css-icon'/>
  </g>
}
function Envalope5(props){
  return<g {...props}>
    <Cards text='Javascript' src='javascript (1)'/>
  </g>
}
function Envalope6(props){
  return<g {...props}>
    <Cards text='NodeJS' src='nodejs'/>
  </g>
}
function Envalope7(props){
  return<g {...props}>
    <Cards text='express' src='expressjs'/>
  </g>
}
function Envalope8(props){
  return<g {...props}>
    <Cards text='MySql' src='mysql'/>
  </g>
}
function Envalope9(props){
  return<g {...props}>
    <Cards text='PostgreSql' src='postgresql-horizontal'/>
  </g>
}
function Envalope10(props){
  return<g {...props}>
    <Cards text='React' src='react-icon'/>
  </g>
}
function Envalope11(props){
  return<g {...props}>
    <Cards text='Firebase' src='firebase'/>
  </g>
}
function Envalope12(props){
  return<g {...props}>
    <Cards text='EsLint' src='eslint'/>
  </g>
}
function Envalope13(props){
  return<g {...props}>
    <Cards text='NextJs' src='nextjs'/>
  </g>
}

export default function About() {
  const [toggle, setToggle] = useState(false)

  const envelopes = [
    <Envalope1 key='Envelope-1'/>,
    <Envalope2 key='Envelope-2'/>,
    <Envalope3 key='Envelope-3'/>,
    <Envalope5 key='Envelope-5'/>,
    <Envalope6 key='Envelope-6'/>,
    <Envalope7 key='Envelope-7'/>,
    <Envalope8 key='Envelope-8'/>,
    <Envalope9 key='Envelope-9'/>,
    <Envalope10 key='Envelope-10'/>,
    <Envalope11 key='Envelope-11'/>,
    <Envalope12 key='Envelope-12'/>,
    <Envalope13 key='Envelope-13'/>
  ]

  const springs = useSprings(envelopes.length, envelopes.map((_,i) => {
    return{
      opacity: toggle ? 1 : 0,
      delay: i * 300
    }
  }))

  const animatedEnvelopes = springs.map((animatedStyle, index) => {
    return <animated.g key={index} style={animatedStyle}>{envelopes[index]}</animated.g>
  })

  return (
    <Fade bottom>
      <section id='About'>
        <Parallax speed={5}>
          <h1 className='text-center font-serif'>About</h1>
          <div className='md:flex justify-center'>
            <div className='col md:w-3/12 justify-center flex'>
              <div className='flex justify-center items-center'>
                <div className="shadow-xl">

                <Image src={Article} height='500' />
                </div>
              </div>
            </div>
            <Fade right>
            <div className='col md:w-6/12 ml-10 mt-20 font-sans'>
              <h1 className='text-2xl my-10'>Who Am I ?</h1>
              <p>
                I am a man from Bandung, 22 years old, graduated from Vocational High School in 2017, experienced in clothing and retail companies, I want to switch careers to the digital world. I
                studied at Binar Academy as a fullstack web development. The technologies I learned are:
              </p>
                <button onClick={() => {setToggle(!toggle)}} className='px-4 py-2 hover:bg-DarkThrid dark:text-white hover:text-white rounded-sm'><Image src='/idea.png' width='15' height='15'/> Tap to See</button>
              <div className="grid grid-cols-4 gap-4">
              {/* <Fade bottom>
              <Cards text='HTML' src='html5' />
              </Fade>
              <Fade bottom>
              <Cards text='CSS' src='css3' />
              </Fade>
              <Cards text='Bootstrap' src='bootstrap'/>
              <Cards text='Tailwind' src='tailwind-css-icon'/>
              <Cards text='Javascript' src='javascript (1)'/>
              <Cards text='NodeJS' src='nodejs'/>
              <Cards text='express' src='expressjs'/>
              <Cards text='MySql' src='mysql'/>
              <Cards text='PostgreSql' src='postgresql-horizontal'/>
              <Cards text='React' src='react-icon'/>
              <Cards text='Firebase' src='firebase'/>
              <Cards text='EsLint' src='eslint'/> */}
              {
                animatedEnvelopes
              }
              </div>
            </div>
            
            </Fade>
            
          </div>
          
        </Parallax>
      </section>
    </Fade>
  );
}
