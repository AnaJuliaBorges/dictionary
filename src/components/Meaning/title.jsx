import { PlayButton } from '../../assets/playButton'

export const Title = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='gap-2'>
        <h1 className='text-L font-bold'>Keyboard</h1>
        <p className='text-M text-primary'>Fonética</p>
      </div>
      <div>
        <audio id="pronunciation">
          <source src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={document.getElementById('pronunciation')?.play()} className='bg-transparent border-none group' > 
          <PlayButton />
        </button>
      </div>
    </div>
  )
}