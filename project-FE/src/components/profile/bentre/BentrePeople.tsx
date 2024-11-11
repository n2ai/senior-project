import people1 from "/images/bentreLevelImages/bentrePeople1.jpg";
import people2 from "/images/bentreLevelImages/bentrePeople2.jpg";

const BentrePeople = () =>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The River Life: Ben Tre’s Floating Markets and Waterways</h1>
            
            <p className="indent-14 text-xl font-monospace">
                The rivers of the Mekong Delta are central to Ben Tre’s 
                way of life, where locals live, shop, and work on the water. 
                Ben Tre’s floating markets are a fascinating aspect of this 
                culture, where vendors on boats sell fresh produce, local 
                crafts, and foods directly from their boats. This unique 
                river culture highlights the adaptability and resourcefulness 
                of Ben Tre’s people, who have embraced the river as a source 
                of livelihood, transportation, and community. The floating 
                markets of Ben Tre not only support the local economy but 
                also offer visitors a glimpse into the distinct river-based 
                culture that defines life in the Mekong Delta.
            </p>

            <div className="flex flex-col items-center">    
                <img src={people1} className="w-[1000px]">
                </img>
                <p className="italic">People of Ben Tre</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Hospitality and Community Spirit: The Warmth of Ben Tre’s People</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Ben Tre’s culture is marked by a strong sense of community 
                and hospitality, deeply rooted in the spirit of sharing and 
                neighborly care. Locals are known for their warmth and 
                kindness, often welcoming visitors with open arms and 
                homemade coconut treats. This hospitality is a core part of 
                Ben Tre’s identity, creating an atmosphere of generosity 
                that defines its culture. Visitors to Ben Tre are often 
                treated like family, invited to share meals, experience 
                local customs, and learn about the region’s traditions. 
                Through their warmth and openness, the people of Ben Tre 
                reflect the essence of their culture—friendly, resilient, 
                and deeply connected to their land and heritage.
            </p>

            <div className="flex flex-col items-center">    
                <img src={people2} className="w-[1000px]">
                </img>
                <p className="italic">People of Ben Tre</p>
            </div>
            
            

        </div>
    )
}

export default BentrePeople;