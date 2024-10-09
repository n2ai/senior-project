import { Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useState } from 'react';

export type swiperContent = {
    imgUrl:string,
    title:string,
    subtitle:string,
}

interface IProfileCuisineSwiper{
    swiperContents: swiperContent[],
    setCurrentCard: React.Dispatch<React.SetStateAction<number>>
}


//Anh Nhung Mon An o Hanoi va cach che bien no

const ProfileCuisineSwiper:React.FC<IProfileCuisineSwiper> = ({swiperContents, setCurrentCard})=>{
    const swiperArray = swiperContents.map(item=>{
        return (
            <SwiperSlide className='rounded-lg'>
                <img className="w-full h-full object-cover" src={item.imgUrl} alt={`${item.title} picture`} />
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
                onSlideChange={(swiper) => setCurrentCard(swiper.activeIndex)}>
                
                {/* <SwiperSlide className='bg-red-400'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-blue-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-green-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-purple-400'>Slide 4</SwiperSlide>
                <SwiperSlide className='bg-red-400'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-blue-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-green-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-purple-400'>Slide 4</SwiperSlide> */}
                {swiperArray}
            </Swiper>
            
        </div>
    )
}

export default ProfileCuisineSwiper;