import styled from 'styled-components';

export const StyledPromotionContainer = styled.div`
  position: absolute;
  left: -170px;
  @media (max-width: 768px) {
    left: auto;
    right: -60px;
    top: -100px;
    transform: scale(0.8);
  } 
  p{
    position: absolute;
    left: 25%;
    top: 37%;
    z-index: 1;
    
    
    span{
      display: block;
      text-align: center;
      font-family: 'M PLUS Rounded 1c', sans-serif;
      font-style: normal;
      color: #FFFFFF;
      &:first-child{
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 5px;
      }
      &:last-child{
        font-weight: 700;
        font-size: 27px;
        line-height: 30px;
      }
    }
  }
`