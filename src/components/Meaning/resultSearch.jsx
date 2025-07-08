import { ErrorSearch } from './errorSearch'
import { Meanings } from './meanings'

export const ResultSearch = ({result, statusError}) => {

  return (
    <>
      {statusError != 0 && <ErrorSearch status={statusError} />}
      {result.length > 0 && !statusError && <Meanings result={result[0]}/>}
    </>
  )
}
