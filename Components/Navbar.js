import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import sun from "../public/sun.svg";
import moon from "../public/moon.svg";
import Image from "next/image";
import NavItem from "./NavItem";

export default function Navbar() {
  const { SystemTheme, theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (!toggle) {
      setToggle(true);
    }
  }, []);

  const renderThemeChanger = () => {
    if (!toggle) return false;

    const currentTheme = theme === "system" ? SystemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Image src={moon} alt='' onClick={() => setTheme("light")} className='cursor-pointer' />
        // setBgToggle(true)
      );
    } else {
      return <Image src={sun} alt='' onClick={() => setTheme("dark")} className=' cursor-pointer' />;
    }
  };

  return (
    <div className={`w-full flex h-16 justify-end sm:justify-center sm:items-center`}>
      <div className='w-7/12 hidden sm:flex justify-around mx-auto text-xl filter drop-shadow-xl dark:text-gray-300 text-gray-600 font-sans'>
        <NavItem id='Home' offsite=''>Home</NavItem>
        <NavItem id='About' offset={-180}>About</NavItem>
        <NavItem id='Portofolio' offset={-350}>Portofolio</NavItem>
        <NavItem id='Contact' offset={-330}>Contact</NavItem>
      </div>

      <div className='sm:w-20 w-10 top-5 right-5  sm:right-10 sm:top-10 z-50 fixed'>{renderThemeChanger()}</div>
    </div>
  );
}
