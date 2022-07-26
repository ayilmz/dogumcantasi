import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: #FFFFFF;
  border: 4px solid #FFE0D9;
  border-top: 0;
  border-radius: 0 0 24px 24px;
  display: inline-block;
  padding: 24px 0;
  position: relative;
  @media (max-width: 768px) {
    border-radius: 24px;
    border: 4px solid #FFE0D9;
  } 
  ul{
    padding: 0 70px;
    margin: 0;
    @media (max-width: 768px) {
      padding: 0 20px;
    } 
    li{
      margin-bottom: 13px;
    }
  }
`;

export const StyledTitle = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 47px;
  text-align: center;
  color: #202F58;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    width: 60%;
    text-align: left;
    padding-left: 20px;
  } 
`;
export const StyledSubTitle = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  background: linear-gradient(93.83deg, #E53732 27.87%, #EF265A 89.79%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 47px;
  } 
`;