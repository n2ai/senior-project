import haiphongImgUrl1 from "/images/haiphongLevelImages/tphaiphong1.jpg";
import haiphongImgUrl2 from "/images/haiphongLevelImages/buudienhaiphong.jpg";
import haiphongImgUrl3 from "/images/haiphongLevelImages/Le-Hoi-Choi-Trau-2.jpg";
import haiphongImgUrl4 from "/images/haiphongLevelImages/Quan Ho at its best.jpg";

const HaiphongCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Exploring the Culture of Hai Phong: A Northern Vietnamese Gem</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Hai Phong, a bustling port city located in northern Vietnam, 
                is renowned for its unique cultural heritage that blends 
                traditional Vietnamese values with regional influences. As a 
                key hub for trade and industry, the city’s culture has evolved 
                with an openness to diversity while retaining a deep connection 
                to its historical roots. Exploring Hai Phong offers a rich 
                experience of local customs, festivals, and arts, providing a 
                window into the soul of northern Vietnam.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Aerial View of Hai Phong City</p>
            </div>

            <h1 className="font-bold text-3xl text-center">The Maritime Spirit</h1>
            
            <p className="indent-14 text-xl font-monospace">
                One of the defining aspects of Hai Phong’s culture is its 
                strong connection to the sea. As a coastal city, much of Hai 
                Phong’s identity is tied to maritime traditions. Fishing has 
                historically been a way of life for many of its inhabitants, 
                and this is reflected in local folklore, songs, and festivals. 
                The Do Son Buffalo Fighting Festival, a unique event that draws 
                both locals and visitors, is deeply rooted in the city’s 
                maritime culture. It is not only a display of local 
                entertainment but also a symbol of the strength and 
                perseverance of the people who have long thrived by the sea.
            </p>

            <h1 className="font-bold text-3xl text-center">Architectural Heritage</h1>
            
            <p className="indent-14 text-xl font-monospace">
                The French colonial era left a lasting imprint on Hai Phong’s
                architecture, which is visible throughout the city in its 
                well-preserved colonial buildings and tree-lined boulevards. 
                The combination of European design with local Vietnamese 
                elements creates a distinct urban landscape. Notable landmarks, 
                such as the Municipal Theater and the Opera House, stand as 
                elegant reminders of the city’s past. These architectural 
                treasures reflect Hai Phong’s history as a key port city during 
                the colonial period and contribute to its cultural richness.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl2} className="w-[800px]">
                </img>
                <p className="italic">Hai Phong Post Office</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Traditional Festivals and Rituals</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Festivals in Hai Phong play a significant role in preserving 
                its cultural identity. These celebrations, often steeped in 
                ancient traditions, allow both the older and younger 
                generations to connect with their roots. In addition to the Do 
                Son Buffalo Fighting Festival, Hai Phong hosts other festivals 
                such as the Trang Trinh Temple Festival, which honors the 
                renowned scholar and poet Nguyen Binh Khiem. These events are 
                filled with colorful processions, performances of traditional 
                music, and rituals that reflect the city’s deep respect for its 
                historical figures and spiritual beliefs.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl3} className="w-[800px]">
                </img>
                <p className="italic">Buffalo Fighting Festival</p>
            </div>

            <h1 className="font-bold text-3xl text-center">The Artistic Legacy of Hai Phong</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Hai Phong is also a city where the arts flourish. Traditional 
                music, particularly the northern Vietnamese style of folk music 
                known as Quan Ho, holds a special place in local culture. Quan 
                Ho performances often accompany festivals and community 
                gatherings, keeping this ancient form of entertainment alive in 
                modern times. Additionally, Hai Phong has nurtured contemporary 
                artists, whose works blend local themes with global perspectives. 
                This artistic diversity has helped shape the city’s identity as a cultural 
                hub in the northern region.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl4} className="w-[800px]">
                </img>
                <p className="italic">Quan Ho Folk Singing</p>
            </div>
            {/* <div className="flex flex-col items-center">    
                <img src={hanoiImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">A Corner of Hanoi Old Town</p>
            </div> */}
            
            

        </div>
    )
}

export default HaiphongCulture;