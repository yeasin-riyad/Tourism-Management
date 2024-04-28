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