import axios from "axios";
import { createContext, useState } from "react"

const DictionaryApiContext = createContext();

function DictionaryApiProvider({children}) {
  const [statusError, setStatusError] = useState(0)
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  
  function handlePhonetic(phonetics) {
    const usPhonetic = phonetics.phonos.find(p => p.audio.includes('-us')) || phonetics.phonos[0];
    
    return {
      sound: phonetics.phono || usPhonetic?.text,
      audio: usPhonetic?.audio
    };
  }

  function handleDefinition(definition){
    return definition.map(({ definition, example }) => ({
      definition,
      example: example || null
    }));
    
  }

  function handleMeaning(apiResponse) {
    const allMeanings = apiResponse.flatMap(item => item.meanings);

    const meaningsGrouped = allMeanings.reduce((acc, meaning) => {
      const type = meaning.partOfSpeech;
      
      if (!acc[type]) {
        acc[type] = {
          synonyms: [],
          definitions: []
        };
      }
      
      // Adiciona sinônimos (removendo duplicados)
      acc[type].synonyms = [...new Set([
        ...acc[type].synonyms, 
        ...meaning.synonyms.filter(Boolean)
      ])];
      
      acc[type].definitions = [
        ...acc[type].definitions,
        ...handleDefinition(meaning.definitions)
      ];
      
      return acc;
    }, {});
    
    return Object.entries(meaningsGrouped).map(([type, { synonyms, definitions }]) => ({
      type,
      definitions,
      synonyms
    }));
  }

  function handleSource(apiResponse) {
    return [...new Set(apiResponse.flatMap(item => item.sourceUrls))];
  }

  const handleApiResponse = (apiResponse) => {
    if (!apiResponse || apiResponse.length === 0) {
      throw new Error('Invalid API response');
    }
    
    return {
      word: apiResponse[0].word,
      phonetic: handlePhonetic({
        phono: apiResponse[0].phonetic,
        phonos: apiResponse[0].phonetics
      }),
      meanings: handleMeaning(apiResponse),
      sources: handleSource(apiResponse)
    };
  }

  const fetchApi = async (word) => {
    console.log(word)
    setIsLoading(true)
    try {
      const responseApi = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const result = handleApiResponse(responseApi.data)
      setResponse(result);
      setStatusError(0);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
        return;
      }

      setResponse(null);
      setStatusError(error.response?.status || 500);
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    statusError,
    setStatusError,
    response,
    isLoading,
    fetchApi
  }

  return (
    <DictionaryApiContext.Provider value={value}>
      {children}
    </DictionaryApiContext.Provider>
  )
}

export { DictionaryApiContext, DictionaryApiProvider }