import styled from 'styled-components';

export const StyledPromotionContainer = styled.div`
  position: absolute;
  left: -170px;
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