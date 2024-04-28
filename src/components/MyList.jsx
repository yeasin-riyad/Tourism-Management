import { useLoaderData } from "react-router-dom";


const MyList = () => {
  const data = useLoaderData();
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
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
                <th className="p-3">Spot Name</th>
                <th className="p-3">Country Name</th>
                <th className="p-3">Location</th>

                <th className="p-3">Season</th>
                <th className="p-3">Average Cost</th>
                <th className="p-3 text-right"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((singleData, index) => {
                return <tr
                  key={index}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{singleData.spotName}</p>
                  </td>

                  <td className="p-3">
                    <p>{singleData.countryName}</p>
                  </td>

                  <td className="p-3">
                    <p>{singleData.location}</p>
                  </td>

                  <td className="p-3">
                    <p>{singleData.season}</p>
                  </td>

                  <td className="p-3">
                    <p>{singleData.avgCost}</p>
                  </td>

                  <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <button>Update</button>
                    </span>
                  </td>

                  <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
                      <button>Delete</button>
                    </span>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
