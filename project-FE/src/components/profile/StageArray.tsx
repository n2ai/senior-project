type stage = {
    name:string,
    img:string,
    title:string,
    subtitle:string,
}

interface IStageArray{
    stages: stage[]
    currentStage: string,
    setCurrentStage: React.Dispatch<React.SetStateAction<string>>,
    className?:string
}  

const StageArray:React.FC<IStageArray> = ({stages, currentStage, setCurrentStage, className})=>{
    const stageArray = stages.map((item, index)=>{
        return(
            <div onClick={()=>setCurrentStage(item.name)} key={index} style={{ backgroundImage: `url(${item.img})` }} 
            className={` bg-center cursor-pointer bg-cover h-screen hover:w-1/2 transition-all duration-1000 ${currentStage == item.name ? "w-1/2" : "w-1/4"} ${className}`}>
                <div className="flex flex-col items-center mt-5">
                    <h1 className="text-5xl font-bold caligraphy">{item.title}</h1>
                    <p className="text-2xl font-bold">{item.subtitle}</p>
                </div>
            </div>
        )
    })

    return stageArray
}

export default StageArray;