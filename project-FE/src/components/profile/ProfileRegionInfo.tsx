import { useState } from "react";
import { userCityDataType } from "../../routes/Profile";

interface IProfileRegionInfo{
    region: string,
    cities: userCityDataType[]
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const ProfileRegionInfo:React.FC<IProfileRegionInfo> = ({region, cities, setCurrentPage})=>{

    //Doan Nay se tim cach render cities
    

    return (
        <div className="container mx-auto">
            <button onClick={()=>setCurrentPage(region)}>
                setCurrentPage
            </button>
        </div>
    )
}

export default ProfileRegionInfo;