import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'
import { DictionaryApiProvider } from './contexts/dictionaryApiProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <DictionaryApiProvider>
        <App />
      </DictionaryApiProvider>
    </ThemeProvider>
  </StrictMode>,
)
