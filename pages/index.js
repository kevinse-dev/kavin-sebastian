import Landing from "../Sections/Landing";
import DarkMode from "../Hook/DarkMode";
import About from "../Sections/About";
import Portofolio from "../Sections/Portofolio";
import Contact from "../Sections/Contact";


export default function Home() {
  // DarkMode()
  return (
    <>
    <div className='dark:bg-DarkPrimary motion-safe:scroll-smooth'>
      <Landing/>
      <About/>
      <Portofolio/>
      <Contact/>
    </div>
        </>
  )
}
