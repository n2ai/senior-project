import { useState, useRef } from "react";
import { ProgressBar, Card } from "react-bootstrap";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import { Modal   } from "react-bootstrap";

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

const TutorialQuiz:React.FC<ITutorialQuiz> = ({quizContents, userQuizContents}) =>{

    //Will Set Up the logic for this state controller later
    const [currentProgress, setCurrentProgress] = useState<number>(userQuizContents.currentProgress);
    const [currentQuestion, setCurrentQuestion] = useState<number>(userQuizContents.currentQuestion);
    const [questionList, setQuestionlist] = useState<IQuizQuestions[]>(quizContents);
    const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>(userQuizContents.userAnswers);

    const handleOnChangeRadio = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserAnswers((answers)=>{
            const updatedUserAnswers = [...answers]
            updatedUserAnswers[currentQuestion].questionAnswer = e.target.value
            return updatedUserAnswers
        })
    }

    const handleOnClickButton = (e:React.MouseEvent<HTMLButtonElement>)=>{

        const name:string = e.currentTarget.name;
        const questionName = questionList[currentQuestion].questionName;
        
        
        if(name === "prev"){
            if(currentQuestion > 0){
                setCurrentQuestion(prev=>prev-1)
                setCurrentProgress(prev=> prev-25)
            }
        }else if(name === "next"){

            if(currentQuestion < 3){
                setCurrentQuestion(prev=>prev+1)
                setCurrentProgress(prev=>prev+25)
            }
        }
    }


    // const questions:IQuizQuestions[] = [
    //     {
    //         question: "What is the capital of Vietnam?",
    //         questionName:"question0",
    //         options: ["Ha Noi", "Ho Chi Minh City", "Hai Phong", "Vung Tau"],
    //         correctAnswer: "Ha Noi"
    //     },{
    //         question: "What is the name of Lunar New Year in Vietnam?",
    //         options: ["Tet", "Nam Moi", "Trung Thu", "Doan Ngo"],
    //         questionName:"question1",
    //         correctAnswer: "Tet"
    //     },{
    //         question: "Where Vietnam is Located?",
    //         options: ["Southeast Asia", "South America", "Africa", "Europe"],
    //         questionName:"question2",
    //         correctAnswer: "Southeast Asia"
    //     },{
    //         question: "What is the taste of Vietnamese Cuisine?",
    //         options: ["Spicy", "Flavorful", "Balance and Harmony", "Sweetness"],
    //         questionName:"question3",
    //         correctAnswer: "Balance and Harmony"
    //     }
    // ] 

    const questionForm = questionList[currentQuestion].options.map((item, index)=>{
        return(
            <div key={index} className="space-x-3 flex items-center">
                <input  value={item} onChange={handleOnChangeRadio} checked = {item == userAnswers[currentQuestion].questionAnswer}type="radio" id={String(index)} name={questionList[currentQuestion].questionName} ></input>
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

                    <div className="w-full flex justify-between mt-6">
                        <button name="prev" type="button" onClick={(e)=>handleOnClickButton(e)} className={`bg-slate-400 h-[2.5rem] w-[8rem] rounded-lg text-white ${currentQuestion === 0 && "hidden right-0"}`}>Prev</button>

                        <button name="next" type="button" onClick={(e)=>handleOnClickButton(e)} className="bg-red-400 h-[2.5rem] w-[8rem] rounded-lg text-white">Next</button>
                    </div>
                </div>
                
            </div>

            {/**Modal Section */}
            <Modal >

            </Modal>
        </>
    )
}

export default TutorialQuiz;