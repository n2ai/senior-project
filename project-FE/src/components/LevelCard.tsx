import { Card, ProgressBar } from "react-bootstrap";

interface ILevelCard{
    title:string,
    description?:string,
    progress:number,
    unlock:boolean,
    imgUrl:string,
    region?:string
}

const LevelCard:React.FC<ILevelCard> = ({title, description, progress, unlock, imgUrl})=>{
    return(
        <Card className={`duration-500 ease-in-out transform hover:scale-110 w-[25rem] border relative ${!unlock && "opacity-50 pointer-events-none"}`} 
            style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>

            <Card.Body className="relative z-10">
                <Card.Title className="font-bold text-white">{title}</Card.Title>
                {/* <Card.Subtitle className="text-gray-200">{description}</Card.Subtitle> */}

                { unlock ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-6 absolute top-3 right-2 text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg> 
                : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-3 right-2 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                }
                <div className="flex flex-col mt-4">
                    <ProgressBar className="h-2 bg-gray-300" variant="success" now={progress}></ProgressBar>
                    <h1 className="text-gray-300">{`Progress: ${progress}%`}</h1>
                </div>
                
                <div className="mt-4">
                    <button className="bg-red-400 text-white w-full p-2 rounded-lg font-semibold">Start Level</button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default LevelCard;