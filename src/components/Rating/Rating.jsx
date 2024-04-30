const Rating = () => {
  return (
    <div className="text-center">
      <h1
        // data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-2 rounded-lg text-neutral-950 font-extrabold"
      >
        Please Rating Us
      </h1>

      <div className="rating rating-lg rating-half my-5">
        <input type="radio" name="rating-10" className="rating-hidden" />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-1"
          checked
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className="bg-green-500 mask mask-star-2 mask-half-2"
        />
      </div>
    </div>
  );
};

export default Rating;
