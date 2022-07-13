import React from 'react';
import Image from "next/image";
import {StyledPromotionContainer} from './style';


const PromotionInformation = () => {
    return (
        <StyledPromotionContainer>
            <p>
                <span>ilk 100 Kişiye</span>
                <span>Ücretsiz!</span>
            </p>
            <Image src="/image/red-star.svg" width={248} height={249} alt="Doğum Çantası" />
        </StyledPromotionContainer>
    );
};

export default PromotionInformation;