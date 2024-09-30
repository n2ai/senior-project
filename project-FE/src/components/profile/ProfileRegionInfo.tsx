import { useState } from "react";
import { userCityDataType } from "../../routes/Profile";
import hanoiImgUrl from "../../images/hanoi-3609871_1920.jpg"
import LevelCard from "../LevelCard";

interface IProfileRegionInfo{
    region: string,
    cities: userCityDataType[]
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const ProfileRegionInfo:React.FC<IProfileRegionInfo> = ({region, cities, setCurrentPage})=>{

    const [dataIsLoaded, setDataIsloaded] = useState<boolean>(false);
    const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;

    const citiesRows = cities.map((city,index)=>{

        
        const standardizeCityName = city.cityName.toLocaleLowerCase().split(" ").join("");

        const imgUrl = `https://res.cloudinary.com/${cloudinaryName}/image/upload/${standardizeCityName}LevelImg.jpg`


        return(  
            <div key={index} className={`flex flex-col ${index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"}  items-center md:space-x-8 mb-8`}>
                <div className="description md:w-1/2 text-center flex justify-center">
                    <p className="schoolbell-regular text-2xl font-bold ">{city.cityDescription}</p>
                </div>

                <div className=" flex items-center justify-center bg-none md:w-1/2">
                    <LevelCard cityId={city.cityId} cityName={standardizeCityName} title={city.cityName} progress={city.cityProgress} unlock={city.cityCondition === "unlocked" ? true : false} imgUrl={imgUrl}></LevelCard>
                </div>

            </div>
        )
    })

    const regionDescription = ()=>{
        if(region === "northern"){
            return "Northern Vietnam: A Land of Majestic Peaks and Timeless Traditions"
        }else if(region === "central"){
            return "Central Vietnam: Where Heritage Meets Coastal Beauty"
        }else if(region === "southern"){
            return "Southern Vietnam: A Vibrant Tapestry of Culture and Nature"
        }
    }

    

    //Doan Nay se tim cach render cities
    console.log(cities)
    return (
        <div className="w-full">
            <button className="flex items-center justify-center text-xl border-bottom border-black animate-bounce" onClick={()=>setCurrentPage("regions")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p>Back to Regions </p>
            </button>


            {/**Header*/}
            <div className="w-full flex gap-3 flex-col items-center">
                <h1 className="caligraphy text-6xl font-bold">{region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()}</h1>
                <p className="text-2xl font-monospace">{regionDescription()}</p>
            </div>

            {/**Display */}
            <div className="container mx-auto mt-6">
                {citiesRows}
            </div>

        </div>
    )
}

export default ProfileRegionInfo;