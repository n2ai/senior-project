import tutorialImgUrl4 from "../../../images/tutorialLevelImages/tutorialImg4.jpg"

const TutorialCuisine = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">
                Cuisine: A Flavorful Journey Through the Senses
            </h1>
            <p className="indent-14 text-xl font-monospace">
                Vietnamese cuisine is renowned worldwide for its bold flavors, fresh ingredients, and emphasis on balance and harmony. Each region offers its own culinary specialties, reflecting the geography, climate, and culture of the area. From the aromatic Pho in the north to the spicy and flavorful dishes in the south, the variety of flavors available is astounding.
            </p>

            <div className="flex flex-col items-center">
                <img src={tutorialImgUrl4} className="w-[1000px]">
                </img>
                <p className="italic">Banh Cuon - a Traditional Dish of Vietnam</p>
            </div>
            
            <p className="indent-14 text-xl font-monospace">
            The Vietnamese dining experience often centers around shared meals, fostering community and connection. Street food is an integral part of the culinary landscape, with bustling markets and food stalls offering a wide array of dishes. Signature dishes like Bun Cha, a grilled pork dish served with rice noodles, and Banh Mi, a delicious Vietnamese sandwich, showcase the fusion of flavors and ingredients that define Vietnamese cuisine.
            </p>
        </div>
    )
}

export default TutorialCuisine;