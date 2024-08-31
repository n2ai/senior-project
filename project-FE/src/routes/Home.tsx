import bridgeImg from "../images/bridge-7438161_1920.jpg";
import haLongImg from "../images/ha-long-bay-2404431_1920.jpg";
import oldWomanImg from "../images/ha-long-bay-2404431_1920.jpg";
import riceFiledImg from "../images/rice-field-7218033_1920.jpg";
import saigonRiverImg from "../images/saigon-river-4593234_1920.jpg";
import streetVendorImg from "../images/street-vendor-4176310_1920.jpg";
import Typewriter from 'typewriter-effect';
import { useState, useEffect, ReactElement, JSXElementConstructor } from "react";
import footerVideo from "../videos/14385-256955049_small.mp4";

//Import React Component
import GeneralInfo from "../components/GeneralInfo";
import GoalInfo from "../components/GoalInfo";
import TopicInfo from "../components/TopicInfo";

const Home = ()=>{

    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [guideInfoIndex, setGuideInfoIndex] = useState<number>(0);

    const images:string[] = [
        bridgeImg,
        haLongImg,
        oldWomanImg,
        riceFiledImg,
        saigonRiverImg,
        streetVendorImg
    ]

    //header Style
    const headerStyle = {
        backgroundImage: `url(${oldWomanImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',

    }

    //Nav Bar Link
    const navBarLink:{
        id:string,
        href:string,
        name:string
    }[] = [
        {
            id:'home',
            href:'#',
            name:'Home'
        },{
            id:'aboutUs',
            href:'#aboutUs',
            name:'About Us'
        },{
            id:'contact',
            href:'#contactUs',
            name:'Contact'
        }
    ]

    const navBarItems = navBarLink.map((item)=>{
        return(
            <a className="block max-sm:mt-3 sm:inline" href={item.href} id={item.id}>
              {item.name}  
            </a>
        )
    })

    const guideInfoArray:{id:number,buttonName:string,information:()=>ReactElement, icon:ReactElement}[] = [{
        id:0,
        buttonName:"What is this?",
        information:GeneralInfo,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
    },{
        id:1,
        buttonName:"What topic?",
        information:TopicInfo,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
                  
    },{
        id:2,
        buttonName:"Our Goal",
        information:GoalInfo,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
    }]

    const guideInfoButtonClickHandler = (index:number):void=>{
        setGuideInfoIndex(index)
    }

    const guideInfoButtonArray = guideInfoArray.map((item)=>{
        return (<button className={`${guideInfoIndex === item.id && ("bg-red-400 text-white")} w-[12.5rem] h-[2.5rem] hover:text-white font-bold hover:bg-red-300 rounded-full items-center flex justify-center`} id={String(item.id)} onClick={()=>guideInfoButtonClickHandler(item.id)}>
            <span className="flex items-center space-x-2">
                {item.icon}
                <p className="m-0">{item.buttonName}</p>
            </span>         
        </button>)
    })

    const hamburgerOnClick = ():void=>{
        setNavOpen((prev)=>!prev)
    }

    const leftButtonGuideInfo = ():void=>{
        setGuideInfoIndex((prev)=>{
            return (Math.abs((prev-1) % guideInfoArray.length)) 
        })
    }

    const rightButtonGuideInfo = ():void=>{
        setGuideInfoIndex((prev)=>{
            return ((prev+1) % guideInfoArray.length) 
        })
    }

    return(

        <div>
            <div className="w-full h-[600px] flex items-center justify-center" style={headerStyle}>
                <div className="container w-full h-full text-white pt-3 flex-col"> {/* Added bg-red-500 for visibility */}
                    <div className="flex w-full h-[36px] justify-around">
                        {/**Title */}
                        <div className="w-full h-full flex items-center">
                            <h1 className="caligraphy text-3xl">Vietnam Travel</h1>
                        </div>

                        {/**Nav Bar */}
                        <div className="sm:flex w-full h-full items-center gap-6 justify-center hidden">
                            {navBarItems}
                        </div>

                        {/**Hamburger Nav Bar */}
                        <div className="flex sm:hidden items-center relative">
                            <button onClick={hamburgerOnClick} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>

                            <div
                                className={`absolute top-[40px] right-[2px] w-[200px] h-[200px] backdrop-blur-sm transition-opacity duration-300 ${navOpen ? "opacity-100" : "opacity-0"}`}    
                            >
                                <div className="w-full h-full gap-3 flex-col p-3 items-center text-center">
                                    {navBarItems}
                                </div>
                                
                            </div>

                        </div>

                    </div>

                    {/**Description */}

                    <div className="w-full mt-[100px] h-[300px] ">
                        <p className=" text-2xl">
                            Join the virtual experience
                        </p>

                        <p className="caligraphy text-7xl mt-2">
                            Tour to Vietnam !
                        </p>

                        <p className="text-xl mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus id eveniet, sapiente eligendi iusto. Doloremque nisi facere ea voluptatum commodi omnis facilis aspernatur, itaque perferendis quas rerum similique tempora.
                        </p>

                        <button type="button" className="font-bold flex items-center justify-center gap-x-2  mt-4  rounded-lg w-[150px] bg-red-400 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                                    
                            <p>Join Us</p>
                        </button>
                    </div>
                </div>
            </div>

            {/**Info section */}
            <div className="w-full">
                <div className="container pt-5 flex flex-col h-auto">
                    <h1>Tour Guide</h1>
                    <div className="mt-2 flex flex-col">
                        <div>
                            <h1 className="text-3xl">General Information</h1>
                        </div>
                        
                        <div className="mt-4 flex flex-col">
                            {/* Mobile */}
                            {/* Banner Button */}
                            <div className="w-full flex items-center justify-between sm:hidden">
                                <button onClick={leftButtonGuideInfo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>

                                <div className="w-[12.5rem] h-[2.5rem] text-white font-bold bg-red-400 rounded-full items-center flex justify-center">
                                    <span className="flex items-center space-x-2">
                                        {guideInfoArray[guideInfoIndex].icon}
                                        <p className="m-0">{guideInfoArray[guideInfoIndex].buttonName}</p>
                                    </span>  
                                </div>

                                <button onClick={rightButtonGuideInfo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            {/* Desktop */}
                            <div className="w-full max-sm:hidden flex justify-around">
                                {guideInfoButtonArray}
                            </div>

                            {/* Information */}
                            <div className="w-full pt-4 flex justify-center">
                                {guideInfoArray[guideInfoIndex].information()}    
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
            {/**About US Section */}
            <div className="w-full" id="aboutUs">
                <div className="container pt-5 flex flex-col h-auto">
                    <h1>About Us</h1>
                    <div className="mt-2 flex flex-col">
                        <div>
                            <h1 className="text-3xl">A Letter from the Developer</h1>
                        </div>

                        <div className="mt-4 flex flex-col items-center">
                            <div className="w-[80%]">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Hai Trinh letter')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .start();
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**Contact Us Section*/}
            <div className="w-full" id="contactUs">
                <div className="container pt-5 flex flex-col h-auto">
                    <h1>Contact Us</h1>
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-3xl">Get in Touch</h1>
                        </div>
                        
                        {/** Container*/}
                        <div className="w-full flex flex-col items-center">
                            <div className="p-4  flex flex-col items-center">

                                <div className="flex flex-col gap-3 w-[80%] mt-5">
                                    
                                    <h1 className=" text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</h1>

                                    <label className="flex flex-col">
                                        <span className="font-bold">Full Name</span>
                                        <input className="border rounded-sm p-2" placeholder="Enter your full name"></input>
                                    </label>

                                    <label className="flex flex-col">
                                        <span className="font-bold">Email Address</span>
                                        <input className="border rounded-sm p-2" placeholder="Enter your Email"></input>
                                    </label>

                                    <label className="flex flex-col">
                                        <span className="font-bold">Message</span>
                                        <textarea className="border rounded-sm p-2" placeholder="Tell us how we can help you"></textarea>
                                    </label>

                                    <div className="flex flex-col">
                                        <button className="border rounded-full p-2 bg-red-400 font-bold text-white">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/**Footer */}
            <div className="w-full h-[10rem]">
                <video autoPlay muted loop>
                    <source src={footerVideo} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Home;