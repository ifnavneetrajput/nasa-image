import { useState,useEffect } from "react"
import Cards from "./Cards";


export default function Home(){
 
  const [imageData , setimageData] = useState([]);
  const url = `https://images-api.nasa.gov/search?media_type=image`;
  async  function NasaImages(){
    try{

      let response = await fetch(url);
      let data = await response.json();
      console.log(data.collection.items[0].data[0].description)
      setimageData(data.collection.items);

    }catch(err){
      console.log("error is :",err)
    }
  }
  useEffect(() => {
    NasaImages();
  }, []);


  return(
    <>
 
      <div className="Content">
      {imageData && <Cards imageData={imageData} />}
      
      </div>

    </>
  )
}