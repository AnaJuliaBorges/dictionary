import { useState } from "react";
import { SearchLoupe } from "../assets/searchLoupe"
import axios from "axios";
import { LoadingSpinner } from "./Meaning/loadingSpinner";

export const SearchInput = ({setResult, setStatusError}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false)

  const fetchResults = async () => {
      if (!searchTerm.trim()) {
        document.getElementById('search').classList.remove('dark:border-primary')
        document.getElementById('search').classList.add('border', 'border-error', 'dark:border-error' )
        setIsEmpty(true);
        return;
      }

      document.getElementById('search').classList.remove('border', 'border-error', 'dark:border-error' )
      document.getElementById('search').classList.add('dark:border-primary')
      setIsEmpty(false)

      setIsLoading(true);
      setStatusError(0);
      
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        setResult(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setStatusError(err.status);
          console.error('Search error:', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchResults();
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input 
          id='search'
          type="text"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          placeholder='Search a word' 
          className="w-full px-6 py-5 rounded-2xl font-bold bg-neutral-50 dark:bg-neutral-500 dark:border dark:border-primary focus:outline-none" 
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        
        <div className='absolute right-5 top-1/2 transform -translate-y-1/2'>
          {isLoading ? (
              <LoadingSpinner />
            ) : (
              <SearchLoupe className="cursor-pointer" onClick={fetchResults}/>
            )}
        </div>
      </div>
      {isEmpty && <span className='text-error'>Whoops, can’t be empty…</span>}
    </div>
    

  )
}
