import cultureImg1 from "/images/phuquocLevelImages/phuquocCulture1.jpeg";
import cultureImg2 from "/images/phuquocLevelImages/phuquocCulture2.jpg";
import cultureImg3 from "/images/phuquocLevelImages/phuquocCulture3.jpeg";
import nuocmam from "/images/phuquocLevelImages/nuocmamphuquoc.jpg";

const PhuquocCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Phu Quoc Culture: A Blend of Tradition and Innovation</h1>
            <p className="indent-14 text-xl font-monospace">
                Phu Quoc, known as the "Pearl Island" of Vietnam, has a rich cultural 
                heritage shaped by centuries of history, trade, and natural beauty. 
                While it is famous for its pristine beaches, verdant forests, and 
                renowned seafood, Phu Quoc’s cultural identity is equally fascinating, 
                characterized by a harmonious blend of traditional Vietnamese customs, 
                Cham and Khmer influences, and the island’s own unique traditions. Its 
                culture is deeply intertwined with its people’s way of life, rooted in 
                the island’s geography and its longstanding fishing and agricultural 
                heritage.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg1} className="w-[500px]">
                </img>
                <p className="italic">A View of Phu Quoc</p>
            </div>

            <h1 className="font-bold text-3xl text-center">A Cultural Crossroads</h1>
            <p className="indent-14 text-xl font-monospace">
                Historically, Phu Quoc has been a crossroads for various cultures, 
                owing to its strategic location in the Gulf of Thailand. The island has 
                witnessed the interaction of Vietnamese, Khmer, and Cham influences, 
                each leaving an indelible mark on its cultural fabric. The indigenous 
                fishing communities of Phu Quoc, predominantly Vietnamese today, have 
                been influenced by these different cultures, which is reflected in their 
                spiritual practices, festivals, and social customs.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg2} className="w-[500px]">
                </img>
                <p className="italic">Ariel View of Phu Quoc</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                One notable aspect of Phu Quoc’s culture is the islanders' deep respect 
                for the sea, which sustains their livelihood. This reverence is evident 
                in local festivals such as the Nghinh Ong Festival, a traditional 
                fishermen’s event where locals pay homage to the whale god for protection 
                and bountiful catches. This festival is not only a religious ritual but 
                also a celebration of the island’s strong sense of community, where the 
                fishing trade plays a central role in both the economy and the culture.
            </p>

            <h1 className="font-bold text-3xl text-center">Traditional Crafts and Economic Culture</h1>
            <p className="indent-14 text-xl font-monospace">
                Phu Quoc is famous for two iconic products: fish sauce (nước mắm) and 
                pepper. These two industries are integral to the island’s culture, shaping both its economy and identity. Phu Quoc fish sauce is renowned throughout Vietnam and internationally for its superior quality, made from freshly caught anchovies fermented in wooden barrels. The production of fish sauce is more than just an economic activity; it is a cultural tradition passed down through generations, with family-run factories being an important part of the local community.
            </p>

            <div className="flex flex-col items-center">
                <img src={nuocmam} className="w-[700px]">
                </img>
                <p className="italic">Phu Quoc Fish Sauce Factory</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Similarly, pepper farming has been a longstanding tradition in Phu Quoc. 
                The island’s black pepper is considered some of the best in the world, 
                thanks to the fertile soil and favorable climate. The meticulous care 
                with which the locals cultivate pepper reflects their connection to the 
                land and their respect for natural resources. Visiting the pepper farms 
                offers tourists a glimpse into the agricultural lifestyle that has shaped 
                the island’s culture.
            </p>

            <h1 className="font-bold text-3xl text-center">Religion and Spirituality</h1>
            <p className="indent-14 text-xl font-monospace">
                Religion plays a central role in the cultural life of Phu Quoc, with 
                Buddhism being the most widely practiced faith. Temples and pagodas dot 
                the island, offering serene spaces for spiritual reflection and community 
                gatherings. Dinh Cau Temple, perched on a rocky outcrop by the sea, is 
                one of the most revered sites on the island. Dedicated to Thien Hau, the 
                goddess of the sea, the temple symbolizes the islanders’ reliance on the 
                ocean and their spiritual efforts to seek safety and prosperity in their 
                maritime endeavors.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg3} className="w-[700px]">
                </img>
                <p className="italic">Ariel View of Phu Quoc</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                In addition to Buddhist practices, ancestor worship is deeply ingrained 
                in Phu Quoc’s culture. Many homes have altars dedicated to honoring past 
                generations, reflecting the importance of family ties and respect for one’s 
                roots. This emphasis on family is a cornerstone of Vietnamese culture, and 
                in Phu Quoc, it remains a vital part of the island’s social fabric.
            </p>

            <h1 className="font-bold text-3xl text-center">Modern Developments and Cultural Preservation</h1>
            <p className="indent-14 text-xl font-monospace">
                In recent years, Phu Quoc has experienced rapid modernization due to 
                its development as a tourist destination. Luxury resorts, international 
                visitors, and modern infrastructure have brought about significant 
                changes to the island. However, the people of Phu Quoc have made 
                concerted efforts to preserve their cultural heritage amidst this 
                modernization. Many traditional crafts, such as fish sauce production 
                and pepper farming, continue to thrive, not only as economic ventures but also as symbols of the island’s identity.
            </p>

            {/* <div className="flex flex-col items-center">
                <img src={hcmImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Ariel View of Ho Chi Minh City at Night</p>
            </div> */}

            
        </div>
    )
}
export default PhuquocCulture;