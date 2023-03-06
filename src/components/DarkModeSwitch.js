"use client"

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(()=> setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && 
        (currentTheme === "dark" ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("dark")} />
      ))}
    </div>
  )
}

export default DarkModeSwitch;
