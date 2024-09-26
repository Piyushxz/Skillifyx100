import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const User = () => {


    return (
        <>
            <Sidebar />
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4 bg-white">
                <div className="font-montserrat mb-4 md:mb-0 ml-4 mt-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black pl-4 ">
                        Coursera
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <button 
                        
                        className="flex items-center bg-white text-sm md:text-base p-2 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="24px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            fill="#5f6368"
                        >
                            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
                        </svg>
                
                    </button>
                </div>
            </div>
        </>
    );
};

export default User;
