
import { Header } from './components/Header/header.jsx'
import { SearchInput } from './components/searchInput.jsx'
import { ResultSearch } from './components/Meaning/resultSearch.jsx'
import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'

function App() {
  const [statusError, setStatusError] = useState(0)
  const [result, setResult] = useState([])

  return (
    <ThemeProvider>
      <div className="flex items-center justify-items-center justify-center mt-12 mx-5">
        <main className="flex flex-col gap-12 items-center w-lvh sm:mx-10 max-w-[800px]">

          <Header />
          <SearchInput setResult={setResult} setStatusError={setStatusError}/>
          <ResultSearch result={result} statusError={statusError}/>

        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
