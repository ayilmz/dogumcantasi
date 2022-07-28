import React, {Component} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Thumbnails from "../Thumbnails";

const ThumbnailContainer = ({isMobile}) => {
    return (
        isMobile ? (
            <Swiper
                slidesPerView={2.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Thumbnails selected /></SwiperSlide>
                <SwiperSlide><Thumbnails /></SwiperSlide>
                <SwiperSlide><Thumbnails /></SwiperSlide>
                <SwiperSlide><Thumbnails /></SwiperSlide>
            </Swiper>
        ):(
            <>
                <Thumbnails selected />
                <Thumbnails/>
                <Thumbnails/>
                <Thumbnails/>
                <Thumbnails/>
                <Thumbnails/>
            </>
        )
    );
}

export default ThumbnailContainer;


