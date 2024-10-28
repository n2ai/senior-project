import culture1 from "../../../images/bentreLevelImages/bentreCulture1.jpg";
import culture2 from "../../../images/bentreLevelImages/bentreCulture2.jpg";
import culture3 from "../../../images/bentreLevelImages/bentreCulture3.jpg";
import culture4 from "../../../images/bentreLevelImages/bentreCulture4.jpg";

const BentreCulture = () => {
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The Heart of Ben Tre: Coconut Culture and Craftsmanship</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Ben Tre is famously known as the “Land of Coconuts” in 
                Vietnam, with coconut trees stretching across the landscape 
                and defining the province’s economy, art, and daily life. 
                Coconut farming is a vital part of Ben Tre’s livelihood, 
                with generations passing down techniques to harvest, 
                process, and utilize coconuts in countless ways. The coconut 
                industry here has become a thriving cultural symbol, 
                producing everything from household items like brooms, 
                baskets, and mats to intricate handicrafts and souvenirs 
                for visitors. By using every part of the coconut—husks, 
                shells, meat, and oil—Ben Tre has developed an eco-friendly 
                and sustainable craft culture that underscores its creativity 
                and resilience.
            </p>

            <div className="flex flex-col items-center">    
                <img src={culture1} className="w-[1000px]">
                </img>
                <p className="italic">A View of Ben Tre</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Culinary Heritage: Ben Tre’s Unique Coconut-Inspired Cuisine</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Ben Tre’s culinary landscape is rich with coconut-infused 
                delicacies that reflect the abundance of this resource in 
                the province. Locals use coconut in nearly every dish, from 
                savory meals to desserts, giving Ben Tre’s cuisine a 
                distinctively sweet, creamy profile that sets it apart from 
                other regions. Ga ham dua (chicken stewed in coconut juice), 
                bánh dừa nướng (coconut rice cakes), and coconut candies are 
                beloved dishes, highlighting the role of coconut in Ben 
                Tre’s food culture. The region’s markets and food stalls are 
                filled with coconut treats, offering visitors a taste of Ben 
                Tre’s unique flavors, and sharing the region’s deeply 
                ingrained culinary heritage.
            </p>

            <div className="flex flex-col items-center">    
                <img src={culture2} className="w-[1000px]">
                </img>
                <p className="italic">A View of Ben Tre</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Cultural Diversity: Harmony Between Ethnic Communities</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Ben Tre is home to a diverse blend of ethnic communities, 
                including the Vietnamese, Khmer, and Cham people, each adding 
                to the province’s vibrant cultural tapestry. This diversity is 
                celebrated through various festivals, ceremonies, and social 
                customs that bring people together and promote harmony among 
                communities. Each ethnic group contributes its own traditions, 
                music, dance, and language, enriching Ben Tre’s cultural 
                landscape and highlighting the region’s emphasis on unity 
                within diversity.
            </p>

            <div className="flex flex-col items-center">    
                <img src={culture3} className="w-[1000px]">
                </img>
                <p className="italic">A View of Ben Tre</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Traditional Music and Arts: The Spirit of Don Ca Tai Tu</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Ben Tre is known for its traditional Southern Vietnamese folk music, Don Ca Tai 
                Tu, a style deeply rooted in the soul of the Mekong Delta. This genre is 
                a blend of lyrical melodies and storytelling that speaks to the 
                hardships, resilience, and hope of the people in this region. Played with 
                traditional instruments like the đàn kìm (moon lute), đàn bầu 
                (monochord), and đàn tranh (zither), Don Ca Tai Tu is both a form of 
                relaxation and a communal activity enjoyed during festivals, family 
                gatherings, and celebrations. As a UNESCO-recognized intangible cultural 
                heritage, this music reflects Ben Tre’s sense of identity, pride, and 
                cultural expression.
            </p>
        </div>
    )
}

export default BentreCulture;