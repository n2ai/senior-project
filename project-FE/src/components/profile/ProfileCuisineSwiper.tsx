import { Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useState } from 'react';

type swiperContent = {
    imgUrl:string,
    title:string,
    subtitle:string,

}

interface IProfileCuisineSwiper{
    swiperContents: swiperContent[]
}


//Anh Nhung Mon An o Hanoi va cach che bien no

const ProfileCuisineSwiper:React.FC<IProfileCuisineSwiper> = ({swiperContents})=>{
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const swiperArray = swiperContents.map(item=>{
        return (
            <SwiperSlide>
                <img src={item.imgUrl} alt={`${item.title} picture`}></img>
            </SwiperSlide>
        )
    })

    return(
        <div className='w-full h-full'>
            
            <Swiper
                effect='cards'
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-[240px] h-[320px]"
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>
                
                <SwiperSlide className='bg-red-400'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-blue-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-green-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-purple-400'>Slide 4</SwiperSlide>
                <SwiperSlide className='bg-red-400'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-blue-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-green-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-purple-400'>Slide 4</SwiperSlide>
            </Swiper>
            <div className='text-center mt-4'>
                <p>Current Slide: {currentSlide + 1}</p>
            </div>
        </div>
    )
}

export default ProfileCuisineSwiper;