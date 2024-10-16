import hcmImgUrl6 from "../../../images/hochiminhLevelImages/hcmcafe1.jpg";
import hcmImgUrl7 from "../../../images/hochiminhLevelImages/bombingthehcmtrail.jpg"
import hcmImgUrl8 from "../../../images/hochiminhLevelImages/hcmstreetatnight.jpg";
import hcmImgUrl9 from "../../../images/hochiminhLevelImages/hcmbuildings.jpg";
import hcmImgUrl10 from "../../../images/hochiminhLevelImages/buivienhcm.jpg";

const HochiminhPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            <h1 className="font-bold text-3xl text-center">Sai Gon</h1>
            <p className="indent-14 text-xl font-monospace">
                Ho Chi Minh City, formerly known as Saigon, is the largest 
                and most populous city in Vietnam. As the economic, cultural
                , and educational hub of the country, it is home to a dynamic and diverse population. 
                The people of Ho Chi Minh City are often seen as the driving force 
                behind its remarkable growth and development. This page explores the 
                characteristics, diversity, resilience, and cultural richness of the 
                people of Ho Chi Minh City, highlighting how their history and way of 
                life have shaped the city.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl6} className="w-[1000px]">
                </img>
                <p className="italic">Inside a Coffee Store</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Historical Background and Resilience</h1>
            <p className="indent-14 text-xl font-monospace">
                The people of Ho Chi Minh City have a long history of 
                resilience. From its colonial past to the Vietnam War and 
                subsequent reunification, they have shown an incredible 
                ability to adapt and rebuild. After the war, the city 
                experienced rapid urbanization and economic reforms, yet 
                the people managed to preserve their unique identity and 
                determination. Their resilience can be seen in the city's 
                evolution from war-torn Saigon to the thriving metropolis 
                of today.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl7} className="w-[1000px]">
                </img>
                <p className="italic">Bombing the Ho Chi Minh Trail</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Diversity and Cultural Fusion</h1>
            <p className="indent-14 text-xl font-monospace">
                One of the defining characteristics of the people of 
                Ho Chi Minh City is their diversity. Historically, the 
                city has attracted migrants from across Vietnam and beyond, 
                resulting in a melting pot of ethnicities, cultures, and 
                traditions. Chinese, Khmer, and French influences have 
                shaped the city’s food, architecture, and social fabric. 
                This diversity is reflected in the daily lives of its 
                people, who celebrate a wide array of festivals and 
                cultural events, blending traditional Vietnamese customs 
                with modern global influences.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl8} className="w-[1000px]">
                </img>
                <p className="italic">Ho Chi Minh Street at Night</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Entrepreneurial Spirit and Economic Growth</h1>
            <p className="indent-14 text-xl font-monospace">
                Ho Chi Minh City is the economic powerhouse of Vietnam, 
                and its people are known for their entrepreneurial spirit. 
                The city's residents are industrious, with a strong work 
                ethic that fuels the rapid pace of economic development. 
                Small businesses, street vendors, and startups thrive 
                alongside multinational corporations. The innovative and 
                entrepreneurial mindset of the people has made Ho Chi Minh 
                City a leading player in the global economy, attracting 
                investments and fostering a culture of creativity and 
                ambition.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl9} className="w-[1000px]">
                </img>
                <p className="italic">A View of Ho Chi Minh City</p>
            </div>
            

            <h1 className="font-bold text-3xl text-center">Hospitality and Community Values</h1>
            <p className="indent-14 text-xl font-monospace">
                Despite the fast-paced lifestyle of the city, the people 
                of Ho Chi Minh City maintain a strong sense of hospitality 
                and community. Vietnamese values, such as respect for 
                elders and familial bonds, remain central to their way of 
                life. Visitors often note the friendliness and warmth of 
                the city’s inhabitants, who are quick to offer help and 
                share their rich cultural traditions. This sense of 
                community, even in an urban environment, reflects the 
                deep-rooted cultural values that continue to shape the 
                city's social fabric.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl10} className="w-[1000px]">
                </img>
                <p className="italic">Bui Vien Walking Street</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Challenges and Future Outlook</h1>
            <p className="indent-14 text-xl font-monospace">
                Like any large metropolis, the people of Ho Chi Minh City 
                face challenges, including traffic congestion, rapid 
                urbanization, and environmental concerns. However, their 
                adaptability and forward-thinking approach offer hope for 
                the future. The city's younger generation is tech-savvy, 
                globally connected, and eager to take on leadership roles 
                in shaping the city's future. With their energy and vision, 
                Ho Chi Minh City is poised to continue its growth as a 
                vibrant and progressive urban center.
            </p>
            {/* <div className="flex flex-col items-center">
                <img src={hanoiImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">A Corner of Hanoi Old Town</p>
            </div> */}
        </div>
    )
}

export default HochiminhPeople;