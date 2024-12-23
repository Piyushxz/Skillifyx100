import React from 'react';
import { useModal } from '../context/modal-context';
import { useLocation } from 'react-router-dom';
const Card = ({data}) => {
    const location = useLocation()
    const {title,description,imageUrl,price,_id} = data
    const {modalDispatch} = useModal()
    const handleBuyNowClick = (id) => {
      console.log("ID passed to handler:", id); 
      if (location.pathname === '/courses') {
          modalDispatch({
              type: "OPEN_SIGNIN_MODAL"
          });

      }else if(location.pathname==="/purchases"){
          modalDispatch({})
      }
      else if(location.pathname=== '/admin'){
        modalDispatch({
          type:"OPEN_UPDATE_MODAL",
          payload:id
        })
      }
      else{
          modalDispatch({
              type: "OPEN_PURCHASE_MODAL",
              payload: id 
          });
      }
  };
  
  return (
    <div className="max-w-sm max-h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      
      <div className='min-w-96 object-contain'>
      <img
          className="rounded-t-lg "
          src={imageUrl}
          alt="Tech acquisition"
        />
      </div>

      
      <div className="p-5">
         
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            
            {title}
          </h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           Price :₹{price} 
        </p>
                <button
          onClick={() => handleBuyNowClick(_id)}
          className={`inline-flex items-center px-3 py-2 mt-6 text-sm font-medium text-center text-white ${location.pathname === '/purchases' ? "bg-blue-200" : "bg-green-400"} rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          {location.pathname === '/purchases'
            ? "View Content"
            : location.pathname === '/admin'
            ? "Update Course"
            : "Buy Now"}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Card;
