import { ErrorSearch } from './errorSearch'
import { Meanings } from './meanings'

export const ResultSearch = ({result, statusError}) => {
  
  return (
    <>
      {statusError != 0 && <ErrorSearch status={statusError} />}
      {result && !statusError && <Meanings response={result}/>}
    </>
  )
}
