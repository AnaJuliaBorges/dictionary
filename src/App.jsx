
import { Header } from './components/Header/header.jsx'
import { SearchInput } from './components/searchInput.jsx'
import { ResultSearch } from './components/Meaning/resultSearch.jsx'
import { DictionaryApiContext } from './contexts/dictionaryApiProvider.jsx'
import { useContext } from 'react'

function App() {
  const {response, statusError} = useContext(DictionaryApiContext)

  return (
        <div className="flex items-center justify-items-center justify-center mt-12 mx-5 lg:mx-0">
          <main className="w-full flex flex-col gap-12 items-center max-w-[737px]">

            <Header />
            <SearchInput />
            
            {(response || Boolean(statusError)) &&
              <ResultSearch />
            }

          </main>
        </div>

  )
}

export default App
