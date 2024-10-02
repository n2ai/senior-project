import React from "react";
import { Modal } from "react-bootstrap";

interface IQuizModal{
    correct:boolean,
    show:boolean,
    setClose:React.Dispatch<React.SetStateAction<boolean>>
}

const QuizModal:React.FC<IQuizModal> = ({correct, show, setClose})=>{


    return(
        <Modal show={show} centered onHide={()=>setClose(false)}>
            <Modal.Body className="flex items-center flex-col justify-center ">
                {correct ? 
                (
                    <>
                        <h1 className="text-2xl font-bold text-green-400">Correct Answer!</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-40 text-green-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </> 
                )
                :
                (   
                    <>
                        <h1 className="text-2xl font-bold text-red-400">Wrong Answer!</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-40 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </> 
                )
            }
            </Modal.Body>
        </Modal>
    )
}

export default QuizModal;