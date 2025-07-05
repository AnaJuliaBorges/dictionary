import { useState } from "react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const handleToggleTheme = () => {
    document.getElementById('toggle-theme').click()
    setIsDark(!isDark)

    console.log(isDark)

    isDark
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark') 

    localStorage.setItem('isDark', isDark)
  }


  return (
    <button type='button' className="relative inline-flex items-center cursor-pointer gap-5" onClick={handleToggleTheme}>
      <input type="checkbox" value="" id="toggle-theme" className="sr-only peer" defaultChecked={isDark}/>

      <div className="w-10 h-5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] peer-checked:after:left-[5px] after:bg-white after:border-none after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-neutral-200 peer-checked:stroke-primary'>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
