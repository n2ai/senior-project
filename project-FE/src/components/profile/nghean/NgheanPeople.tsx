import people1 from "/images/ngheanLevelImages/ngheanPeople1.jpg";
import people2 from "/images/ngheanLevelImages/ngheanPeople2.jpg";
import hcm from "/images/ngheanLevelImages/hochiminhpic.jpg";


const NgheanPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Resilience and Perseverance</h1>
            <p className="indent-14 text-xl font-monospace">
                The people of Nghe An have historically been known for 
                their resilience, which is influenced by both the region’s 
                challenging natural environment and its storied history of 
                resistance. With its mountainous landscape and unpredictable 
                weather patterns, including typhoons and floods, Nghe An 
                demands hard work and adaptability. These geographic 
                challenges have forged a tenacious spirit within its people, 
                who are adept at overcoming hardships.
            </p>

            <div className="flex flex-col items-center">
                <img src={people1} className="w-[700px]">
                </img>
                <p className="italic">A Corner of Nghe An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Nghe An also has a long history of patriotic struggle and 
                resistance, particularly during the French and American 
                wars. This legacy of fighting for independence and national 
                pride has instilled a profound sense of resilience in Nghe 
                An’s people, making them known throughout Vietnam for their 
                courage and unwavering determination.
            </p>

            <h1 className="font-bold text-3xl text-center">Warmth and Hospitality</h1>
            <p className="indent-14 text-xl font-monospace">
                Despite the region’s difficulties, the people of Nghe An 
                are renowned for their warmth, kindness, and hospitality. 
                Guests visiting Nghe An are often welcomed with open arms, 
                as hospitality is a deeply valued tradition here. Locals 
                take great pride in sharing their culture and traditions 
                with outsiders, often inviting them to enjoy home-cooked 
                meals or participate in local festivities. This generosity 
                reflects the close-knit, communal nature of Nghe An society, 
                where people value connection and mutual support.
            </p>

            <div className="flex flex-col items-center">
                <img src={people2} className="w-[700px]">
                </img>
                <p className="italic">A Corner of Nghe An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                In rural villages especially, neighbors help each other 
                with farming tasks, share resources, and celebrate special 
                occasions together. The spirit of solidarity and neighborly 
                support strengthens bonds between families and communities, 
                creating a sense of unity and mutual respect among the 
                people.
            </p>

            <h1 className="font-bold text-3xl text-center">Dedication to Education and Self-Improvement</h1>
            <p className="indent-14 text-xl font-monospace">
                Education is highly valued among the people of Nghe An, 
                as it is seen as a pathway to personal and community 
                advancement. Despite economic challenges, many families 
                work hard to ensure that their children receive a good 
                education. This dedication to learning is part of the 
                legacy of Ho Chi Minh, who emphasized the importance of 
                knowledge and self-improvement.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcm} className="w-[500px]">
                </img>
                <p className="italic">Ho Chi Minh's Potrait</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Nghe An is known for producing many scholars and 
                professionals who go on to contribute significantly to 
                Vietnamese society. Young people are encouraged to pursue 
                higher education and bring their knowledge back to benefit 
                their communities. This dedication to education is a 
                testament to the people’s belief in the transformative 
                power of knowledge and the hope for a brighter future.
            </p>
        </div>
    )
}

export default NgheanPeople;