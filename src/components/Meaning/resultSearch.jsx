import { ErrorSearch } from './errorSearch'
import { Meanings } from './meanings'

export const ResultSearch = ({result, statusError}) => {

  console.log(result)

  return (
    <>
      {statusError != 0 && <ErrorSearch status={statusError} />}
      {result.length > 0 && <Meanings result={result[0]}/>}
    </>
  )
}
