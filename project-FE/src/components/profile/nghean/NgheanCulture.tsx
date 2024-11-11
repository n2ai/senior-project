import culture1 from "/images/ngheanLevelImages/ngheanCulture1.jpg";
import culture2 from "/images/ngheanLevelImages/ngheanCulture2.jpg";
import culture3 from "/images/ngheanLevelImages/ngheanCulture3.jpg";


const NgheanCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Nghe An</h1>
            <p className="indent-14 text-xl font-monospace">
                Nghe An, a province located in north-central Vietnam, is a 
                land rich in cultural heritage, history, and tradition. 
                Known as the birthplace of President Ho Chi Minh, Nghe An 
                holds a special place in Vietnamese hearts. This region 
                boasts unique cultural practices, festivals, and a profound 
                connection to Vietnam’s rural roots. The culture of Nghe An 
                is distinguished by its resilient spirit, artistic 
                expressions, and deep sense of community.
            </p>

            <div className="flex flex-col items-center">
                <img src={culture1} className="w-[700px]">
                </img>
                <p className="italic">An Ancient Watch Tower in Nghe An</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Historical Significance and Regional Identity</h1>
            <p className="indent-14 text-xl font-monospace">
                Nghe An is steeped in historical importance as the land where 
                many Vietnamese revolutionary movements took root. This 
                history shapes the identity of the people of Nghe An, 
                fostering a strong sense of resilience, patriotism, and 
                dedication to the country. The Nghe An community is known 
                for its determination and commitment, with historical 
                accounts showing how locals supported the national cause 
                through various revolutionary movements. This spirit is seen 
                in the province’s annual festivals and historical 
                reenactments that honor Vietnamese resilience.
            </p>

            <h1 className="font-bold text-3xl text-center">Traditional Festivals and Celebrations</h1>
            <p className="indent-14 text-xl font-monospace">
                Festivals are central to Nghe An’s culture, acting as 
                communal events that bring people together. One of the most 
                famous festivals is the Kim Lien Festival, held in memory of 
                President Ho Chi Minh. Each year, locals and visitors gather 
                to celebrate his life and accomplishments, honoring him 
                through song, dance, and traditional performances.
            </p>

            <div className="flex flex-col items-center">
                <img src={culture2} className="w-[700px]">
                </img>
                <p className="italic">Dai Tue Temple in Nghe An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The Con Temple Festival is another key cultural event. It 
                takes place in early spring and is dedicated to Princess 
                Lieu Hanh, a revered figure in Vietnamese mythology. This 
                festival involves elaborate ceremonies, traditional 
                performances, and processions that celebrate the heritage of 
                the region. These festivals not only pay homage to historical 
                and mythical figures but also serve as bonding events for the 
                people of Nghe An.
            </p>

            <h1 className="font-bold text-3xl text-center">Artistic Expressions: Music, Dance, and Crafts</h1>
            <p className="indent-14 text-xl font-monospace">
                Nghe An’s cultural expressions are beautifully captured 
                through folk music and dance. "Vi" and "Giam" singing, 
                recognized as an Intangible Cultural Heritage by UNESCO, 
                is an indigenous art form unique to this region. These songs 
                are usually performed during communal gatherings and reflect 
                the thoughts, hopes, and dreams of the people. They cover 
                a range of topics, from love and family to the natural 
                beauty of Nghe An, creating a rich oral tradition that has 
                been passed down through generations.
            </p>

            <div className="flex flex-col items-center">
                <img src={culture3} className="w-[700px]">
                </img>
                <p className="italic">A Corner of Nghe An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Craftsmanship also plays a significant role in Nghe An’s 
                culture, with traditional handicrafts such as bamboo 
                weaving, pottery, and wood carving continuing to thrive. 
                Local artisans create intricate designs that are often sold 
                at regional markets or during festivals, showcasing the 
                creativity and skill passed down over centuries.
            </p>

            

        </div>
    )
}

export default NgheanCulture;