import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


const SignUp = () => {
    const [showPass, setShowPass] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // console.log(data);
    }




    return (
        <section>

            <div className="flex flex-col  justify-center items-center lg:py-20 py-12 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/P4ZL2zL/cash.jpg)] bg-center bg-cover object-cover object-center  ">




                <div className="card shrink-0 w-full max-w-lg py-6 shadow-2xl bg-base-100 my-8 " data-aos="zoom-in-down">
                    <div className=" mx-auto text-orange-400">
                        <h1 className="lg:text-4xl text-xl font-bold ">Create an account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </label>
                            <input type="text"   {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-400'>Name field is required</span>}

                        </div>
                     


                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email"    {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-400'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="phone"    {...register("phone", { required: true })} name="phone" placeholder="Your Number" className="input input-bordered" />
                            {errors.phone && <span className='text-red-400'>phone field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Pin</span>
                            </label>
                            <div className="relative">


                                <input type={showPass ? 'text' : 'password'}    {...register("password", {
                                    required: true,
                                    minLength: 5,
                                    maxLength: 20,
                                    /* pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ */


                                })} name="password" placeholder="Your Pin" className="input input-bordered w-full" />

                                {errors.password?.type === 'required' && <span className='text-red-400'>Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-400'>Password must be less 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400'>Password must have one uppercase and one lowercase and one number,  one special characters</span>}

                                {/* eye icon or show password icon */}
                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>



                            </div>


                        </div>

                        {/* user type */}
                        <div className="form-control" required>

                            <label className="label">
                                <span className="label-text font-semibold">UserType</span>
                            </label>

                            <select required defaultValue="" name="userType" {...register("userType", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="">Choose a UserType</option>
                                <option value="User">User</option>
                                {/* <option value="Admin">Admin</option> */}
                                <option value="Agent">Agent</option>

                            </select>
                            {errors.userType && <span className='text-red-400'>userType field is required</span>}


                        </div>


                        <div className="form-control mt-6">
                            <input className="btn hover:text-orange-400 text-white text-xl w-full bg-orange-400" type="submit" value="Sign up" />

                        </div>
                      


                        <div className="text-center " >
                            <p className="font-medium mt-6 lg:text-base text-sm mr-2">have an account ?  Please <Link to={'/login'} className="btn-active text-orange-600 btn-link">Login</Link></p>
                        </div>

                    </form>
                </div>








            </div>





        </section>
    );
};

export default SignUp;