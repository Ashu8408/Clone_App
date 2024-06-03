import { useState } from "react";


import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

import { useNavigate, useParams } from "react-router-dom";






    const Home = () => {


        // const SearchInput = () => {

        //     const {query} = useParams();         /*useParams is used to extract query*/
        //     const [searchQuery, setsearchQuery]=useState(query || "")
            
        //     const navigate =useNavigate();
        
        //     const searchQueryHandler = (event)=>{
        //         if(event.key==="Enter" && searchQuery.length>0 ){
        //             navigate(`/${searchQuery}/${1}`)        /*search index always set to 1 on start */
        
        //         }
        //     }


        // const [onSearchButtonClick, setOnSearchButtonClick] = (null);

        function searchButtonClickHandler() {
            console.log("Button Clicked")
        }

        

        return (
        <div className = "flex h-[100vh] flex-col">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                <img className="w-[172px] md:w-[272px] mb-8" src={Logo} />
                <SearchInput />
                <div className ="flex gap-2 text-[#3c4043] mt-8">
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-custom border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
                    onClick={searchButtonClickHandler}
                    >
                        Google Search
                    </button>
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-custom border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                        <a href ="https://doodles.google/" >
                            I'm feeling LUCKY
                            </a>
                    </button>
                </div>

                </div>
            </main>
            <Footer />
        </div>
        )
    // };
};

export default Home;
