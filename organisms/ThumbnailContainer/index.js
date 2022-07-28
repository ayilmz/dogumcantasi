import React from 'react';
import {SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";

import Thumbnails from "../Thumbnails";

import {StyledSwiperContainer} from "./style";

const ThumbnailContainer = ({isMobile}) => {
    return (
        isMobile ? (
            <StyledSwiperContainer
                pagination={true}
                modules={[Pagination]}
                slidesPerView={2.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Thumbnails selected isMobile /></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
                <SwiperSlide><Thumbnails isMobile/></SwiperSlide>
            </StyledSwiperContainer>
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


