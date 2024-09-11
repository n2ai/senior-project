import LevelCard from "./LevelCard";



const ProfileBody:React.FC = ()=>{
    return (
        <div className="flex flex-col mt-4">
            <div className="mb-4">
                <h1 className="font-bold text-3xl">
                    Learning Levels
                </h1>
            </div>
            <LevelCard title="Ha noi" description="The Capital" progress={60} unlock={true}></LevelCard>
        </div>
    )
}

export default ProfileBody;