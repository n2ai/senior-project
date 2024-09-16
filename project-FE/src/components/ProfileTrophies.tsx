const ProfileTrophies = ()=>{
    return(
        <div className="flex flex-col mt-4 h-auto text-white">
            {/* Road Map Title */}
            <div className="mb-4">
                <h1 className="font-bold text-3xl">Trophies</h1>
            </div>

            {/* Tree Component Container */}
            <div
                className="flex flex-grow w-full h-[40vh] border-2 border-dashed border-red-400 justify-center items-center"
            >
                Currently Empty
            </div>
        </div>
    )
}

export default ProfileTrophies;