import './Cards.css';

export default function Cards({imageData}){
 
  return (
    <>
    <div className='cards-container'>
    {imageData.map((item, index)=>
    
    <div className="card" key={index}>
    <div className="front">
      <img src={item.links[0].href} alt="space" />
    </div>
    <div className="back">
      <h3>{item.data[0].description}</h3>

    </div>
  </div>
   )}
    </div>
    </>
  )
}