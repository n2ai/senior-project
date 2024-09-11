interface IProfileHeader{
    fullName:string,
    levels:number | number
}

const ProfileHeader:React.FC<IProfileHeader> = ({fullName, levels})=>{
    return(
        <div className="border border-black w-full p-4 mt-3 rounded-lg">
            <div className="font-bold text-3xl text-red-400">
                <h1>{`Welcome back ${fullName} !`}</h1>
            </div>

            <div className="pt-4">
                <h1>{`Current level: ${levels}`}</h1>
            </div>
        </div>
    )
}

export default ProfileHeader