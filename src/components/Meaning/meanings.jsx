import { ExternalLinkIcon } from '../../assets/externalLinkIcon'
import { Definition } from './definition'
import { Title } from './title'

export const Meanings = ({response}) => {

  return (
    <div className='w-full'>
      <Title word={response.word} phonetic={response.phonetic.sound} audio={response.phonetic.audio}/>
      {response.meanings.map((meaning, index) => (
        <Definition 
          key={index}
          type={meaning.type}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
        />
      ))}
      <div className='mb-[124px]'>
        <div className='flex-1 w-full border-neutral-100 dark:border-neutral-300 border-b mt-10 mb-5' />
        <div className='flex items-center'>
          <span className='text-body-S text-neutral-200 mr-6'>Source(s)</span>
          {response.sources.map((source, index) => (
              <a key={index} href={source} target="_blank" className='mr-4 flex items-center underline gap-2'>
                {source}
                <ExternalLinkIcon />
              </a>
          ))}
        </div>
      </div>
    </div>
  )
}
