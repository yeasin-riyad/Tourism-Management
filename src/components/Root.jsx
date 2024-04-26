import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Root = () => {
  return (
    <div className="lg:w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root