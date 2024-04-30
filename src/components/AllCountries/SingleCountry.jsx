const SingleCountry = ({ singleCountry }) => {
  const { image, country, description } = singleCountry;
  return (
    <div className="grid grid-cols-4 mt-5 card lg:card-side bg-base-100 shadow-xl">
      <figure className="col-span-2 h-full">
        <img
          src={image}
          alt="Country"
        />
      </figure>
      <div className="card-body col-span-2">
        <h2 className="card-title">{country}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Similar Countries</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
