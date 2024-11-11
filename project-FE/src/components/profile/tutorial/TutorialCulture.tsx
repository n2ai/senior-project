import tutorialImgUrl2 from "/images/tutorialLevelImages/tutorialImg2.jpg"
import tutorialImgUrl3 from "/images/tutorialLevelImages/tutorialImg3.jpg"

const TutorialCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">
                Discovering the Essence of Vietnam: A Journey Through Culture, People, and Cuisine            </h1>
            <p className="indent-14 text-xl font-monospace">
                Vietnam is a land of breathtaking landscapes, rich history, and vibrant culture. Nestled in Southeast Asia, this enchanting country stretches from the lush rice terraces in the north to the sun-kissed beaches in the south. As you embark on this virtual experience, you’ll explore the multifaceted essence of Vietnam through its culture, people, and cuisine. Each element weaves a unique narrative that contributes to the country’s charm and appeal.
            </p>

            <div className="flex flex-col items-center">
                <img src={tutorialImgUrl2} className="w-[1000px]">
                </img>
                <p className="italic">Rice Cultivation in vietnam</p>
            </div>
            
            <h1 className="font-bold text-3xl text-center">
                Culture: A Rich Tapestry of Tradition and Modernity    
            </h1>
            <p className="indent-14 text-xl font-monospace">
            Vietnamese culture is a captivating blend of ancient traditions and modern influences, shaped by centuries of history and diverse cultural exchanges. Rooted in Confucian values, family, respect for elders, and community ties play a central role in Vietnamese life. Traditional festivals, such as Tet (Lunar New Year) and Mid-Autumn Festival, reflect the deep respect for ancestral customs and the importance of family reunions.
            </p>

            <div className="flex flex-col items-center">
                <img src={tutorialImgUrl3} className="w-[1000px]">
                </img>
                <p className="italic">Food for Tet Holiday</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
            The country boasts a wealth of artistic expressions, from traditional music and dance to intricate handicrafts. Each region has its own cultural heritage, evident in local festivals, folk tales, and unique art forms. For example, water puppetry, a traditional Vietnamese art, showcases the ingenuity of local artisans while telling stories of rural life. Through this virtual experience, you will uncover the diverse cultural practices that make Vietnam a unique and dynamic society.
            </p>
            
        </div>
    )
}

export default TutorialCulture;