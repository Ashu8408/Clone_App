import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return <header className="h-16 flex justify-between md:justify-end items-center gap- px-5">
        <div className="flex gap-4">
            <a href="https://mail.google.com/mail/" className="text-black/[0.87] text-[13px] leading-[13px] hover:underline cursor-pointer">
                Gmail
            </a>
            <a href="https://www.google.com/imghp?hl=en&ogbl" className="text-black/[0.87] text-[13px] leading-[13px] hover:underline cursor-pointer pr-4">
                Images
            </a>
        </div>
        
        <ProfileIcon />
    </header>
};

export default HomeHeader;
