import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileRegions from "../components/profile/ProfileRegions";
import ProfileRegionInfo from "../components/profile/ProfileRegionInfo";
import backgroundImg from "/images/paperBg.jpg"
import LoadingScreen from "../components/LoadingScreen";
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

export type dataMap = {
    _id: object,
    regionId:string,
    regionCities: string []
}

const Profile = ()=>{

    const {id} = useParams();
    const [cookies] = useCookies(['accessToken']);
    const [verification, setVerification] = useState<boolean>(false);
    const [dataIsLoaded,setDataIsloaded] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>("regions");
    const [dataMap, setDataMap] = useState<dataMap []>([]);
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
            const cityData = response.data.userCityData;
            const dataMap = response.data.dataMap;
            setDataMap(dataMap)
            setUserCityData(cityData);
            setDataIsloaded(true);
        }catch(error){
            console.log(error)
        }
    }

    const pageFlowRendering = ()=>{
        if(currentPage === "regions"){
            return <ProfileRegions setCurrentPage={setCurrentPage}></ProfileRegions>
        }else if(currentPage === "northern"){

            const northernCities = userCityData.filter(item=>item.cityRegion === "northern" || item.cityRegion === "tutorial" )
            const updatedNorthernCities = [northernCities[0]]
            for(const i of dataMap[0].regionCities){
                for(const j of northernCities){
                    if(i === j.cityId){
                        updatedNorthernCities.push(j)
                    }
                }
            }

            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="northern" cities={updatedNorthernCities} ></ProfileRegionInfo>
        }else if(currentPage === "central"){
            
            const centralCities = userCityData.filter(item=>item.cityRegion === "central" || item.cityRegion === "tutorial")
            const updatedCentralCities = [centralCities[0]]
            for(const i of dataMap[1].regionCities){
                for(const j of centralCities){
                    if(i === j.cityId){
                        updatedCentralCities.push(j)
                    }
                }
            }
            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="central" cities={updatedCentralCities}></ProfileRegionInfo>
        }else if(currentPage === "southern"){

            const southernCities = userCityData.filter(item=>item.cityRegion === "southern" || item.cityRegion === "tutorial")
            const updatedSouthernCities = [southernCities[0]]
            for(const i of dataMap[2].regionCities){
                for(const j of southernCities){
                    if(i === j.cityId){
                        updatedSouthernCities.push(j)
                    }
                }
            }
            return <ProfileRegionInfo setCurrentPage={setCurrentPage} region="southern" cities={updatedSouthernCities}></ProfileRegionInfo>
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

    console.log(dataMap)

    return (
        verification && dataIsLoaded ? (
        <div className= "w-full h-full flex"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="pt-4 container-sm mx-auto w-full h-full" >
                {pageFlowRendering()}
            </div>

        </div>)
        : (
            <LoadingScreen></LoadingScreen>
        )
        
    )
}

export default Profile;