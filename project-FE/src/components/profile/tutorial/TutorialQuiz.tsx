import { useState } from "react";
import { ProgressBar, Card } from "react-bootstrap";

interface IQuizQuestions  {
    question: string,
    options: string[],
    correctAnswer: string

}

const TutorialQuiz = () =>{

    //Will Set Up the logic for this state controller later
    const [currentProgress, setCurrentProgress] = useState<number>(0)

    const questions:IQuizQuestions[] = [
        {
            question: "What is the capital of Vietnam",
            options: ["Ha Noi", "Ho Chi Minh City", "Hai Phong", "Vung Tau"],
            correctAnswer: "Ha Noi"
        },{
            question: "What is the name of Lunar New Year in Vietnam",
            options: ["Tet", "Nam Moi", "Trung Thu", "Doan Ngo"],
            correctAnswer: "Tet"
        },{
            question: "Where Vietnam is Located",
            options: ["Southeast Asia", "South America", "Africa", "Europe"],
            correctAnswer: "Southeast Asia"
        },{
            question: "What is the taste of Vietnamese Cuisine",
            options: ["Spicy", "Flavorful", "Balance and Harmony", "Sweetness"],
            correctAnswer: "Balance and Harmony"
        }
    ] 



    return(
        <div className="w-full h-screen container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            <h1 className="font-bold text-3xl text-center">
                Finish the Questions Below and Advance to the Next Levels
            </h1>
            
            <div className="w-full">
                <ProgressBar className="h-2" variant="black" now={currentProgress}></ProgressBar>
            </div>
            
            {/**This will be the form section */}
            
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">

                <form className="w-full flex justify-center">

                </form>
            </div>
            
        </div>
    )
}

export default TutorialQuiz;