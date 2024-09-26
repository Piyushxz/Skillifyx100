import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center pt-10 bg-black">
                <div className="mt-20">
                    <h1 className="font-montserrat text-6xl font-extrabold text-white">
                        <span className="block">Achieve Your</span>
                        <span className="block">Career Goals.</span>
                    </h1>
                </div>
    
                <div className="pb-6">
                    <img src="https://media.geeksforgeeks.org/img-practice/premium-page-hero-banner-1719552281.svg" />
                </div>
            </div>

            <div className="bg-white pt-10 flex flex-col items-center justify-center text-center pb-10">
                <h1 className="text-5xl font-extrabold font-montserrat">Start Your Journey With Us.</h1>
                <h1 className="text-slate-300 text-2xl font-extrabold pt-4">Join Our courses and get firsthand knowledge about web and web3</h1>
                <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl "> 
                    <h1 className=" p-4 text-2xl font-bold text-white">
                         View Coureses
                    </h1>
                
               </button>
            </div>

            <div className="bg-black pt-2 flex justify-center">
                <h1 className="text-5xl font-extrabold font-montserrat text-white">Testimonials</h1>
            </div>
        </>
    )
}

export default Home;
