import { UserQuizes } from "../models/userQuizes.js";
import { Quizes } from "../models/quizes.js";

export const handleGetQuizContents = async (req, res)=>{

    const _id = req.params.id;
    const cityId = req.params.cityId;
    let userQuizContents = null;
    let quizContents = null
    try{
        const quizContentsQuery = await Quizes.find({cityId:cityId});
        const userQuizesQuery = await UserQuizes.findOne({_id:_id,cityId:cityId})
        userQuizContents = {
            _id:userQuizesQuery._id,
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