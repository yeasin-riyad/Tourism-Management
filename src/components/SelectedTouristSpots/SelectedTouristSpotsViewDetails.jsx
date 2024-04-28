import { useLoaderData } from "react-router-dom"

const SelectedTouristSpotsViewDetails = () => {
    const data=useLoaderData()
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
      } = data;
    
      return (
        <div data-aos="fade-up" data-aos-duration="3000">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
                className="h-[250px] object-fill object-center rounded-lg w-full md:h-[350px] lg:h-[500px]"
              src={Image}
            />
          </figure>
          <div className="card-body">

          
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Spot Name
              </div>
              <div className="collapse-content">
                <p>{spotName}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Description
              </div>
              <div className="collapse-content">
                <p>{description}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Country Name
              </div>
              <div className="collapse-content">
                <p>{countryName}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Location
              </div>
              <div className="collapse-content">
                <p>{location}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Average Cost 
              </div>
              <div className="collapse-content">
                <p>{avgCost}</p>
              </div>
            </div>
    
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Season
              </div>
              <div className="collapse-content">
                <p>{season}</p>
              </div>
            </div>
    
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Travel Time
              </div>
              <div className="collapse-content">
                <p>{travelTime}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Total Visitors
              </div>
              <div className="collapse-content">
                <p>{totalVisitors}</p>
              </div>
            </div>
           
    
           
    
            
          </div>
        </div>
      </div>
      )
}

export default SelectedTouristSpotsViewDetails