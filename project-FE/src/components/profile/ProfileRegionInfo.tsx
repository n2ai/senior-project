import { useState } from "react";
import { userCityDataType } from "../../routes/Profile";

interface IProfileRegionInfo{
    region: string,
    cities: userCityDataType[]
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const ProfileRegionInfo:React.FC<IProfileRegionInfo> = ({region, cities, setCurrentPage})=>{

    const [dataIsLoaded, setDataIsloaded] = useState<boolean>(false);



    //Doan Nay se tim cach render cities
    console.log(cities)
    return (
        <div>
            <button onClick={()=>setCurrentPage("regions")}>
                setCurrentPage
            </button>
        </div>
    )
}

export default ProfileRegionInfo;