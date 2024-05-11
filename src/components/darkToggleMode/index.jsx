// DarkModeToggle.js
import { useState, useEffect } from 'react';
import LightModeIcon from '../../assests/icons/sun.png' 
import DarkModeIcon from '../../assests/icons/night-mode.png'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      console.log('is it adding')
      htmlElement.classList.add('dark');
    } else {
      console.log('is it removing')
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='fixed bottom-[20px] left-[10px]'>
      <button onClick={toggleDarkMode} className='h-[50px] w-[50px] flex items-center justify-center bg-[#333] dark:bg-white rounded-[100%]'>
        <img src={LightModeIcon} className='h-[25px] opacity-0 dark:opacity-100 absolute transition-all duration-300' />
        <img src={DarkModeIcon} className='h-[25px] dark:opacity-0 absolute invert transition-all duration-300' />
      </button>
    </div>
  );
};

export default DarkModeToggle;
