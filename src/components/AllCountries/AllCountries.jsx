import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const AllCountries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }
        ,[])
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
        All Countries Tourist Spots
      </h1>

      {countries.map((singleCountry,index)=><SingleCountry key={index} singleCountry={singleCountry}></SingleCountry>)}

      

   
    </div>
  );
};

export default AllCountries;
