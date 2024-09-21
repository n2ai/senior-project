import { verifyToken } from "../middleware/JWTActions.js";
import { Cities } from "../models/cities.js";
import { Regions } from "../models/regions.js";
import { UserCities } from "../models/userCities.js";

//Return Structure will be sth like this:
/**cities = [{
    cityId:string,
    cityName:string,
    cityCurrentProgress,
    cityCondition:Locked or Unlocked
    cityProgress:number,
    cityRegion:string
}] 
    
    citiesRequirements = [{
        city:[requirements]
    }]

    calculatedRegionProgess = [{
        city:string,
        progess:number
    }]
*/

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
    
    const tutorialQuery = await UserCities.findOne({_id:_id, cityId:"TTR"})

    userCityData.push({
        cityId:"TTR",
        cityName:"Tutorial",
        cityCurrentProgress:tutorialQuery.finishedQuiz ? tutorialQuery.finishedQuiz : [],
        cityCondition:"unlocked",
        cityRegion:"tutorial",
        finished:tutorialQuery.finished,
        cityProgress:(tutorialQuery.finishedQuiz.length / 4) * 100
    })

    for(let city of cities){
        let {cityId, cityName, cityRegion} = city;
        let cityCondition = "locked";
        let cityCurrentProgress = [];
        let cityProgress = 0;
        let finished = false
        try{
            const userCitiesQuery = await UserCities.findOne({_id:_id,cityId:cityId})
            if(userCitiesQuery === null){
                cityCondition = "locked"
                cityCurrentProgress = [];
                finished = false
                cityProgress = 0
            }else{
                cityCondition = "unlocked"
                cityCurrentProgress = tutorialQuery.finishedQuiz ? tutorialQuery.finishedQuiz : [];
                finished = userCitiesQuery.finished
                cityProgress = (cityCurrentProgress.length / 4) * 100;
            }

            
        }catch(error){
            console.log(error)
        }

        userCityData.push({
            cityId:cityId,
            cityName:cityName,
            cityCurrentProgress:cityCurrentProgress,
            cityCondition:cityCondition,
            cityProgress:cityProgress,
            cityRegion:cityRegion,
            finished: finished
        });
    }

    res.status(200).json({userCityData:userCityData})
};