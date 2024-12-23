import React, { useState } from 'react';
import { useModal } from '../context/modal-context';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const SignInModal = () => {
    const navigate = useNavigate()
    const {modalDispatch} = useModal()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [tokenVal,setTokenVal] = useState(null)
    const [user,setUser] = useState(null)

    const closeModal = () =>{
        modalDispatch({
            type:"OPEN_SIGNIN_MODAL"
        })
    }

    const handleEmailChange = (e) =>{
      setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
      setPassword(e.target.value)
    }

    const handleSignInClick = async () => {
      try {
        const response = await axios.post("https://coursesellingappbackend-beju.onrender.com/user/signin", {
          email,
          password
        });
        const token = response.data.token;
        const username = response.data.username;
    
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          navigate("/user");
    
          modalDispatch({
            type: "OPEN_SIGNIN_MODAL"
          });
        }
      } catch (e) {
        console.log("Could not signin");
        console.log(e);
      }
    };
    
    const handleAutoSignInAsUserClick = async () => {
      try {
        const response = await axios.post("https://coursesellingappbackend-beju.onrender.com/user/signin", {
          email: "testuser2@gmail.com",
          password: "Piyush@12"
        });
        const token = response.data.token;
        const username = response.data.username;
    
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          navigate("/user");
    
          modalDispatch({
            type: "OPEN_SIGNIN_MODAL"
          });
        }
      } catch (e) {
        console.log("Could Not SignIn");
        console.log(e);
      }
    };
    
    const handleAutoSignInClick = async () => {
      try {
        const response = await axios.post("https://coursesellingappbackend-beju.onrender.com/admin/signin", {
          email: "a@gmail.com",
          password: "2323"
        });
        const token = response.data.token;
        const username = response.data.username;
    
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          navigate("/admin");
    
          modalDispatch({
            type: "OPEN_SIGNIN_MODAL"
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    
  return (
    <>

    
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ">
                  SignIn
                </h3>
                <button
                    onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                
                    <form>

                        <div className="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input onChange={handleEmailChange}
                             type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div> 
                        <div className="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={handlePasswordChange}
                             type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div> 
                    </form>

              </div>
              <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                <button
                  onClick={handleSignInClick}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Submit
                </button>
                <button
                onClick={handleAutoSignInAsUserClick}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
               Auto Sign In as User
              </button>
           <button
             onClick={handleAutoSignInClick}
             className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
           >
               Auto Sign In as Admin
           </button>
              </div>
            </div>
          </div>
        </div>


    </>
  );
};

export default SignInModal;
