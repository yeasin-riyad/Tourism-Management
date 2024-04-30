import { useEffect, useState } from "react"
import SelectedTouristSpotsCard from "./SelectedTouristSpotsCard"


const SelectedTouristSpots = () => {
    const [selectedSpots,setSelectedSpots]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/touristSpot')
        .then(res=>res.json())
        .then(data=>setSelectedSpots(data))
    },[])
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
       Famous Tourist Spots
      </h1>
        

      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {selectedSpots.map((selectedSpot,index)=>{
            if(index<8) return <SelectedTouristSpotsCard key={index} selectedSpot={selectedSpot}></SelectedTouristSpotsCard>
            else return;
        })}

      </div>

     
    </div>
  )
}

export default SelectedTouristSpots