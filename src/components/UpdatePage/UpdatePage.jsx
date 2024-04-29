import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UpdatePage = () => {
    const data=useLoaderData();
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
      const updateInformation=(e)=>{
        e.preventDefault();
    const form = e.target;
    const Image = form.image.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const avgCost = form.avgCost.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;
    const email = form.email.value;
    const name = form.name.value;
    const touristSpot = {
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
    };

    form.reset();
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

             fetch(`http://localhost:5001/touristSpot/${_id}`,{
                method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(touristSpot),
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.acknowledged){
                    Swal.fire("Saved!", "", "success");
                
                }
              })
          
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });

      }
  return (
    <div>
         <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        Update Form
      </h1>

       <section className="p-6 dark:bg-gray-100 dark:text-gray-900 my-5">
        <form
          onSubmit={updateInformation}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image</label>
                <input
                 defaultValue={Image}
                  name="image"
                  type="text"
                  placeholder="Image Url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourists Spot Name</label>
                <input
                  defaultValue={spotName}
                  name="spotName"
                  type="text"
                  placeholder="tourists spot name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className=" ">
                <label className="text-sm">Country Name</label>
              </div>
              <select  defaultValue={countryName} name="countryName"  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700">
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Brazil">Brazil</option>
                <option value="Argentina">Argentina</option>
                <option value="Mexico">Mexico</option>
                <option value="Peru">Peru</option>
              </select>
              <div className="col-span-full">
                <label className="text-sm">Location</label>
                <input
                 defaultValue={location}
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Short Description</label>
                <textarea
                 defaultValue={description}
                  name="description"
                  placeholder="Short Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Average Cost</label>
                <input
                 defaultValue={avgCost}
                  name="avgCost"
                  type="text"
                  placeholder="Average Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Season</label>
                <input
                 defaultValue={season}
                  name="season"
                  type="text"
                  placeholder="Season"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Travel Time</label>
                <input
                 defaultValue={travelTime}
                  name="travelTime"
                  type="text"
                  placeholder="Travel Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Total Visitors Per Year</label>
                <input
                 defaultValue={totalVisitors}
                  name="totalVisitors"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Email</label>
                <input
                 
                 defaultValue={email}
                 disabled
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Your Name</label>
                <input
                  defaultValue={name}
                  disabled
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-pink-700 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            
            
              <div className="col-span-full">
                <button className="btn btn-block text-3xl hover:bg-green-600">
                  Update
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section> 

    </div>
  )
}

export default UpdatePage