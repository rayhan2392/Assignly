import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login an existing user with firebase authentication
    logInUser(email, password)
      .then(result => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully logged in",
            showConfirmButton: false,
            timer: 2000
          });
          navigate(from);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-[#0077FF] to-[#40A578]">
      <div className="hero-content flex-col lg:flex-row justify-center items-center">
        <div className="text-center lg:text-left space-y-4 max-w-xl">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
          <p className="text-lg text-white opacity-80">
            Welcome to our community of collaboration and creativity! <br />
            Join us now to explore and share knowledge.
          </p>
        </div>
        <div className="card flex-1 shrink-0 w-full max-w-sm shadow-xl bg-white rounded-2xl p-8">
          <form onSubmit={handleLogIn} className="space-y-6">
            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full py-3 px-4 rounded-lg text-lg border-[#40A578] focus:ring-[#0077FF] focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full py-3 px-4 rounded-lg text-lg border-[#40A578] focus:ring-[#0077FF] focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-lg text-xl bg-[#40A578] text-white hover:bg-[#0077FF] focus:outline-none transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
