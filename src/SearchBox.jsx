import { useState , useEffect} from "react";

export default function SearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  

  const handleNameChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
      onSearch(keyword); 
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
