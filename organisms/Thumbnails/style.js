import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  float: left;
  margin: 0 20px 20px 0;
  img.border-image{
    z-index: 1;
  }
`

export const StyledBlueBackground = styled.div`
  width: 208px;
  position: absolute;
  top: 5px;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 154px;
    height: 167px;
  }
  img{
    border-radius: 16px;
  }
  p{
    position: absolute;
    bottom: 0;
    z-index: 1;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    width: 100px;
    color: #FFFFFF;
    left:  16px;
    @media (max-width: 768px) {
      bottom: 16px;
    }
  }
`
