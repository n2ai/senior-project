import peopleImg1 from "/images/phuquocLevelImages/phuquocPeople1.jpg";
import peopleImg2 from "/images/phuquocLevelImages/phuquocPeople2.jpg";
import peopleImg3 from "/images/phuquocLevelImages/phuquocPeople3.jpg";
import peopleImg4 from "/images/phuquocLevelImages/phuquocPeople4.jpg";


const PhuquocPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The People of Phu Quoc: Guardians of Island Heritage and Hospitality</h1>
            <p className="indent-14 text-xl font-monospace">
                Phu Quoc, Vietnam’s largest island, is not only renowned for its 
                stunning landscapes and pristine beaches but also for the warmth, 
                resilience, and rich cultural heritage of its people. Known as the "Pearl 
                Island" of Vietnam, Phu Quoc is home to communities that have preserved 
                traditional livelihoods while adapting to the demands of a rapidly 
                modernizing world. The islanders are shaped by generations of fishing, 
                farming, and trading, with a deep connection to the land and sea that is 
                reflected in their way of life, values, and sense of community.
            </p>
            <div className="flex flex-col items-center">
                <img src={peopleImg1} className="w-[1000px]">
                </img>
                <p className="italic">People of Phu Quoc</p>
            </div>

            <h1 className="font-bold text-3xl text-center">A Life Built Around the Sea</h1>
            <p className="indent-14 text-xl font-monospace">
                For centuries, life on Phu Quoc has revolved around the sea, and the 
                people here have developed a unique relationship with the waters that 
                surround them. Many islanders come from long lines of fishermen, and this 
                heritage is visible in the reverence they hold for the sea. They rely on 
                it not only for sustenance but also for cultural practices that honor 
                their maritime traditions. The Nghinh Ong Festival, where locals honor 
                the whale god for protection and safe voyages, is a prime example of 
                their deep-rooted respect for the sea.
            </p>

            <div className="flex flex-col items-center">
                <img src={peopleImg3} className="w-[700px]">
                </img>
                <p className="italic">Beach in Phu Quoc</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The island’s fishing villages, such as Ham Ninh and Ganh Dau, are 
                tight-knit communities where residents look out for each other. Here, 
                the spirit of mutual assistance is strong, with fishermen sharing their 
                catch with neighbors, especially during times of hardship. This deep 
                sense of solidarity and neighborly support has been essential to the 
                survival and success of the Phu Quoc people, who have historically faced 
                challenging environmental and economic conditions.
            </p>

            <h1 className="font-bold text-3xl text-center">Spiritual and Family-Oriented Values</h1>
            <p className="indent-14 text-xl font-monospace">
                Religion and spirituality are deeply woven into the lives of Phu Quoc’s 
                residents, with Buddhism being the predominant faith. Temples and shrines 
                are scattered across the island, where people gather not only to worship 
                but also to find peace and community. Dinh Cau Temple, perched on a rocky 
                promontory overlooking the sea, is particularly significant, as it serves 
                as a place of worship for fishermen seeking blessings for safe journeys. 
                Such spiritual practices reflect the people’s reliance on faith as a 
                source of comfort and guidance.
            </p>


            <p className="indent-14 text-xl font-monospace">
                Family remains at the heart of Phu Quoc’s social structure. Households 
                often include extended family members, and traditions of ancestor 
                worship reflect the community’s respect for lineage and family history. 
                It is common for young people to return to the island after periods of 
                working or studying elsewhere to support their families and contribute to 
                local life. This commitment to family underscores the strong sense of 
                belonging and responsibility that shapes the identity of the people on 
                Phu Quoc.
            </p>

            <h1 className="font-bold text-3xl text-center">Embracing Tourism with Warmth and Hospitality</h1>
            <p className="indent-14 text-xl font-monospace">
                In recent years, Phu Quoc has experienced a tourism boom, and the people 
                of Phu Quoc have embraced this influx of visitors with genuine warmth 
                and hospitality. While tourism has brought modern infrastructure and new 
                opportunities, locals are mindful of balancing development with the 
                preservation of their cultural values. Many residents have adapted by 
                establishing small businesses, such as homestays, restaurants, and 
                guided tours, sharing their knowledge of local history, cuisine, and 
                customs with visitors. This approach allows tourists to experience Phu 
                Quoc’s authentic culture while providing economic benefits to the 
                community.
            </p>

            <div className="flex flex-col items-center">
                <img src={peopleImg2} className="w-[600px]">
                </img>
                <p className="italic">Phu Quoc's Night Market</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                Hospitality is deeply embedded in the islanders’ way of life. They 
                treat visitors as part of the extended family, sharing stories and 
                insights into Phu Quoc’s culture and traditions. This welcoming attitude 
                not only enriches the experiences of tourists but also strengthens the 
                cultural identity of the island, allowing Phu Quoc’s unique heritage to 
                be celebrated and respected by people from around the world.
            </p>

            <div className="flex flex-col items-center">
                <img src={peopleImg4} className="w-[600px]">
                </img>
                <p className="italic">Diving Tour in Phu Quoc</p>
            </div>
                
        </div>
    )
}

export default PhuquocPeople;