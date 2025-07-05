import { BookIcon } from '../../assets/bookIcon'
import { DropdownFonts } from './dropdownFonts'
import { ThemeToggle } from './themeToggle'

export const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <BookIcon />
      <div className='flex gap-6 items-center'>
        <DropdownFonts />
        <div className='h-8 border-neutral-100 border-l'/>
        <ThemeToggle />
      </div>
    </div>
  )
}

