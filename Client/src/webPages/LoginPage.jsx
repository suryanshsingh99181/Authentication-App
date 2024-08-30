import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const {
    logoutUser,
    loginUser,
    loginError,
    loginInfo,
    updateLoginInfo,
    isLoginLoading,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <>
      <h1 className="text-xl m-2 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="Email"
            className="block w-1/3 m-auto text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-1/3 m-auto rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Your Email"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block w-1/3 m-auto text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-1/3 m-auto rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Password"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </div>
        </div>
        
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <button
              type="submit"
              className="block w-1/3 m-auto rounded-md border-0 py-1.5 text-gray-900 bg-indigo-200 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {isLoginLoading ? "Getting your Details" : "Login"}
            </button>
          </div>
        </div>

        {loginError?.error && <p>Invalid Email or Password</p>}
      </form>
    </>
  );
};

export default LoginPage;
