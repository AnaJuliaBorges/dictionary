
import { Header } from './components/Header/header.jsx'
import { SearchInput } from './components/searchInput.jsx'
import { ResultSearch } from './components/Meaning/resultSearch.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'
import { useDictionaryAPI } from './components/hooks/useDictionaryAPI.js'

function App() {
  const {response, statusError, fetchApi, isLoading} = useDictionaryAPI()

  const hasError = statusError !== 0

  return (
    <ThemeProvider>
      <div className="flex items-center justify-items-center justify-center mt-12 mx-5">
        <main className="flex flex-col gap-12 items-center w-lvh sm:mx-10 max-w-[800px]">

          <Header />
          <SearchInput fetchApi={fetchApi} isLoading={isLoading}/>
          
          {(response || hasError) &&
            <ResultSearch result={response} statusError={statusError}/>
          }

        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
