import { Link } from "react-router-dom";

const SingleSimilarCoutriesCard = ({ singleCountry }) => {
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
  } = singleCountry;
  return (
    <div className="grid grid-cols-4 mt-5 card lg:card-side bg-base-100 shadow-xl ">
      <figure className="col-span-2 h-72   rounded-sm">
        <img className="object-fill object-center" src={Image} alt="Country" />
      </figure>
      <div className="card-body col-span-2">
        <h1 className="card-title">{spotName} .</h1>

        <h2 className="card-title">Country: {countryName} ,</h2>
        <h3 className="card-title">{location} .</h3>
        <h3 className="card-title">Average Cost: {avgCost}</h3>
        <h3 className="card-title">Season: {season}</h3>

        <p className="truncate">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/allTouristSpot/${_id}`}>
            <button className="btn btn-primary text-xl">View Details</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default SingleSimilarCoutriesCard;
