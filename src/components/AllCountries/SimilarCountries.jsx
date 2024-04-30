import { useLoaderData } from "react-router-dom";
import SingleSimilarCoutriesCard from "./SingleSimilarCoutriesCard";

const SimilarCountries = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
        Similar Countries
      </h1>

      <div>
        {data.map((singleCountry, id) => (
          <SingleSimilarCoutriesCard key={id} singleCountry={singleCountry}></SingleSimilarCoutriesCard>
        ))}
      </div>
    </div>
  );
};

export default SimilarCountries;
