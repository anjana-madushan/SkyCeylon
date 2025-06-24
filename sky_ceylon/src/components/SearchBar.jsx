import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setLocation }) => {

  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleClick = () => {
    setLocation(input);
    setSuggestions([]);
  }

  useEffect(() => {
    //delay the api reponse by 0.5s, after the user pauses typing.
    //reduce the number of requests significantly to reduce unnecessary API calls for each key stroke.
    const delayDebounce = setTimeout(() => {
      const fetchData = async () => {
        try {
          if (query.length > 3) {
            const response = await axios.get(`${import.meta.env.VITE_WEATHER_API_BASE_URL}/search.json`, {
              params: {
                key: import.meta.env.VITE_WEATHER_API,
                q: query
              }
            });
            setSuggestions(response.data);
          } else {
            setSuggestions([]);
          }
        } catch (e) {
          console.error('Error with loading the the locations', e);
          setError('Faile to load the location suggestions!!!');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 500);
    //clear the timer if user types again
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSuggestionClick = (suggestionDetails) => {
    setInput(`${suggestionDetails.name}, ${suggestionDetails.region}, ${suggestionDetails.country}`);
    setLocation(suggestionDetails.name);
    setSuggestions([]);
  }


  return (
    <div className="relative w-full max-w-md">
      <input
        placeholder='Search City...'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setQuery(e.target.value);
        }}
        className='w-full px-6 py-2 rounded-md outline-none bg-neutral-800 text-gray-300'
      />
      <button type="submit"
        className="absolute right-1 top-1 bottom-1 px-4"
        onClick={handleClick}>
        <IoMdSearch className="text-xl text-blue-100" />
      </button>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-md max-h-48 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}, {suggestion.region}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar