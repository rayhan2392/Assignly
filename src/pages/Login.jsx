import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
    const {logInUser} = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/';
    const handleLogIn = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //login an existing user with firebase authentication
        logInUser(email,password)
        .then(result=>{
            if(result.user){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully logged in",
                  showConfirmButton: false,
                  timer: 2000
                });
                navigate(from)
              }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="text-center py-6">Welcome to our community of collaboration and creativity! <br /> Join us now to explore and share knowledge</p>
          </div>
          <div className="card flex-1 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;