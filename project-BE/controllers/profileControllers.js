import { verifyToken } from "../middleware/JWTActions.js";
import { Cities } from "../models/cities.js";
import { Regions } from "../models/regions.js";
import { UserCities } from "../models/userCities.js";
import { UserQuizes } from "../models/userQuizes.js";

export const handleAuthController = async (req,res)=>{
    //Data form request body
    const data = req.body;

    //Get _id from request
    const _id = req.params.id;

    //Get JWT Token
    const token = data.accessToken;

    const payload = verifyToken(token);

    if(_id !== payload._id){
        return res.status(500).json("Cannot Login")
    }

    res.status(200).json({message:"Correct Token"})
};

export const handleGetUserDataController = async (req,res)=>{

    const _id = req.params.id;
    //Query Citites:
    const cities = await Cities.find({})
    const userCityData = []
    
    const tutorialQuery = await UserQuizes.findOne({userId:_id, cityId:"TTR"})
    let dataMap = await Regions.find({})
    
    userCityData.push({
        cityId:"TTR",
        cityName:"Tutorial",
        cityCondition:"unlocked",
        cityRegion:"tutorial",
        finished: tutorialQuery.currentProgress === 100 ? true : false,
        cityProgress: tutorialQuery.currentProgress,
        cityDescription:"Welcome to Vietnam!"
    })

    for(let city of cities){
        let {cityId, cityName, cityRegion, cityDescription} = city;
        let cityCondition = "locked";
        let cityCurrentProgress = [];
        let cityProgress = 0;
        let finished = false
        try{
            const userCitiesQuery = await UserQuizes.findOne({userId:_id,cityId:cityId})
            if(userCitiesQuery === null){
                cityCondition = "locked";
                cityCurrentProgress = [];
                finished = false;
                cityProgress = 0;
            }else{
                cityCondition = "unlocked";
                finished = tutorialQuery.currentProgress === 100 ? true : false;
                cityProgress = userCitiesQuery.currentProgress;
            }

            
        }catch(error){
            console.log(error)
        }

        userCityData.push({
            cityId:cityId,
            cityName:cityName,
            cityCondition:cityCondition,
            cityProgress:cityProgress,
            cityRegion:cityRegion,
            finished: finished,
            cityDescription:cityDescription
        });
    }
    res.status(200).json({userCityData:userCityData, dataMap:dataMap})
};
