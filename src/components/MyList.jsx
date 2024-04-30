import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const loadedUsers = useLoaderData();
  const [data,setData]=useState(loadedUsers);
  const navigate = useNavigate();
  console.log(data);
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        My Listed Tourist Spots
      </h1>
      {/* <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {data.map((selectedSpot,index)=><MyListedSpotsTable key={index} selectedSpot={selectedSpot}></MyListedSpotsTable>)}
      </div> */}

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="px-2 lg:p-3">Spot Name</th>
                <th className="px-2 lg:p-3">Country Name</th>
                <th className="px-2 lg:p-3">Location</th>

                <th className="px-2 lg:p-3">Season</th>
                <th className="px-2 lg:p-3">Average Cost</th>
                <th className="px-2 lg:p-3 text-right"></th>
                <th className="px-2 lg:p-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((singleData, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                  >
                    <td className="px-2 lg:p-3">
                      <p>{singleData.spotName}</p>
                    </td>

                    <td className="px-2 lg:p-3">
                      <p>{singleData.countryName}</p>
                    </td>

                    <td className="px-2 lg:p-3">
                      <p>{singleData.location}</p>
                    </td>

                    <td className="px-2 lg:p-3">
                      <p>{singleData.season}</p>
                    </td>

                    <td className="px-2 lg:p-3">
                      <p>{singleData.avgCost}</p>
                    </td>

                    <td className="px-2 lg:p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <button
                          onClick={() =>
                            navigate(`/updatePage/${singleData?._id}`)
                          }
                        >
                          Update
                        </button>
                      </span>
                    </td>

                    <td className="px-2 lg:p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
                        <button
                          onClick={() => {
                            Swal.fire({
                              title: "Do you want to Delete this Item ?",
                              showDenyButton: true,
                              showCancelButton: true,
                              confirmButtonText: "Yes",
                              denyButtonText: `Don't Delete`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                fetch(
                                  `https://tourism-management-server-c1n38sukh-yeasin-riyads-projects.vercel.app/deleteDocument/${singleData?._id}`,
                                  {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                )
                                  .then((res) => res.json())
                                  .then((data1) => {
                                    if (data1.deletedCount === 1) {
                                      Swal.fire("Delete!", "", "success");
                                      const remainingUsers=loadedUsers.filter(singleUser=>{
                                        return singleUser._id !== singleData._id
                                      })

                                      setData(remainingUsers)

                                    }
                                  });
                              } else if (result.isDenied) {
                                Swal.fire("Data is Not Deleted !!!");
                              }
                            });
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
