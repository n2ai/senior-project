import mountainUrl from "../videos/59291-492700392_small.mp4"

const Credentials = ()=>{
    return(
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src={mountainUrl} type="video/mp4" />
                Your Browser does not support the video tag
            </video>

            <div className="relative z-10 bg-white/80 backdrop-blur-md items-center flex-col flex p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="w-[80%] flex flex-col items-center">
                    <h1>Login</h1>

                    <label className="flex flex-col">
                        <span>Email</span>
                        <input className="p-2 border" placeholder="Enter Your Full Name"></input>
                    </label>
                </div>
     
            </div>
        </div>
    )
}

export default Credentials;