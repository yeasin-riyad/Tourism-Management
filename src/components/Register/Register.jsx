// import { useContext } from "react"
// import { authContext } from "../ContextApi/AuthContext"
import { useForm } from "react-hook-form";
// import UseContext from "../UseContext/UseContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../ContextApi/FirebaseProvider";
import Swal from "sweetalert2";

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

const Register = () => {
  const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
  const { createUser,UpdateUser,setLoading } = useContext(AuthContext);


  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();


    const location=useLocation()
    const from=location?.state ? location.state : '/'

  const onSubmit = ({ email, password, Name, photoUrl }) => {
    createUser(email, password)
      .then((userCredential) => {
        const User = userCredential.user;
        UpdateUser(User,Name,photoUrl)
        .then(()=>{
          Swal.fire(" Registration Successful!");
          setLoading(false)
          navigate(from)

        })
      })
      .catch(() => {
        toast.error("Registration Fail !", {});
      });

  };

 
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tourism-Register</title>
      </Helmet>
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter Your Name: "
                      className="input input-bordered"
                      {...register("Name", { required: true })}
                    />
                    {errors.Name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered "
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoUrl</span>
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      placeholder="Enter Your PhotoUrl "
                      className="input input-bordered"
                      {...register("photoUrl", { required: true })}
                    />
                    {errors.photoUrl && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="flex items-center ">
                      <input
                        type={toggle ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered w-full"
                        {...register("password", {
                          required: true,
                          pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        })}
                      />
                      <div
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {toggle ? (
                          <FaRegEye className="-mx-7" />
                        ) : (
                          <FaRegEyeSlash className="-mx-7" />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <span className="text-red-500">
                        Password Must be at least 6 characters and Containing at
                        least One upperCase and One LowerCase Letter,{" "}
                      </span>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    <ToastContainer position="bottom-right" />
                  </div>
                </form>
                <p className="text-center">
                  Already Have an Account??Please{" "}
                  <Link to="/login">
                    <button className="btn btn-link">Login</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Register;
