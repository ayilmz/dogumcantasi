import React from 'react';
import Image from "next/image";
import {StyledContainer, StyledBlueBackground} from "./style";

const Thumbnails = ({selected}) => {
    return (
        <StyledContainer>
            <Image className="border-image" src="/image/thumbnail-border.png" width={208} height={143} alt="Doğum Çantası" border="1" />
            <StyledBlueBackground selected={selected}>
            </StyledBlueBackground>
        </StyledContainer>
    );
};

export default Thumbnails;