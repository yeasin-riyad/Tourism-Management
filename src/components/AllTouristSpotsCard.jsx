import React from 'react'
import { Link } from 'react-router-dom';

const AllTouristSpotsCard = ({selectedSpot}) => {
    const {
        _id,
        Image,
        spotName,
        countryName,
        location,
        description,
        avgCost,
        season,
        travelTime,
        totalVisitors,
        email,
        name,
      } = selectedSpot;
  return (
    <div data-aos="zoom-in">
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[300px] object-fill object-center rounded-lg w-full"
          src={Image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">
          Spot Name : {spotName}
        </h2>
        <p className="">
          Average Cost : {avgCost}
        </p>

        <div className="flex justify-between gap-x-4 mt-5 lg:gap-x-0">
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-red-700 text-3xl font-bold">{season}</h1>
            <p>Season</p>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-red-700 text-3xl font-bold">{travelTime}</h1>
            <p>Travel Time</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 ">
            <h1 className="text-red-700 text-3xl font-bold">
              {totalVisitors}
            </h1>
            <p>Total Visitors</p>
          </div>

         
        </div>
        <div className="card-actions justify-end mt-3">
            <Link to={`/allTouristSpot/${_id}`}>
              <button className="btn btn-primary text-xl">View Details</button>
            </Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default AllTouristSpotsCard