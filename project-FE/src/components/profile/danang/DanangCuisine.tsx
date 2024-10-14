import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";

const DanangCuisine = ()=>{

    const [currentCard, setCurrentCard] = useState<number>(0);
    
    const swiperContents:swiperContent[] = [{
        
    },{

    }]

    return(
        <div>
            Cuisine
        </div>
    )
}

export default DanangCuisine;