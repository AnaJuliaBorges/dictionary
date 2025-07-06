
import { Header } from './components/Header/header.jsx'
import { SearchInput } from './components/searchInput.jsx'
import { ResultSearch } from './components/Meaning/resultSearch.jsx'
import { useState } from 'react'

function App() {
  const [statusError, setStatusError] = useState(0)
  const [result, setResult] = useState([])

  return (
    <div className="flex items-center justify-items-center justify-center mt-12">
      <main className="flex flex-col gap-12 items-center w-lvh md:px-10 max-w-[737px]">

        <Header />
        <SearchInput setResult={setResult} setStatusError={setStatusError}/>
        <ResultSearch result={result} statusError={statusError}/>

      </main>
    </div>
  )
}

export default App
