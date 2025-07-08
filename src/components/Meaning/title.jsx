import { PlayButton } from '../../assets/playButton'

export const Title = ({word, audio, phonetic}) => {

  const handleAudio = () => {
    document.getElementById('pronunciation').play()
  }

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='gap-2'>
        <h1 className='text-L font-bold'>{word}</h1>
        {phonetic && <p className='text-M text-primary'>{phonetic}</p>}
      </div>
      {audio && <div>
        <audio id="pronunciation">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={handleAudio} className='bg-transparent border-none group cursor-pointer' > 
          <PlayButton />
        </button>
      </div>}
    </div>
  )
}