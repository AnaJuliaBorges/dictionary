import { useContext, useState } from "react";
import { SearchLoupe } from "../assets/searchLoupe"
import { LoadingSpinner } from "./Meaning/loadingSpinner";
import { addStyleInputError, removeStyleInputError } from "../utils/domManipulation";
import { DictionaryApiContext } from "../contexts/dictionaryApiProvider";

export const SearchInput = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isEmpty, setIsEmpty] = useState(false)
  
  const {fetchApi, isLoading} = useContext(DictionaryApiContext)
  
  const fetchResults = async () => {
      if (!searchTerm.trim()) {
        addStyleInputError()
        setIsEmpty(true);
        return;
      }
      
      removeStyleInputError()
      setIsEmpty(false)

      fetchApi(searchTerm)
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
          className="w-full px-6 py-5 rounded-2xl font-bold bg-neutral-50 dark:bg-neutral-500 focus:outline focus:outline-primary caret-primary" 
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
