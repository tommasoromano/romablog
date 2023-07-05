import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import Typography from "./typography";

const ToggleTheme = ({className='w-6 h-6'}) => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className={className} role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className={className} role="button" onClick={() => setTheme('dark')} />
      )
    }
  };

  return (renderThemeChanger());
};

export default ToggleTheme;