import { useState } from "react";

interface IProfileSouthern{
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}

const ProfileSouthern = ({setCurrentPage})=>{
    return(
        <div>
            <button onClick={()=>setCurrentPage("regions")}>
                Hello
            </button>
        </div>
    )
}

export default ProfileSouthern;