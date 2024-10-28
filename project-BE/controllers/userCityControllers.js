import { UserQuizes } from "../models/userQuizes.js";
import { Quizes } from "../models/quizes.js";
import { UnlockCities } from "../models/unlockCities.js";

export const handleGetQuizContents = async (req, res)=>{

    const _id = req.params.id;
    const cityId = req.params.cityId;
    let userQuizContents = null;
    let quizContents = null
    try{
        const quizContentsQuery = await Quizes.find({cityId:cityId});
        const userQuizesQuery = await UserQuizes.findOne({userId:_id,cityId:cityId})
        userQuizContents = {
            userId:userQuizesQuery.userId,
            cityId:userQuizesQuery.cityId,
            userAnswers: userQuizesQuery.userAnswers,
            currentProgress: userQuizesQuery.currentProgress,
            currentQuestion: userQuizesQuery.currentQuestion
        }
        
        quizContents = quizContentsQuery;

        res.status(200).json({userQuizContents:userQuizContents, quizContents:quizContents})

    }catch(error){
        res.status(500).json({message:error});
    }
}

export const handlePostUserContents = async (req,res)=>{
    const userId = req.params.id;
    const cityId = req.params.cityId;
    const reqBody = req.body;
    const userAnswers = reqBody.userAnswers;
    const currentProgress = reqBody.currentProgress;
    const currentQuestion = reqBody.currentQuestion;

    try{

        const filter = {userId:userId, cityId:cityId}
        const update = {
            $set:{
                userAnswers:userAnswers,
                currentProgress:currentProgress,
                currentQuestion:currentQuestion,
            }
        }

        const updateResult = await UserQuizes.findOneAndUpdate(filter, update, {
            new:true,
            runValidators:true
        })

        //This will add more
        if(currentProgress == 100){

            const unlockCitiesQuery = await UnlockCities.findOne({cityId:cityId});
            if(unlockCitiesQuery){
                const unlockableCities = unlockCitiesQuery.unlockCities;
            
                for(let unlockedCity of unlockableCities){
                    const userQuiz = new UserQuizes({_id:userId + unlockedCity,userId:userId, cityId:unlockedCity, userAnswers:[
                        {
                            questionName:"question0",
                            questionAnswer:""
                        },{
                            questionName:"question1",
                            questionAnswer:""
                        },{
                            questionName:"question2",
                            questionAnswer:""
                        },{
                            questionName:"question3",
                            questionAnswer:""
                        }
                    ], currentProgress:0, currentQuestion:0});
    
                    await userQuiz.save();
                }
            }
            
        }

        res.status(200).json({message:"Good Request"})
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:error});
    }
}