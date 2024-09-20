import { useState } from "react";

interface IProfileNorthern{
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const ProfileNorthern = ({setCurrentPage})=>{
    return (
        <div className="pt-4">
            <button onClick={()=>setCurrentPage("regions")}>
                Hello
            </button>
        </div>
    )
}

export default ProfileNorthern;