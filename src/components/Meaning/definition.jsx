export const Definition = ({partOfSpeech, definitions, synonyms}) => {

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex gap-5 mb-8 items-center mt-10'>
        <h2 className='text-M font-bold italic'>{partOfSpeech}</h2>
        <div className='flex-1 w-full border-neutral-100 dark:border-neutral-300 border-b' />
      </div>
      <h3 className='text-S text-neutral-200 mb-6'>Meaning</h3>
      <ul className='list-disc marker:text-primary pl-10'>
        {definitions.map((definition, index) => (
          <li key={index} className="text-body-M font-light mb-3">{definition.definition}</li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className='flex gap-5 mt-10 flex-wrap'>
          <h3 className='text-S text-neutral-200'>Synonyms</h3>
          {synonyms.map((synonym, index) => (
            <span className='text-S text-primary hover:underline font-bold cursor-pointer' key={index}>{synonym}</span>
          ))}
        </div>
      )}
    </div>
  )
}
