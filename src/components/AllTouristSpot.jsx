import  { useEffect, useState } from "react";
import AllTouristSpotsCard from "./AllTouristSpotsCard";

const AllTouristSpot = () => {
  const [selectedSpots, setSelectedSpots] = useState([]);
  const [sortedData,setSortedData]=useState([])
  useEffect(() => {
    fetch("https://tourism-management-server-c1n38sukh-yeasin-riyads-projects.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => setSelectedSpots(data));
  }, []);
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
        All Tourist Spots
      </h1>
      <div  className="w-full text-center mt-1">
      <details className="dropdown">
        <summary className="m-1 btn">Sort</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button onClick={()=>{
                const sortData=  selectedSpots.sort((a,b)=>{
                  const aAvgCost=a.avgCost.split("$")[0]
                  const bAvgCost=b.avgCost.split("$")[0]
                  return aAvgCost-bAvgCost
              

               
               })
               setSortedData(sortData)
               
              //  console.log(sortData)
              //  selectedSpots.sort((a,b)=>{
              //   const aAvgCost=a.avgCost.split("$")[0]
              //   console.log(aAvgCost)
            }}>
              Average_Cost</button>
          </li>
         
        </ul>
      </details>
      </div>

     

      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {/* {selectedSpots.map((selectedSpot, index) => (
          <AllTouristSpotsCard
            key={index}
            selectedSpot={selectedSpot}
          ></AllTouristSpotsCard>
        ))} */}

        {sortedData.length !==0  && 
          sortedData.map((selectedSpot, index) => (
            <AllTouristSpotsCard
              key={index}
              selectedSpot={selectedSpot}
            ></AllTouristSpotsCard>
          ))
         ||   selectedSpots.map((selectedSpot, index) => (
          <AllTouristSpotsCard
            key={index}
            selectedSpot={selectedSpot}
          ></AllTouristSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
