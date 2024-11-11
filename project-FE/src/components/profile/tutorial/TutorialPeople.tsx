import tutorialImgUrl1 from "/images/tutorialLevelImages/tutorialImg1.jpg"

const TutorialPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">
                People: A Resilient and Welcoming Community
            </h1>
            <p className="indent-14 text-xl font-monospace">
            The heart of Vietnam lies in its people, known for their warmth, resilience, and hospitality. With over 54 ethnic groups, the Vietnamese people exhibit a rich cultural diversity, each contributing to the country’s social fabric. From the bustling streets of Ho Chi Minh City to the serene villages of the Mekong Delta, you will encounter individuals who embody the spirit of Vietnam.
            Family is the cornerstone of Vietnamese society, 
            with deep-rooted traditions emphasizing respect and loyalty. 
            The younger generation is increasingly embracing modern values while holding onto their cultural heritage. This blend creates a vibrant atmosphere, where age-old customs coexist with contemporary influences. Through personal stories and interactions, you will gain insights into the daily lives, aspirations, and resilience of the Vietnamese people, enriching your understanding of their unique identity.

            </p>

            <div className="flex flex-col items-center">
                <img src={tutorialImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Bamboo Village in Hưng Yên</p>
            </div>
            
            
        </div>
    )
}

export default TutorialPeople;