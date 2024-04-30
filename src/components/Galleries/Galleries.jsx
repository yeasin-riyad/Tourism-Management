import { useEffect, useState } from "react";

const Galleries = () => {
  const [selectedSpots, setSelectedSpots] = useState([]);
  useEffect(() => {
    fetch("https://tourism-management-server-c1n38sukh-yeasin-riyads-projects.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => setSelectedSpots(data));
  }, []);
  return (
    <div>
      <h1
        
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
        Galleries
      </h1>

      <div className="carousel carousel-end rounded-box mt-5 ">
        {selectedSpots.map((selectedSpot,index)=>{
            return  <div className="carousel-item h-80" key={index}>
            <img src={selectedSpot.Image} alt="galleries" />
          </div>
        })}
   
  </div>
    </div>
  );
};

export default Galleries;
