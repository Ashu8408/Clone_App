import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";


import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";



const SearchInput = () => {

    const {query} = useParams();         /*useParams is used to extract query*/
    const [searchQuery, setsearchQuery]=useState(query || "")
    const navigate =useNavigate();

    const searchQueryHandler = (event)=>{
        if(event.key==="Enter" && searchQuery.length>0 ){
            navigate(`/${searchQuery}/${1}`)        /*search index always set to 1 on start */

        }
    }


    return (
        <div id ="Searchbox" className="h-[50px] w-full md:w-[600px] flex items-center gap-3 px-4 border border-[#dfe1e5]
         rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            <AiOutlineSearch size={17} color="#9aa0a6" />

            <input
                type="text"
                onChange={(e) => setsearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler} 
                value={searchQuery}
                autoFocus
                className="flex-grow outline-none text-black "
                placeholder="Search..."
            /> 
            <div className="flex items-center gap-3">  {/*cross button to erase search bar */}
                    {searchQuery && (
                    <div className="flex items-center gap-[-20px]">   
                       <IoMdClose 
                       size={24}
                       color="#70757a"
                       className="cursor-pointer"
                       onClick={() =>setsearchQuery("")} 
                       />
                       
                       <PiLineVerticalThin className="h-9 w-9 border-[#dfe1e5] border-none opacity-[25%]" />
                    </div>
                    
                    )}
                <img className="h-6 w-6 cursor-pointer" src={MicIcon} />
                <img className="h-6 w-6 cursor-pointer" src={ImageIcon} />
            </div>
         </div>
    )
};

export default SearchInput;
