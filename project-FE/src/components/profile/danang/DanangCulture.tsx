import danangImgUrl1 from "/images/danangLevelImages/causonghan1.jpg";
import danangImgUrl2 from "/images/danangLevelImages/tuongphatquanam.jpg"
import danangImgUrl3 from "/images/danangLevelImages/chuanamson.jpg";
import danangImgUrl4 from "/images/danangLevelImages/lehoicaungu.jpg";
import danangImgUrl5 from "/images/danangLevelImages/hatboidanang.jpg";
import danangImgUrl6 from "/images/danangLevelImages/rooftopbarindanang.jpeg";

const DanangCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Danang's Culture: A Tapestry of Tradition and Modernity</h1>

            <div className="flex flex-col items-center">    
                <img src={danangImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Han River's Bridge</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
                Danang, located on Vietnam's central coast, is one of the country’s most vibrant cities. Known for its beautiful landscapes, beaches, and dynamic urban development, 
                the city is also a melting pot of cultural richness, blending traditional Vietnamese heritage 
                with modern influences. From its historical monuments and festivals to its burgeoning art scene 
                and culinary traditions, Danang's culture reflects the spirit of a city that bridges the old and 
                the new.
            </p>

            <h1 className="font-bold text-3xl text-center">Historical and Religious Influences</h1>
            <p className="indent-14 text-xl font-monospace">
                Danang’s culture is deeply rooted in Vietnam’s long history, with many historical 
                landmarks that tell the story of the region’s development over centuries. The city’s 
                religious and spiritual landscape is diverse, reflecting the strong presence of Buddhism
                , Confucianism, and indigenous Vietnamese beliefs. The Linh Ung Pagoda, with its 
                towering Lady Buddha statue, is a prominent symbol of the city’s Buddhist tradition. 
                Nestled on the Son Tra Peninsula, the pagoda is both a spiritual and cultural icon, 
                offering locals and tourists a glimpse into the religious life that remains central to 
                Danang’s identity.
            </p>

            <div className="flex flex-col items-center">    
                <img src={danangImgUrl2} className="w-[500px]">
                </img>
                <p className="italic">Lady Buddha Statue</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
                Nearby, the Marble Mountains stand as a testament to the city’s ancient heritage, 
                with caves and tunnels once used for religious worship by the Cham people, an 
                indigenous group who lived in central Vietnam. The Cham Museum in Danang preserves 
                the artifacts and history of this once-powerful kingdom, showcasing sculptures and 
                relics that reflect the Cham’s rich culture and contributions to Vietnamese history. 
                These historical sites provide an essential link to Danang’s past, fostering a sense 
                of continuity in the city’s evolving cultural landscape.
            </p>

            <h1 className="font-bold text-3xl text-center">Festivals and Celebrations</h1>
            <p className="indent-14 text-xl font-monospace">
                Festivals in Danang are a key reflection of the city’s cultural diversity and traditions
                . The Danang International Fireworks Festival is one of the city’s most anticipated 
                events, drawing participants from all over the world. Held annually along the Han River
                , this event is not just about pyrotechnics but also celebrates the cultural exchanges 
                between different nations. It exemplifies Danang’s status as a globalized city that 
                values both local traditions and international collaboration.
            </p>

            <div className="flex flex-col items-center">    
                <img src={danangImgUrl3} className="w-[1000px]">
                </img>
                <p className="italic">Nam Son Pagoda</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
                {`More traditional festivals, like the Cau Ngu Festival, celebrate the coastal community’s 
                connection to the sea. This festival, dedicated to the Whale God (Ca Ong), 
                showcases the reverence local fishermen have for the ocean, which plays a central 
                role in their lives. The festival includes processions, prayers, and performances that 
                highlight the blend of spirituality and local customs in Danang’s culture.`}
            </p>

            <div className="flex flex-col items-center">    
                <img src={danangImgUrl4} className="w-[1000px]">
                </img>
                <p className="italic">Cau Ngu Festival</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Arts and Modern Culture</h1>
            <p className="indent-14 text-xl font-monospace">
                In recent years, Danang has seen a surge in its art and cultural scene, fueled by both 
                local and international influences. The Danang Fine Arts Museum showcases contemporary and 
                traditional Vietnamese art, serving as a hub for local artists and creatives. 
                Public art installations along the beachfront and in the city’s parks reflect a growing 
                appreciation for visual arts, making art more accessible to the public.
            </p>

            <div className="flex flex-col items-center">    
                <img src={danangImgUrl5} className="w-[1000px]">
                </img>
                <p className="italic">Hat Boi in Da Nang</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
                {`Music and dance are also vital components of Danang’s culture. 
                Traditional performances like hat boi (classical Vietnamese opera) and folk dances 
                are often featured during festivals and cultural events. At the same time, Danang’s 
                nightlife is becoming increasingly cosmopolitan, with bars, clubs, and music venues 
                offering a mix of live traditional Vietnamese music and contemporary genres.`}
            </p>
            
            <div className="flex flex-col items-center">    
                <img src={danangImgUrl6} className="w-[700px]">
                </img>
                <p className="italic">Rooftop Bar in Da Nang</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Danang’s rapid modernization has also led to a rise in tech and design-driven cultural 
                expressions. The city is fast becoming a center for digital innovation, attracting young
                professionals and artists who are contributing to a new wave of creativity in the city.
                This fusion of tradition and modernity is visible in the architecture, with sleek, 
                contemporary buildings like the Dragon Bridge standing alongside historical sites, 
                representing the balance Danang strikes between its past and future.
            </p>
            {/* <div className="flex flex-col items-center">    
                <img src={hanoiImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">A Corner of Hanoi Old Town</p>
            </div> */}
            
            

        </div>
    )
}

export default DanangCulture;