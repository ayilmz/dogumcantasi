import styled from 'styled-components';
import {Swiper} from "swiper/react";

export const StyledSwiperContainer = styled(Swiper)`
  height: 210px;
  .swiper-pagination{
    bottom: -5px;
    .swiper-pagination-bullet-active-next-next, 
    .swiper-pagination-bullet-active-next,
    .swiper-pagination-bullet-active-prev-prev,
    .swiper-pagination-bullet-active-prev{
      transform: scale(1);
      background-color: #062676;
      opacity: 1;
    }

    .swiper-pagination-bullet-active.swiper-pagination-bullet-active-main{
      background-color: #FEA38E;
    }
  }
`