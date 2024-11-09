import { useState, useEffect } from "react";
import Cards from "./Cards";
import SearchBox from "./SearchBox";
import Spinner from "./Loading";

export default function Home() {
  const [imageData, setImageData] = useState([]);
  const [fetching , setfetching] =useState(false);
  const [error , seterror] = useState(false);
  const [page , setpage] = useState(1);
  const [searchTerm , setsearchTerm] = useState("");
  
  const fetchImages = async (searchTerm ) => {
    setfetching(true)
    const url = searchTerm
      ? `https://images-api.nasa.gov/search?keywords=${searchTerm}&page=${page}` : `https://images-api.nasa.gov/search?media_type=image`;

      console.log("API Request URL:", url);

    try {
      let response = await fetch(url);
      let data = await response.json();
      setImageData(data.collection.items);
      
      setfetching(false);
    } catch (err) {
      throw err;
    }
  };


  useEffect(() => {
    fetchImages(); 
  }, [page , searchTerm]);



  const handleSearchSubmit = (searchTerm) => {
  try{
    fetchImages(searchTerm); 
    setpage(1);
  }catch(err){
    seterror(true);
    setfetching(false);
  }
  };

  const handleNext= () => {
    setpage((prev) => prev + 1); 
  };

  const handlePrevious = () => {
    if (page > 1) setpage((prev) => prev - 1); 
  };




  return (
    <> 

      {fetching && <Spinner/> }
      { !fetching && <SearchBox onSearch={handleSearchSubmit} />}
     
      {error && <h2>we can't match the  data!!</h2>}
      <div className="Content">
        { !fetching && imageData && <Cards imageData={imageData} />}
      </div>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
        
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
