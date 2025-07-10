export const addStyleInputError = () => {
    document.getElementById('search').classList.remove('dark:border-primary')
    document.getElementById('search').classList.add('border', 'border-error', 'dark:border-error' )
  }

export const removeStyleInputError = () => {
  document.getElementById('search').classList.remove('border', 'border-error', 'dark:border-error' )
  document.getElementById('search').classList.add('dark:border-primary')
}

export const changeGlobalFont = (fontClass) => {
  document.documentElement.classList.remove('font-sans', 'font-serif', 'font-mono');
  document.documentElement.classList.add(fontClass);
}