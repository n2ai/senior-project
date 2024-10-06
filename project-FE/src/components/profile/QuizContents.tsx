/**THIS COMPONENT CAN BE REUSED FOR FUTURE QUIZ SECTION */

import { useState, useRef } from "react";
import { ProgressBar, Card } from "react-bootstrap";
import { quizContents } from "../../routes/ProfileCity";
import { userQuizContents } from "../../routes/ProfileCity";
import { Modal } from "react-bootstrap";
import QuizModal from "./QuizModal";
import axios from "axios";
import { useParams } from "react-router-dom";
import QuizFinished from "./QuizFinished";

interface IQuizQuestions  {
    question: string,
    options: string[],
    correctAnswer: string
    questionName:string
}

interface IUserAnswer {
    questionName:string,
    questionAnswer:string,
}

interface ITutorialQuiz{
    quizContents:quizContents[],
    userQuizContents: userQuizContents
}

//Logic For Submit wil be:
//Click the next button -> check if it is the correct answer -> send to backend to verify

const QuizContents:React.FC<ITutorialQuiz> = ({quizContents, userQuizContents}) =>{

    //Will Set Up the logic for this state controller later
    const [currentProgress, setCurrentProgress] = useState<number>(userQuizContents.currentProgress);
    const [currentQuestion, setCurrentQuestion] = useState<number>(userQuizContents.currentQuestion);
    const [questionList, setQuestionlist] = useState<IQuizQuestions[]>(quizContents);
    const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>(userQuizContents.userAnswers);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

    const generateCurrentQuestion = (currentQuestion:number)=>{
        return currentQuestion < 4 ? currentQuestion : 3
    }

    const {id, cityId} = useParams();

    const handleOnChangeRadio = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserAnswers((answers)=>{
            const updatedUserAnswers = [...answers]
            updatedUserAnswers[generateCurrentQuestion(currentQuestion)].questionAnswer = e.target.value
            return updatedUserAnswers
        })
    }

    const handleSaveUserAnswers = async (currentQuestion:number, currentProgress:number) =>{

        const saveData = {
            userAnswers: userAnswers,
            currentQuestion: currentQuestion,
            currentProgress: currentProgress 
        }

        try{
            const response = await axios.post(`http://localhost:3000/userCity/${id}/${cityId}`, saveData)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }


    const checkTheAnswer = async ()=>{
        const userAnswer = userAnswers[generateCurrentQuestion(currentQuestion)].questionAnswer;
        const correctAnswer = questionList[generateCurrentQuestion(currentQuestion)].correctAnswer;

        if (userAnswer === correctAnswer){
            setCorrectAnswer(true);
            setShowModal(true);
            if(currentQuestion < 4){
                const newCurrentQuestion = currentQuestion + 1;
                const newCurrentProgress = currentProgress + 25;
                handleSaveUserAnswers(newCurrentQuestion, newCurrentProgress);
                setCurrentQuestion(prev=>prev+1);
                setCurrentProgress(prev=>prev+25);
                
            }
        }else{
            setCorrectAnswer(false);
            setShowModal(true);
            handleSaveUserAnswers(currentQuestion, currentProgress);
        }
    }

    const handleOnClickButton = (e:React.MouseEvent<HTMLButtonElement>)=>{

        const name:string = e.currentTarget.name;
        
        if(name === "prev"){
            if(currentQuestion > 0){
                setCurrentQuestion(prev=>prev-1)
                setCurrentProgress(prev=> prev-25)
            }
        }else if(name === "next"){
            checkTheAnswer();  
        }
    }
    
 
    const questionForm = questionList[generateCurrentQuestion(currentQuestion)].options.map((item, index)=>{
        return(
            
            <div key={index} className="space-x-3 flex items-center">
                <input  value={item} onChange={handleOnChangeRadio} checked = {item == userAnswers[generateCurrentQuestion(currentQuestion)].questionAnswer}type="radio" id={String(index)} name={questionList[generateCurrentQuestion(currentQuestion)].questionName} ></input>
                <label htmlFor= {String(index)}>{item}</label>
            </div>
        )
    })


    return(
        <>
            <div className="w-full h-screen container-lg pt-4 flex flex-col items-center gap-10 pb-4">
                <h1 className="font-bold text-3xl text-center">
                    Finish the Questions Below and Advance to the Next Levels
                </h1>
                
                <div className="w-full">
                    <ProgressBar className="h-2" variant="black" now={currentProgress}></ProgressBar>
                </div>
                
                {/**This will be the form section */}
                
                <div className="w-[500px] mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">

                    {
                        currentProgress === 100 ? 
                        <QuizFinished></QuizFinished>
                        :
                        (<>
                            <div>
                                <h1 className="text-xl font-bold">
                                    {questionList[currentQuestion].question}
                                </h1>
                            </div>

                            <form className="w-full flex justify-center">
                                <div className="flex w-full flex-col">
                                    {questionForm}
                                </div>
                            </form>
                        </>) 
                    }
                    

                    <div className={`w-full flex justify-between mt-6 ${currentProgress === 100 ? "hidden" : "visible"}`}>
                        <button name="prev" type="button" onClick={(e)=>handleOnClickButton(e)} className={`bg-slate-400 h-[2.5rem] w-[8rem] rounded-lg text-white ${currentQuestion === 0 && "hidden right-0"}`}>Prev</button>

                        <button name="next" type="button" onClick={(e)=>handleOnClickButton(e)} className="bg-red-400 h-[2.5rem] w-[8rem] rounded-lg text-white">Next</button>
                    </div>
                </div>
                
            </div>

            {/**Modal Section */}
            <QuizModal correct={correctAnswer} show={showModal} setClose={setShowModal}></QuizModal>
        </>
    )
}

export default QuizContents;