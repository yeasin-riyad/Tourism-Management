import AllCountries from "./AllCountries/AllCountries"
import SelectedTouristSpots from "./SelectedTouristSpots/SelectedTouristSpots"
import Slider from "./Slider"

const HomePage = () => {
  return (
    <div>
        <Slider></Slider>
        <SelectedTouristSpots></SelectedTouristSpots>
        <AllCountries></AllCountries>
    </div>
  )
}

export default HomePage