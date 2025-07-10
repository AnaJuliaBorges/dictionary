import { useContext } from 'react'
import { DictionaryApiContext } from '../../contexts/dictionaryApiProvider'

export const ErrorSearch = () => {
  
  const {statusError} = useContext(DictionaryApiContext)
  
  return (
    <div className='w-full flex flex-col items-center justify-center mt-32'>
      <p className='text-L mb-9'>😟</p>
      {statusError === 404 ? (
        <>
          <h3 className='text-M font-bold mb-6'>No Definitions Found</h3>
          <p className='text-body-M text-neutral-200 text-center'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </>
      ) : 
        <>
          <h3 className='text-M font-bold mb-6'>Oh Não</h3>
          <p className='text-body-M text-neutral-200 text-center'>We are experiencing some problems, please try again later.</p>
        </>
      }
    </div>
  )
}

