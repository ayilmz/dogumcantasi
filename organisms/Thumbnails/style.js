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
  height: 143px;
  background: ${props => props.selected ? "white" : "#202F58"};
  border-radius: 16px;
  position: absolute;
  top: 5px;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
