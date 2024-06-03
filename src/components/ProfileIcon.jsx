import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/pfp.png";

const ProfileIcon = () => {
    return(
    <div className="flex">
        <span className="h-10 w-10 relative flex justify-center items-center rounded-full cursor-pointer
         hover:bg-black/[0.07]">
            <TbGridDots size={22} color="#5f6368" />
        </span>

        <span className="h-11 w-11 relative flex justify-center rounded-full items-center cursor-pointer
         hover:bg-black/[0.20]">
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover " src={Profile} />
            </span>

        </span>
    </div>
    )
};

export default ProfileIcon;
