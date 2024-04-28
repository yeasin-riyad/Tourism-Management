
import { useLoaderData } from 'react-router-dom'
import MyListedSpotsTable from './MyListedSpotsTable'

const MyList = () => {
  const data=useLoaderData()
  console.log(data)
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        My Listed Tourist Spots
      </h1>
      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {data.map((selectedSpot,index)=><MyListedSpotsTable key={index} selectedSpot={selectedSpot}></MyListedSpotsTable>)}
      </div>
    </div>
  )
}

export default MyList