import { ExternalLinkIcon } from '../../assets/externalLinkIcon'
import { Definition } from './definition'
import { Title } from './title'

export const Meanings = ({result}) => {
  console.log(result.meanings)
  return (
    <div className='w-full'>
      <Title word={result.word} phonetics={result.phonetics[1].text} audio={result.phonetics[1].audio}/>
      {result.meanings.map((meaning, index) => (
        <Definition 
          key={index}
          partOfSpeech={meaning.partOfSpeech}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
        />
      ))}
      <div className='mb-[124px]'>
        <div className='flex-1 w-full border-neutral-100 dark:border-neutral-300 border-b mt-10 mb-5' />
        <div className='flex items-center'>
          <span className='text-body-S text-neutral-200 mr-5 underline'>Source</span>
          <a href={result.sourceUrls[0]} className='mr-2 underline'>{result.sourceUrls[0]}</a>
          <ExternalLinkIcon />
        </div>
      </div>
    </div>
  )
}
