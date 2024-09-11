import { Card, CardText, ProgressBar } from "react-bootstrap"

interface ILevelCard{
    title:string,
    description:string,
    progress:number,
    unlock:true
}

const LevelCard:React.FC<ILevelCard> = ({title, description, progress, unlock})=>{
    return(
        <Card className="w-[25rem] border-black">
            <Card.Body className="relative">
                <Card.Title className="font-bold">{title}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="size-6 absolute top-3 right-2 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <div className="flex flex-col mt-4">
                    <ProgressBar className="h-2" variant="black" now={progress}></ProgressBar>
                    <h1 className="text-slate-500">{`Progress: ${progress}%`}</h1>
                </div>
                
                <div className="mt-4">
                    <button className="bg-black text-white w-full p-1 rounded-lg">Start Level</button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default LevelCard