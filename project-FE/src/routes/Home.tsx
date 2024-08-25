import { CarouselCaption, CarouselItem } from "react-bootstrap";
import bridgeImg from "../images/bridge-7438161_1920.jpg";
import haLongImg from "../images/ha-long-bay-2404431_1920.jpg";
import oldWomanImg from "../images/ha-long-bay-2404431_1920.jpg";
import riceFiledImg from "../images/rice-field-7218033_1920.jpg";
import saigonRiverImg from "../images/saigon-river-4593234_1920.jpg";
import streetVendorImg from "../images/street-vendor-4176310_1920.jpg";
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
const Home = ()=>{

    const images:string[] = [
        bridgeImg,
        haLongImg,
        oldWomanImg,
        riceFiledImg,
        saigonRiverImg,
        streetVendorImg
    ]
    return(
    
        <div className="w-screen h-screen bg-black">
            
            <div className="flex items-center justify-center">
                <h1 className="text-white">The Vietnam Project</h1>
            </div>

            {/** Gallery section */}

            {/**This one only display when screen is sm / md */}
            <div className="flex justify-center lg:hidden">
                <Carousel className="w-[400px] border rounded">
                    <Carousel.Item className="relative w-full group">
                        <img alt="text" src={images[0]} className="border rounded object-cover">

                        </img>
                        
                        <CarouselCaption>
                            <h1 className=" text-3xl">Our Story</h1>
                        </CarouselCaption>
                        
                    </Carousel.Item>
                </Carousel>
            </div>

            {/**This one display when screen is lg */}
            <div className="lg:flex justify-center gap-3 items-center hidden">
                <div className="w-[300px]">
                    <img src={images[0]} className=" border rounded object-cover">

                    </img>
                </div>

                <div className="w-[300px]">
                    <img src={images[0]} className=" border rounded object-cover">

                    </img>
                </div>

                <div className="w-[300px]">
                    <img src={images[0]} className=" border rounded object-cover">

                    </img>
                </div>
            </div>
        </div>
    
    )
}

export default Home;