import { useState } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import northImgURL from "../images/north.jpg";
import centralImgURL from "../images/central.jpg";
import southImgURL from "../images/south.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProfileRegions = ()=>{
    return(
        <div>
            
            <div className="flex-col gap-3">
                <h1 className="text-3xl font-bold">Welcome Back Hai </h1>
                <p className="text-2xl">Choose the below area to start your journey !</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2">

                {/**North */}
                <Card className="w-1/3 flex flex-row md:flex-col h-full">
                    <CardImg className="w-full h-48 object-cover" variant="top" src={northImgURL}>

                    </CardImg>
                    <CardBody className="">
                        <CardTitle>
                            Northern
                        </CardTitle>

                        <CardText className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error harum minima delectus assumenda molestiae corrupti obcaecati aut magni distinctio voluptatibus voluptates ea, nisi a itaque. Veritatis asperiores assumenda odit.
                        </CardText>

                        <div className="">
                            <p>Your current Progress:</p>
                            <ProgressBar variant="success" now={60}/>
                        </div>
                        
                        <div className="w-full">
                            <button className="flex justify-center items-center gap-2 w-full h-9 text-white bg-red-400 rounded-lg">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </button>
                        </div>

                    </CardBody>
                </Card>
                {/**Central */}
                <Card className="w-1/3">
                    <CardImg className="w-full h-48 object-cover" variant="top" src={centralImgURL}>

                    </CardImg>
                    <CardBody className="">
                        <CardTitle>
                            Central
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ut quam culpa provident dolore minus, sunt rerum consequatur beatae iusto veritatis inventore! Nulla temporibus delectus incidunt impedit asperiores aspernatur dolor!
                        </CardText>

                        <div>
                            <p>Your current Progress:</p>
                            <ProgressBar variant="success" now={60}/>
                        </div>
                        
                        <div className="w-full">
                            <button className="flex justify-center items-center gap-2 w-full h-9 text-white bg-red-400 rounded-lg">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </CardBody>
                </Card>
                {/**South */}
                <Card className="w-1/3">
                    <CardImg className="w-full h-48 object-cover" variant="top" src={southImgURL}>

                    </CardImg>
                    <CardBody className="">
                        <CardTitle>
                            Southern
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis delectus! Dolorum illum mollitia, fugiat iste fuga eveniet asperiores pariatur nobis magnam dolore et. Nihil animi corporis non repudiandae nostrum.
                        </CardText>

                        <div>
                            <p>Your current Progress:</p>
                            <ProgressBar variant="success" now={60}/>
                        </div>

                        <div className="w-full">
                            <button className="flex justify-center items-center gap-2 w-full h-9 text-white bg-red-400 rounded-lg">
                                <p>Start</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProfileRegions