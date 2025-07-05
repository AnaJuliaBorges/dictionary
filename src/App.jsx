
import { Header } from './components/Header/header.jsx'
import { Title } from './components/Meaning/title.jsx'

function App() {

  return (
    <div className="flex items-center justify-items-center justify-center mt-12">
      <main className="flex flex-col gap-12 items-center w-lvh md:px-10 max-w-[737px]">

        <Header />
        <Title />

      </main>
    </div>
  )
}

export default App
