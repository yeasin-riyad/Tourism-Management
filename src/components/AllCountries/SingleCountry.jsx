import { useNavigate } from "react-router-dom";

const SingleCountry = ({ singleCountry }) => {
  const { image, country, description } = singleCountry;
  const navigate=useNavigate();
  return (
    <div onClick={()=>{
      navigate(`/specificCountrie/${country}`)

    }} className="grid grid-cols-4 mt-5 card lg:card-side bg-base-100 shadow-xl max-h-72">
      <figure className="col-span-2 h-72   rounded-sm">
        <img className="object-fill object-center"
          src={image}
          alt="Country"
        />
      </figure>
      <div className="card-body col-span-2">
        <h2 className="card-title">{country}</h2>
        <p className="truncate lg:text-wrap">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Similar Countries</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
