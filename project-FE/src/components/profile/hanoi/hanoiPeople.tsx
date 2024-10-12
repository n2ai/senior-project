import hanoiImgUrl7 from "../../../images/hanoiLevelImages/hanoiPeople1.jpg";
import hanoiImgUrl8 from "../../../images/hanoiLevelImages/hanoiPeople2.jpg";
import hanoiImgUrl9 from "../../../images/hanoiLevelImages/hanoiPeople3.jpg";
import hanoiImgUrl10 from "../../../images/hanoiLevelImages/hanoiPeople4.jpg"
import hanoiHUSTUrl from "../../../images/hanoiLevelImages/hanoiHUST.jpg"
import hanoiTranhDongHo from "../../../images/hanoiLevelImages/hanoiDongHoTranh.jpg"

const HanoiPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The People of Hanoi</h1>
            <p className="indent-14 text-xl font-monospace">
            Hanoi, the capital city of Vietnam, is a vibrant metropolis that is home to a diverse population. The people of Hanoi are known for their warmth, resilience, and rich cultural heritage, which plays a significant role in shaping the city's identity. As the city has evolved over the years, so too have its inhabitants, who embody a unique blend of traditional values and modern aspirations.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl7} className="w-[1000px]">
                </img>
                <p className="italic">Ladies with Cherry Blossoms</p>
            </div>
            
            <h1 className="font-bold text-3xl text-center">Demographics and Diversity</h1>
            <p className="indent-14 text-xl font-monospace">
                Hanoi is one of the largest cities in Vietnam, with a population of over 8 million people. The city is a melting pot of various ethnic groups, with the majority being Kinh (Vietnamese), but also home to numerous ethnic minorities. Each group contributes its own customs, languages, and traditions to the rich cultural fabric of the city.            
            </p>

            <p className="indent-14 text-xl font-monospace">
                The urban population is predominantly young, with a significant proportion of residents being students and young professionals. This youthful demographic contributes to the dynamic atmosphere of Hanoi, fueling innovation and creativity while maintaining a strong connection to their cultural roots.            
            </p>
            
            <h1 className="font-bold text-3xl text-center">Daily Life and Traditions</h1>
            <p className="indent-14 text-xl font-monospace">
                Daily life in Hanoi is characterized by a mix of modern conveniences and traditional practices. The bustling streets are filled with vendors selling street food, artisans crafting handmade goods, and people engaging in various activities. Morning routines often include tai chi in public parks, where locals gather to practice and socialize.   
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl8} className="w-[1000px]">
                </img>
                <p className="italic">A Family in Hanoi</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Family plays a central role in the lives of Hanoians. Traditional values emphasize respect for elders and the importance of familial bonds. Many families gather for meals, and significant occasions, such as Tet (Lunar New Year), are celebrated with large family gatherings, reflecting the deep-rooted sense of community and heritage.
            </p>
            
            <h1 className="font-bold text-3xl text-center">Hospitality and Friendliness</h1>
            <p className="indent-14 text-xl font-monospace">
                The people of Hanoi are renowned for their hospitality and friendliness. Visitors often note the warm smiles and welcoming nature of the locals, who are eager to share their culture and traditions. This openness fosters a sense of connection between Hanoians and those who come to explore the city.
            </p>

            <p className="indent-14 text-xl font-monospace">
                Hanoians take pride in their cultural identity and are often willing to share stories about their city’s history, cuisine, and customs. This genuine interest in connecting with others creates a vibrant social atmosphere, where both locals and visitors can engage in meaningful interactions.
            </p>

            <h1 className="font-bold text-3xl text-center">Education and Innovation</h1>
            <p className="indent-14 text-xl font-monospace">
                Hanoi is also a center of education and innovation in Vietnam. The city is home to several universities and institutions that attract students from across the country and abroad. This emphasis on education fosters a culture of curiosity and knowledge-sharing among its residents.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiHUSTUrl} className="w-[1000px]">
                </img>
                <p className="italic">Ha Noi University of Science and Technology</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Young people in Hanoi are increasingly embracing modernity while maintaining a strong connection to their cultural heritage. The rise of technology and entrepreneurship has given birth to a dynamic startup scene, with young innovators seeking to make their mark on both the local and global stage.
            </p>

            <h1 className="font-bold text-3xl text-center">Art and Cultural Expression</h1>
            <p className="indent-14 text-xl font-monospace">
                The people of Hanoi express their cultural identity through various art forms, including traditional music, dance, and theater. The city hosts numerous cultural events and festivals that showcase local talents and celebrate Vietnamese heritage. Traditional music genres like quan ho (folk singing) and ca tru (ceremonial singing) remain integral to the cultural landscape, while contemporary art and performances continue to gain traction.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiTranhDongHo} className="w-[400px]">
                </img>
                <p className="italic">Dong Ho Painting</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
            Street art has also emerged as a form of expression among the youth, adding a modern twist to the city’s cultural scene. Murals and installations can be found throughout Hanoi, reflecting social issues, personal stories, and the evolving identity of the city.
            </p>
        </div>
    )
}

export default HanoiPeople;