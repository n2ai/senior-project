import LevelCard from "./LevelCard";



const ProfileLevels:React.FC = ()=>{
    return (
        <div className="flex flex-col mt-4">
            <div className="mb-4">
                <h1 className="font-bold text-3xl">
                    Learning Levels
                </h1>
            </div>

            <div className="w-full pt-4 flex flex-wrap gap-5 justify-center">
                <LevelCard title="Ha noi" description="The Capital" progress={30} unlock={false}></LevelCard>
                <LevelCard title="Ha noi" description="The Capital" progress={60} unlock={true}></LevelCard>
                <LevelCard title="Ha noi" description="The Capital" progress={60} unlock={true}></LevelCard>
            </div>
        </div>
    )
}

export default ProfileLevels;