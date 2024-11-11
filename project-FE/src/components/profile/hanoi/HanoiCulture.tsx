import hanoiImgUrl1 from "/images/hanoiLevelImages/hanoiStreets.jpg";
import hanoiImgUrl2 from "/images/hanoiLevelImages/hanoiFrench.jpg";
import hanoiImgUrl3 from "/images/hanoiLevelImages/hanoiBuncha.jpg";
import hanoiImgUrl4 from "/images/hanoiLevelImages/hanoiBeer.jpg";
import hanoiImgUrl5 from "/images/hanoiLevelImages/hanoiTet.jpg";
import hanoiImgUrl6 from "/images/hanoiLevelImages/hanoiNightLife.jpg"

const HanoiCulture = ()=>{

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The Culture of Hanoi City</h1>
            <p className="indent-14 text-xl font-monospace">
                Hanoi, the capital of Vietnam, is a vibrant tapestry of history, tradition, 
                and modernity, where the echoes of its past intertwine seamlessly with the pulse of contemporary life. 
                This city, founded in 1010, is steeped in rich cultural heritage, reflected in its architecture, 
                cuisine, festivals, and daily life. The culture of Hanoi is a testament to its long history, 
                blending influences from various dynasties, colonial powers, and the resilience of its people.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">A Corner of Hanoi Old Town</p>
            </div>
            
            <h1 className="font-bold text-3xl text-center">
                Historical Influences    
            </h1>
            <p className="indent-14 text-xl font-monospace">
            Hanoi's culture has been shaped by its tumultuous history, which includes periods of Chinese domination, French colonization, and the Vietnam War. The influence of Chinese culture is evident in the city's Confucian values, traditional medicine, and the practice of ancestor worship, which is prevalent in many Vietnamese households. Temples, pagodas, and historical sites such as the Temple of 
            Literature and Hoan Kiem Lake serve as reminders of Hanoi's rich past and cultural significance.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl2} className="w-[1000px]">
                </img>
                <p className="italic">Hanoi French Buildings</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The French colonial period introduced Western architectural styles and urban planning, evident in the wide boulevards, grand buildings, and charming cafes that dot the city. The blend of Vietnamese and French influences has created a unique urban landscape that is both distinctive and alluring. Notably, the Old Quarter, with its narrow streets and bustling markets, showcases traditional craftsmanship and the vibrant street life that defines Hanoi.
            </p>

            
            <h1 className="font-bold text-3xl text-center">
                Culinary Heritage    
            </h1>
            <p className="indent-14 text-xl font-monospace">
                Hanoi is renowned for its diverse and flavorful cuisine, which reflects the city's cultural mosaic. Street food is an integral part of daily life, with vendors offering dishes such as pho (noodle soup), bun cha (grilled pork with noodles), and banh mi (Vietnamese sandwich). The flavors are often bold, with the use of fresh herbs, spices, and locally sourced ingredients, making Hanoi a haven for food lovers.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl3} className="w-[1000px]">
                </img>
                <p className="italic">Hanoi Grilled Pork Vermicelli</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The city's culinary scene is deeply rooted in tradition, with many families passing down recipes through generations. Cooking is often seen as a communal activity, where family members gather to prepare meals together. Additionally, the appreciation for food extends beyond mere sustenance; it is an expression of love, hospitality, and cultural identity.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl4} className="w-[1000px]">
                </img>
                <p className="italic">Hanoi Beer and Banh Mi</p>
            </div>
            
            <h1 className="font-bold text-3xl text-center">
                Festivals and Traditions   
            </h1>
            <p className="indent-14 text-xl font-monospace">
                Hanoi's cultural calendar is punctuated by numerous festivals that celebrate both traditional and modern aspects of Vietnamese culture. The Tet Nguyen Dan (Lunar New Year) is the most significant celebration, marked by family reunions, special foods, and rituals to honor ancestors. During this time, the city comes alive with colorful decorations, lion dances, and fireworks, reflecting the joy and hope for the new year.
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl5} className="w-[1000px]">
                </img>
                <p className="italic">Tet Holiday in Hanoi</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Other notable festivals include the Mid-Autumn Festival, which features lantern parades and mooncakes, and the Hung Kings' Festival, honoring the legendary founders of Vietnam. These events are characterized by vibrant performances, traditional music, and community participation, reinforcing the importance of cultural heritage in Hanoian society.
            </p>

            <h1 className="font-bold text-3xl text-center">
                Contemporary Life and Cultural Expression            
            </h1>
            <p className="indent-14 text-xl font-monospace">
                As a city that embraces change while honoring its past, contemporary Hanoi is a hub of artistic expression and innovation. The burgeoning art scene, with galleries showcasing the work of both established and emerging artists, reflects the city's dynamic cultural landscape. The rise of contemporary music, theater, and dance further demonstrates the evolution of Hanoi's cultural identity.            
            </p>

            <div className="flex flex-col items-center">
                <img src={hanoiImgUrl6} className="w-[1000px]">
                </img>
                <p className="italic">Hanoi 1900 Club</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The youth of Hanoi play a vital role in shaping its culture, blending traditional elements with modern influences. Cafes, boutiques, and co-working spaces have become popular gathering spots, fostering creativity and collaboration among the city's inhabitants. Social media also plays a significant role in connecting the younger generation with their cultural roots while simultaneously embracing global trends.
            </p>

        </div>
    )
}

export default HanoiCulture;