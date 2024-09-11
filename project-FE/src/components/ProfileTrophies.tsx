const ProfileTrophies = ()=>{
    return(
        <div className="flex flex-col mt-4 h-auto">
            {/* Road Map Title */}
            <div className="mb-4">
                <h1 className="font-bold text-3xl">Trophies</h1>
            </div>

            {/* Tree Component Container */}
            <div
                className="flex flex-grow w-full h-[80vh] border border-gray-300 justify-center items-center relative"
            >
                Currently Empty
            </div>
        </div>
    )
}

export default ProfileTrophies;