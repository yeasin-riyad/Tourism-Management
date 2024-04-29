
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './ContextApi/FirebaseProvider';





const AddTouristSpot = () => {
  const{loggedUser}=useContext(AuthContext)
  
  const addInformation=async (e)=>{
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
    // console.log(touristSpot)
    await fetch('http://localhost:5001/touristSpot',{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(touristSpot),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Tourist Spot Added Successfully.',
          icon: 'success',
          confirmButtonText: 'Enjoy !!'
        })
      }
    })
    

   


  }

  
    return (
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={addInformation}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image</label>
                <input
                 required
                  name="image"
                  type="text"
                  placeholder="Image Url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourists Spot Name</label>
                <input
                 required
                  name="spotName"
                  type="text"
                  placeholder="tourists spot name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className=" ">
                <label className="text-sm">Country Name</label>
                {/* <input name="countryName" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
              </div>{" "}
              <select  required name="countryName"  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50">
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
                 required
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Short Description</label>
                <textarea
                 required
                  name="description"
                  placeholder="Short Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Average Cost</label>
                <input
                 required
                  name="avgCost"
                  type="text"
                  placeholder="Average Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Season</label>
                <input
                 required
                  name="season"
                  type="text"
                  placeholder="Season"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Travel Time</label>
                <input
                 required
                  name="travelTime"
                  type="text"
                  placeholder="Travel Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Total Visitors Per Year</label>
                <input
                 required
                  name="totalVisitors"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Email</label>
                <input
                 
                 defaultValue={loggedUser.email}
                 disabled
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Your Name</label>
                <input
                  defaultValue={loggedUser.displayName}
                  disabled
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <button className="btn btn-block text-3xl hover:bg-green-600">
                  Add Information
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    );
  
}

export default AddTouristSpot
