import { useContext } from "react"
import { DictionaryApiContext } from "../../contexts/dictionaryApiProvider"

export const Definition = ({type, definitions, synonyms}) => {

  const {fetchApi} = useContext(DictionaryApiContext)

  const handleSynonym = (synonym) => {
     window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    fetchApi(synonym)
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex gap-5 mb-8 items-center mt-10'>
        <h2 className='text-M font-bold italic'>{type}</h2>
        <div className='flex-1 w-full border-neutral-100 dark:border-neutral-300 border-b' />
      </div>
      <h3 className='text-S text-neutral-200 mb-6'>Meaning</h3>
      <ul className='list-disc marker:text-primary pl-10'>
        {definitions.map((definition, index) => (
            <li key={index} className="text-body-M font-light mb-3">
              {definition.definition}
              {definition.example && (
                  <p className="text-body-M text-neutral-200 mt-3">"{definition.example}"</p>
              )}
            </li>
            
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className='flex gap-5 mt-10 flex-wrap'>
          <h3 className='text-S text-neutral-200'>Synonyms</h3>
          {synonyms.map((synonym, index) => (
            <button onClick={() => handleSynonym(synonym)} className='text-S text-primary hover:underline font-bold cursor-pointer' key={index}>{synonym}</button>
          ))}
        </div>
      )}
    </div>
  )
}
