import React, { useState } from 'react'

export const DropdownFonts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [actualFont, setActualFont] = useState('Sans Serif')

  const fonts = [
    {
      name: "Sans Serif",
      class: "font-sans"
    },
    {
      name: "Serif",
      class: "font-serif"
    },
    {
      name: "Mono",
      class: "font-mono"
    }
  ]

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  const handleFont = (newFont) => {
    setActualFont(newFont)
    handleOpen()
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={handleOpen} className="flex items-center gap-4 bg-transparent text-body-M font-bold cursor-pointer" >
          {actualFont}
          <svg className="-mr-1 size-5 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>


      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 p-4 w-44 origin-top-right rounded-2xl bg-white dark:bg-neutral-500 shadow-[1px_6px_29px_0px_rgba(45,45,45,0.25)] dark:shadow-primary focus:outline-hidden text-body-M font-bold" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <ul className="py-1" role="none">
            {fonts.map((font) => 
              <li key={font.name} onClick={() => handleFont(font.name)} className={`block px-4 py-2 cursor-pointer ${font.class} hover:text-primary`}>{font.name}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
