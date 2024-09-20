import { useState } from "react";

interface IProfileCentral{
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}

const ProfileCentral = ({setCurrentPage})=>{
    return (
        <div>
            <button onClick={()=>setCurrentPage("regions")}>
                Hello
            </button>
        </div>
    )
};
export default ProfileCentral;