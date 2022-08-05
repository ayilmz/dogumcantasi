import React from 'react';
import {SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";

import Thumbnails from "../Thumbnails";
import {thumbnails} from "./thumbnails";

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
                {thumbnails.map((thumbnail) => (
                    <SwiperSlide>
                        <Thumbnails isMobile thumbnail={thumbnail} />
                    </SwiperSlide>

                ))}
            </StyledSwiperContainer>
        ):(
            <>
                {thumbnails.map((thumbnail, index) => (
                    <Thumbnails thumbnail={thumbnail}  key={index}/>
                ))}
            </>
        )
    );
}

export default ThumbnailContainer;


