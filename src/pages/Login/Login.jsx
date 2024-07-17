import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const axiosPublic = useAxiosPublic();


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const userEmailOrPhone = form.userEmailOrPhone.value;
        const password = form.password.value;
        // console.log(email, password);
        const userInfo = {
            userEmailOrPhone: userEmailOrPhone,
            password: password
        }
        console.log(userInfo);


        axiosPublic.post('/loginUser', userInfo)
            .then(data => {
                console.log(data.data);
                if (data.data.message) {
                    // console.log('user added database successfully');
                    if (data.data.message === 'Pin is correct') {

                        toast.success("Login successfully");
                        e.target.reset();
                    }
                    else if (data.data.message === 'Error ! something wrong') {
                        toast.error("Error! There is something wrong");
                    }
                    else if (data.data.message === 'Pin is incorrect') {
                        toast.warning("Pin is incorrect");
                    }

                }
                
        })


    }



    return (
        <section>
            <div className="flex flex-col  justify-center items-center lg:py-20 py-12 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/vBCMK7m/parcel2.jpg)] bg-center bg-cover object-cover object-center ">


                <div className="flex flex-col justify-center  w-full max-w-lg  mx-auto space-y-4 my-6 bg-white shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-2xl" data-aos="fade-down">



                    <div className=" mx-auto ">
                        <h1 className="lg:text-4xl text-xl text-orange-400 font-bold mb-6 ">Login to your account</h1>
                    </div>


                    <form onSubmit={handleLogin} className="lg:w-[70%] w-full mx-auto space-y-5 rounded-lg " >

                        <div>
                            <p className="mb-1 font-medium">User Email / Mobile</p>
                            <input type="text" name="userEmailOrPhone" placeholder="Email / Phone" className="input input-bordered w-full" required />
                        </div>

                        <div >
                            <p className="mb-1 font-medium">Pin</p>

                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="Your Pin" className="input input-bordered w-full" required minLength={5}
                                    maxLength={5} />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div>
                        </div>






                        <div>
                            <button className="btn hover:text-orange-400 text-white text-xl w-full bg-orange-400" type="submit">Login</button>
                        </div>




                    </form>




                    <div className="text-center " >
                        <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/'} className="btn-active text-orange-600 btn-link">Sign up</Link></p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;