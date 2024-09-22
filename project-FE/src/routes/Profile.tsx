import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileRegions from "../components/profile/ProfileRegions";
import ProfileRegionInfo from "../components/profile/ProfileRegionInfo";
export type userCityDataType  = {
    cityCondition:string,
    cityCurrentProgress:string [],
    cityId:string,
    cityName:string,
    cityProgress:number,
    cityRegion:string,
    finished:boolean,
    cityDescription:string
}

const Profile = ()=>{

    const {id} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [verification, setVerification] = useState<boolean>(false);
    const [dataIsLoaded,setDataIsloaded] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>("regions")
    const [userCityData, setUserCityData] = useState<userCityDataType []>([
        {   cityCondition:"",
            cityCurrentProgress: [""],
            cityId: "",
            cityName: "",
            cityProgress: 0,
            cityRegion: "",
            finished: false,
            cityDescription:""
        }
    ])

    const accessToken = cookies.accessToken;
    const navigate = useNavigate()

    const fetchJWTVerify = async ()=>{
        try{
            await axios.post(`http://localhost:3000/profile/${id}`,{accessToken:accessToken})
        }catch(error){
            console.log(error);
            navigate("/");
        }        
    }

    const fetchUserCityData = async () =>{
        try{
            const response = await axios.get(`http://localhost:3000/profile/${id}`)
            const data = response.data.userCityData;
            setUserCityData(data);
            setDataIsloaded(data);
        }catch(error){
            console.log(error)
        }
    }

    const pageFlowRendering = ()=>{
        if(currentPage === "regions"){
            return <ProfileRegions setCurrentPage={setCurrentPage}></ProfileRegions>
        }else if(currentPage === "northern"){

            const northernCities = userCityData.filter(item=>item.cityRegion === "northern" || item.cityRegion === "tutorial" )

            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="northern" cities={northernCities} ></ProfileRegionInfo>
        }else if(currentPage === "central"){
            
            const centralCities = userCityData.filter(item=>item.cityRegion === "central" || item.cityRegion === "tutorial")

            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="central" cities={centralCities}></ProfileRegionInfo>
        }else if(currentPage === "southern"){

            const southernCities = userCityData.filter(item=>item.cityRegion === "southern" || item.cityRegion === "tutorial")

            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="southern" cities={southernCities}></ProfileRegionInfo>
        }
    }

    useEffect(()=>{
        const fetchData = async () =>{
            await fetchJWTVerify();
            await fetchUserCityData();
            setVerification(true);
        }
        fetchData();
    },[])

    return (
        verification && dataIsLoaded ? (
        <div className= "w-full h-full flex bg-[#FADADD]">
            
            <div className="pt-4 container-sm mx-auto w-full h-full" >
                {pageFlowRendering()}
            </div>

        </div>)
        : (
            <div>
                loading...
            </div>
        )
        
    )
}

export default Profile;