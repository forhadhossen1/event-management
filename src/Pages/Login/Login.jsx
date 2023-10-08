import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {

    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        // loging user ....
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Success',
                    'Login Successfull',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                Swal.fire("Provide", "Correct email and password", "error");
            })
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Success',
                    'Login Successfull',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }



    return (
        <div className="flex justify-center items-center h-[85vh] bg-gray-300 px-2">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <h4 className="block text-2xl mt-12 font-bold text-center tracking-normal text-blue-gray-900 antialiased">
                    Login
                </h4>
                <p className="mt-1 block text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your email && password.
                </p>
                <form onSubmit={handleLogin} className="mt-8 mb-2">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="email" name="email" required
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password" name="password" required
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>

                    <div>
                        <input
                            className="mt-6 block w-full select-none rounded-lg bg-orange-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                            type="submit"
                            value="Login"
                        />
                    </div>
                    <button onClick={handleGoogleLogin} className="mt-6 block w-full select-none rounded-lg bg-orange-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-blue-600"
                        data-ripple-light="true">Login with Google</button>

                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        You have no account ? Please<Link to='/signUp'><button className="btn btn-link">Sign Up</button></Link>
                    </p>


                </form>
            </div>
        </div>
    );
};

export default Login;