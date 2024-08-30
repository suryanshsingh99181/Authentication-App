import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ErrorMsg from "../components/ErrorMsg";

const RegisterPage = () => {

  const {registerInfo, updateRegisterInfo, registerUser, registerError, isregisterLoading} = useContext(AuthContext);


  return (
    <>
      <form onSubmit={registerUser}><div>
        <h1 className="text-xl m-2 text-center">Register</h1>
        <label
          htmlFor="price"
          className="block w-1/3 m-auto text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-1/3 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Your Name" onChange={(e)=>updateRegisterInfo({...registerInfo,name: e.target.value})}/>
          
        </div>
      </div>

      <div>
        <div
          htmlFor="Email"
          className="block w-1/3 m-auto text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-1/3 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Your Email"
            onChange={(e)=>updateRegisterInfo({...registerInfo, email: e.target.value})}
          />
          
        </div>
      </div>

      <div >
        <div className="block w-1/3 m-auto text-sm font-medium leading-6 text-gray-900">
        Password
        </div>
          
        
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-1/3 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Password"
            onChange={(e)=>updateRegisterInfo({...registerInfo, password: e.target.value})}
          />
          
        </div>
      </div>
      <div>
         <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <button
          type="submit"
            name="register-btn"
            id="register-btn"
            className="block w-1/3 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-indigo-200 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Your Name" 
          >{isregisterLoading ? "Creating Your Account" : "Register"} </button>
          
        </div>
      </div>
      </form>
      <div>
      {
        registerError?.error && <ErrorMsg msg={registerError?.message}/>
      }
      </div>
      

          
    </>
  );
};

export default RegisterPage;
