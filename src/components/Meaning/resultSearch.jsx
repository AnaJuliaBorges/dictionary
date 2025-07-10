import { useContext } from 'react'
import { ErrorSearch } from './errorSearch'
import { Meanings } from './meanings'
import { DictionaryApiContext } from '../../contexts/dictionaryApiProvider'

export const ResultSearch = () => {
  const { response, statusError } = useContext(DictionaryApiContext)
  
  return (
    <>
      {statusError != 0 && <ErrorSearch />}
      {response && !statusError && <Meanings />}
    </>
  )
}
