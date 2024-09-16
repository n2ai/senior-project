import LevelCard from "./LevelCard";
import { MapContainer, TileLayer, Tooltip, Rectangle } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import hanoiImgURL from "../images/hanoi-3609871_1920.jpg";
import hochiminhImgURL from "../images/saigon-6670045_1920.jpg";
import { ProgressBar } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

export const citiesList = [
    {
        name:"Hanoi",
        region:"Northern",
        imgURL:hanoiImgURL,
        progress:100,
        description:"The Capital"
    },
    {
        name:"Hai Phong",
        region:"Northern",
        imgURL:hanoiImgURL,
        progress:100,
        description:"Hoa Cai Do"
    },
    {
        name:"Lang Son",
        region:"Northern",
        imgURL:hanoiImgURL,
        progress:100,
        description:"Chua di Chua biet"
    },
    {
        name:"Ho Chi Minh",
        region:"Southern",
        imgURL:hochiminhImgURL,
        progress:30,
        description:"The Heart of Finance"
    },
    {
        name:"Tay Ninh",
        region:"Southern",
        imgURL:hochiminhImgURL,
        progress:30,
        description:"Muoi Tay Ninh"
    },
    {
        name:"Ben Tre",
        region:"Southern",
        imgURL:hochiminhImgURL,
        progress:30,
        description:"Nhieu Dua vai lon"
    }
]

//Three main Regions
const ProfileLevels: React.FC = () => {
    const [currentRegion, setCurrentRegion] = useState<string>("Northern")

    const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle card highlighted


    // Define regions with proper LatLngBoundsExpression format
    const regions = [
        {
            name: 'Northern',
            bounds: [
                [22.5, 104.0], // South-West corner
                [20.0, 108.0], // North-East corner
            ],
            progress: 75, // 75% of game finished in this region
        },
        {
            name: 'Central',
            bounds: [
              [17.5, 105.5], // Narrowed South-West corner, centered around Da Nang
              [15.5, 108.5], // Narrowed North-East corner
            ],
            progress: 50, // 50% of game finished in this region
        },
        {
            name: 'Southern',
            bounds: [
                [12.0, 105.0], // South-West corner
                [8.5, 107.5],  // North-East corner
            ],
            progress: 30, // 30% of game finished in this region
        },
    ];
    


    // Set initial bounds to make the map focus on the shape of Vietnam
    const vietnamBounds = new LatLngBounds(
        [23.0, 102.0], // South-West corner (approximate top of Vietnam)
        [8.5, 110.0]   // North-East corner (approximate bottom of Vietnam)
    );

    const displayedCities = () => {

        const displayedCities = citiesList
            .filter((item) => item.region === currentRegion)
            .map((item, index) => (
            <LevelCard
                key={index}
                title={item.name}
                imgUrl={item.imgURL}
                description={item.description}
                progress={item.progress}
                unlock={true} // Adjust logic as needed
            />
        ));

        return displayedCities;
    }

    return (
        <div className="flex flex-col mt-4 items-center text-white">
            <div className="mb-4 w-full flex flex-col">
    
                {/**Start section */}
                <div>
                    <h1 className="text-3xl font-bold">
                        Start Your Journey Here
                    </h1>
                </div>

                <div className="mt-2">
                    <Typewriter
                        options={{
                        delay: 20, // Fastest delay to simulate typing
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Choose the area in the map to start the virtual experience!")
                            .callFunction(() => {
                            console.log('Letter typed out!');
                            })
                            .start();
                        }}
                    />
                </div>

            </div>
            
            <MapContainer
                className="border-2 rounded-lg border-red-400"
                bounds={vietnamBounds}
                style={{ height: '100vh', width: '50%' }} // Makes the map take full screen height
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* Displaying regions as rectangles with tooltips */}
                {regions.map((region, index) => (
                    <Rectangle
                        key={index}
                        bounds={region.bounds as any} // Cast bounds to `LatLngBoundsExpression`
                        fillColor="green"
                        color="black"
                        fillOpacity={0.3}
                        eventHandlers={{
                            click:()=> setCurrentRegion(region.name)
                        }}
                    >
                        <Tooltip>
                            <div>
                                <h3>{region.name}</h3>
                                <ProgressBar className="h-2" variant="black" now={region.progress}>

                                </ProgressBar>
                                <p>Game Progress: {region.progress}%</p>
                            </div>
                        </Tooltip>
                    </Rectangle>
                ))}
            </MapContainer>
        
            <div className="w-full pt-4 flex flex-col flex-wrap gap-5 justify-center">
                <div>

                    <h1 className="text-2xl font-bold">
                        Your Current Level
                    </h1>

                </div>

                <div className="flex flex-wrap gap-5 justify-center">
                    {displayedCities()}
                </div>
                
            </div>
        </div>
    )
}

export default ProfileLevels;
