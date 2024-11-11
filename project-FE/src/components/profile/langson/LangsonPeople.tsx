import people1 from "/images/langsonLevelImages/langsonPeople1.jpg";
import people2 from "/images/langsonLevelImages/langsonPeople2.jpg";
import people3 from "/images/langsonLevelImages/langsonPeople3.jpg";

const LangsonPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The Heart of Lạng Sơn: Its People</h1>
            <p className="indent-14 text-xl font-monospace">
                Lạng Sơn, a province in Vietnam's mountainous northeast, is defined not only by its breathtaking 
                landscapes but also by the warmth, resilience, and cultural richness of its people. The province is home to 
                various ethnic groups, predominantly the Tay, Nung, Dao, and Kinh, each bringing unique traditions, dialects, 
                and ways of life that shape the identity of the region. Together, these communities create a cultural mosaic that 
                highlights the beauty of diversity and communal harmony.
            </p>

            <div className="flex flex-col items-center">
                <img src={people1} className="w-[700px]">
                </img>
                <p className="italic">People of Lang Son</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The people of Lạng Sơn are deeply connected to their ancestral lands, with generations who have cultivated 
                the province’s terraced fields and forests. Their daily lives are influenced by both the rugged terrain and 
                the seasonal cycles, leading to a lifestyle that values hard work, adaptability, and respect for nature. Farming, 
                for example, is a primary livelihood for many, and community members often work collectively, especially during 
                harvest season, when groups come together to plant, harvest, and share in the fruits of their labor.
            </p>

            <h1 className="font-bold text-3xl text-center">A Rich Tapestry of Cultural Practices</h1>

            <p className="indent-14 text-xl font-monospace">
                Lạng Sơn’s people take immense pride in preserving their distinct customs and traditions. This 
                is evident in the various festivals celebrated throughout the year, such as the Lồng Tồng festival of the 
                Tay and Nung communities, which brings people together to pray for a prosperous year ahead. These festivals are 
                vibrant events that feature traditional clothing, music, and dance, with every individual—from young children to 
                elders—participating in the celebrations. Elders in the community are especially revered, often leading rituals and 
                sharing ancestral wisdom with younger generations, keeping the culture alive and thriving.
            </p>

            <div className="flex flex-col items-center">
                <img src={people2} className="w-[500px]">
                </img>
                <p className="italic">People of Lang Son</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Hospitality and Warmth</h1>

            <p className="indent-14 text-xl font-monospace">
                Visitors to Lạng Sơn often comment on the exceptional hospitality of the local people. Guests are welcomed 
                with open arms, whether in bustling town markets or quiet, remote villages. It is customary for hosts to offer 
                guests traditional tea and a meal, symbolizing a deep-rooted spirit of generosity. The people of Lạng Sơn believe 
                that sharing food and drink fosters bonds, even between strangers, and offers a meaningful way to express gratitude 
                and respect.
            </p>

            <div className="flex flex-col items-center">
                <img src={people3} className="w-[700px]">
                </img>
                <p className="italic">People of Lang Son</p>
            </div>

            {/* <div className="flex flex-col items-center">
                <img src={hcmImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Ariel View of Ho Chi Minh City at Night</p>
            </div> */}

            
        </div>
    )
}

export default LangsonPeople;