import React from 'react';
import Image from "next/image";
import {StyledContainer, StyledBlueBackground} from "./style";

const ImageBorder = ({isMobile}) => {

    const mobile = {
        path: "/image/thumbnail-border-mobile.svg",
        width: 154,
        height: 174
    };

    const desktop = {
        path: "/image/thumbnail-border.png",
        width: 208,
        height: 143
    };

    let device = {};

    if(isMobile){
        device = mobile
    } else{
        device = desktop
    }
    return <Image className="border-image" src={device.path} width={device.width} height={device.height} alt="Doğum Çantası" border="1" />
}


const Thumbnails = ({isMobile, thumbnail}) => {
    return (
        <StyledContainer>
            <ImageBorder isMobile={isMobile} />
            <StyledBlueBackground>
                <p>{thumbnail.text}</p>
                {isMobile ? (
                    <Image src={`/image/thumbnail/${isMobile ? "mobile": "desktop"}/${thumbnail.image}`} width={174} height={174} alt={thumbnail.text} />
                ):(
                    <Image src={`/image/thumbnail/${isMobile ? "mobile": "desktop"}/${thumbnail.image}`} width={208} height={143} alt={thumbnail.text} />
                )}
            </StyledBlueBackground>
        </StyledContainer>
    );
};

export default Thumbnails;