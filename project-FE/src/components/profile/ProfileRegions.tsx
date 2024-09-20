import { useState } from "react";
import northImgURL from "../../images/north.jpg";
import centralImgURL from "../../images/central.jpg";
import southImgURL from "../../images/south.jpg";

interface IProfileRegions{
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileRegions:React.FC<IProfileRegions> = ({setCurrentPage})=>{
    return(
        <div>
            <div className="flex-col gap-3">
                <h1 className="text-3xl text-gray-700 font-bold">Welcome Back Hai </h1>
                <p className="text-2xl text-gray-700">Choose the below area to start your journey !</p>
            </div>

            <div className=" mt-4 w-full h-full flex flex-col items-center gap-5">
                {/**Northern */} 
                <div className="relative max-w-[700px] flex bg-cover bg-center rounded-lg flex-col w-full h-56 group"
                style={{ backgroundImage: `url(${northImgURL})` }}>
                    <div className="absolute overflow-hidden rounded-lg bottom-0 left-0 right-0 w-full h-0 ease-in-out duration-1000 group-hover:h-full backdrop-blur-md">
                        {/**Poem */}
                        <div className="w-full h-1/2 text-white flex-nowrap flex items-center justify-center">
                            <p className="flex-shrink-0 text-center caligraphy font-bold w-2/3">"Lang thang Tây Bắc giữa hư không.
                                Tím biếc chiều đông vẩy sắc hồng
                                Tiếng hát ngân nga vang bóng núi.
                                Câu hò cao vút dậy mom sông"
                            </p>
                        </div>

                        {/**Button */}
                        <div className="w-full h-1/2 flex justify-center items-center">
                            <button onClick={()=>setCurrentPage("northern")} className="w-[300px] rounded-lg flex justify-center items-center text-white bg-red-400 h-[30px]">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div> 
                    <div className="h-full w-full text-white flex items-center justify-center">
                        <p className="caligraphy text-3xl">Northern</p>
                    </div>
                </div>

                {/**Southern */}
                <div className="relative max-w-[700px] flex bg-cover bg-center rounded-lg flex-col w-full h-56 group"
                style={{ backgroundImage: `url(${centralImgURL})` }}>
                    <div className="absolute overflow-hidden rounded-lg bottom-0 left-0 w-full h-0 right-0 ease-in-out duration-1000 group-hover:h-full backdrop-blur-md">
                        {/**Poem */}
                        <div className="w-full h-1/2 text-white flex-nowrap flex items-center justify-center">
                            <p className="flex-shrink-0 text-center caligraphy font-bold w-2/3">"Khoảng trời tôi da diết một miền Trung
                                Nghe mưa đổ quê nhà lòng thao thức
                                Đất lam lũ quặn mình bao cơ cực
                                Vẫn kiên cường kiêu hãnh trước bão giông"
                            </p>
                        </div>

                        {/**Button */}
                        <div className="w-full h-1/2 flex justify-center items-center">
                            <button onClick={()=>setCurrentPage("central")} className="w-[300px] rounded-lg flex justify-center items-center text-white bg-red-400 h-[30px]">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div> 
                    <div className="h-full w-full text-white flex items-center justify-center">
                        <p className="caligraphy text-3xl">Central</p>
                    </div>
                </div>

                {/**Central */}
                <div className="relative max-w-[700px] flex bg-cover bg-center rounded-lg flex-col w-full h-56 group"
                style={{ backgroundImage: `url(${southImgURL})` }}>
                    <div className="absolute overflow-hidden rounded-lg bottom-0 left-0 w-full h-0 right-0 ease-in-out duration-1000 group-hover:h-full backdrop-blur-md">
                        {/**Poem */}
                        <div className="w-full h-1/2 text-white flex-nowrap flex items-center justify-center">
                            <p className="flex-shrink-0 text-center caligraphy font-bold w-2/3">"Ôi đất mẹ hiền từ, yêu quý
                                Có nơi đâu, trên trái đất này
                                Như miền Nam, đắng cay, chung thuỷ
                                Như miền Nam, gan góc, dạn dày!"
                            </p>
                        </div>

                        {/**Button */}
                        <div className="w-full h-1/2 flex justify-center items-center">
                            <button onClick={()=>setCurrentPage("southern")} className="w-[300px] rounded-lg flex justify-center items-center text-white bg-red-400 h-[30px]">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div> 
                    <div className="h-full w-full text-white flex items-center justify-center">
                        <p className="caligraphy text-3xl">Southern</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRegions