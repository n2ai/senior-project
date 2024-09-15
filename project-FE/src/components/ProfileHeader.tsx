interface IProfileHeader{
    fullName:string,
    levels:number | number
}

const ProfileHeader:React.FC<IProfileHeader> = ({fullName, levels})=>{
    return(
        <div className="w-full mb-3 rounded-lg">
            <div className="font-bold text-3xl text-red-400">
                <h1>{`Welcome back ${fullName} !`}</h1>
            </div>

        </div>
    )
}

export default ProfileHeader