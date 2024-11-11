import hcmImgUrl1 from "/images/hochiminhLevelImages/arielhcmnight.jpg";
import hcmImgUrl2 from "/images/hochiminhLevelImages/hcmpostoffice.jpg";
import hcmImgUrl3 from "/images/hochiminhLevelImages/giaiphongmiennam.jpg";
import hcmImgUrl4 from "/images/hochiminhLevelImages/nhahanghoahcm.jpg"
import hcmImgUrl5 from "/images/hochiminhLevelImages/hcmcityhall.jpg"

const HochiminhCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The Culture of Saigon: A Unique Blend of Tradition and Modernity</h1>
            <p className="indent-14 text-xl font-monospace">
                Ho Chi Minh City, still affectionately referred to by many 
                as Saigon, stands as the economic and cultural heart of southern Vietnam. 
                This vibrant metropolis, with its rich history and dynamic spirit, 
                embodies a unique blend of tradition and modernity. The culture of 
                Saigon is shaped by its storied past, colonial influences, and rapid 
                modernization, making it a city where ancient customs harmonize with the 
                fast pace of urban life. From its cuisine and festivals to its 
                architecture and daily lifestyle, Saigon is a living, breathing 
                testament to Vietnam’s cultural resilience and adaptability.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Ariel View of Ho Chi Minh City at Night</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Historical Influences on Saigon's Culture</h1>
            <p className="indent-14 text-xl font-monospace">
                Saigon's culture is deeply influenced by its history, particularly 
                its role as a trading hub and its colonial past. For centuries, 
                Saigon has been a melting pot of cultures, shaped by its interactions 
                with Chinese, Khmer, and French traders and colonizers. The city was a 
                critical port in the Mekong Delta, attracting merchants and settlers 
                from various parts of Asia and Europe.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl2} className="w-[1000px]">
                </img>
                <p className="italic">Ho Chi Minh City Post Office</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The French colonial period (1862–1954) left an indelible 
                mark on Saigon's architecture, cuisine, and cultural 
                sensibilities. Iconic landmarks such as the Notre-Dame 
                Cathedral, Saigon Central Post Office, and the French-style 
                villas that line the city streets serve as reminders of this
                era. However, Saigon also retains its traditional Vietnamese 
                roots, evident in its temples, pagodas, and customs. The blend 
                of French sophistication with Vietnamese tradition is what makes the 
                cultural identity of Saigon so distinct.
            </p>

            <h1 className="font-bold text-3xl text-center">Festivals and Traditions</h1>
            <p className="indent-14 text-xl font-monospace">
                Saigon’s culture is deeply tied to its local festivals, 
                which reflect both its rich history and its dynamic, 
                multicultural identity. Saigon Liberation Day on April 30th
                is a significant celebration, marking the end of the 
                Vietnam War and the city’s reunification with the country. 
                This patriotic day is commemorated with parades, fireworks, 
                and public gatherings, symbolizing the resilience of 
                Saigon’s people. Another standout event is the Nguyen Hue 
                Flower Street Festival, held during Lunar New Year, where 
                the city transforms into a vibrant display of floral art 
                along Nguyen Hue Boulevard, blending traditional values 
                with modern creativity.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl3} className="w-[800px]">
                </img>
                <p className="italic">30-4-1975</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The city’s multicultural spirit is also showcased through 
                festivals like the Saigon Lantern Festival, tied to the 
                Mid-Autumn Festival, and the Bà Thiên Hậu Pagoda Festival, 
                which celebrates the Chinese-Vietnamese community’s heritage
                . The Lantern Festival lights up Saigon’s streets with 
                vibrant parades, while the Thiên Hậu Pagoda Festival in 
                Cholon honors the goddess of the sea through traditional 
                rituals and processions. These events, along with the Tết 
                Đoan Ngọ cleansing festival, illustrate the city's unique 
                fusion of Vietnamese traditions with Chinese and global 
                influences, making Saigon a cultural hub of Vietnam.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl4} className="w-[1000px]">
                </img>
                <p className="italic">Inside a Chinese Restaurant</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Despite the modern skyscrapers and busy commercial centers, 
                Saigon remains a place where tradition is respected. In 
                homes and businesses, small altars dedicated to ancestors 
                or deities are common, and offerings of fruit, incense, and 
                food are made regularly. This respect for tradition is at 
                the core of Saigon’s cultural identity.
            </p>

            
            
            <h1 className="font-bold text-3xl text-center">Architecture: A Blend of Old and New</h1>
            <p className="indent-14 text-xl font-monospace">
                The architecture of Saigon is a visual representation of 
                its cultural fusion. Walking through the city, one can see 
                the juxtaposition of old and new in striking contrast. The 
                historic landmarks such as the Reunification Palace, which 
                witnessed the end of the Vietnam War, stand alongside sleek 
                modern skyscrapers like the Bitexco Financial Tower, 
                symbolizing the city’s rapid development.
            </p>

            <div className="flex flex-col items-center">
                <img src={hcmImgUrl5} className="w-[1000px]">
                </img>
                <p className="italic">Ho Chi Minh City Hall</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
                French colonial architecture remains a prominent feature of
                Saigon, especially in District 1. These structures not only
                add a European aesthetic to the city but also serve as 
                historical markers of Saigon's colonial past. Meanwhile, 
                traditional Vietnamese buildings such as Chùa Bà Thiên Hậu 
                (Thien Hau Pagoda) in Chinatown (Chợ Lớn) offer a glimpse 
                into the spiritual and architectural heritage of the city’s 
                Chinese-Vietnamese community.
            </p>
        </div>
    )
}

export default HochiminhCulture;