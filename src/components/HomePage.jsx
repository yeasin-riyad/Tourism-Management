import AllCountries from "./AllCountries/AllCountries"
import Galleries from "./Galleries/Galleries"
import Rating from "./Rating/Rating"
import SelectedTouristSpots from "./SelectedTouristSpots/SelectedTouristSpots"
import Slider from "./Slider"

const HomePage = () => {
  return (
    <div>
        <Slider></Slider>
        <SelectedTouristSpots></SelectedTouristSpots>
        <AllCountries></AllCountries>
        <Galleries></Galleries>
        <Rating></Rating>
        
    </div>
  )
}

export default HomePage