import styled from 'styled-components';

export const StyledVideoContainer = styled.div`
  margin-top: 120px;
`
export const StyledVideoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledYoutubePlay = styled.button`
  width: 138px;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  height: max-content;
  display: flex;
  align-items: center;
  border: 0;
  span{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    margin-left: 10px;
  }
`;

export const StyledVideoTitle = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  text-shadow: 0px 3.27273px 0px rgba(0, 29, 105, 0.25);
  width: 50%;
  margin-top: 20px;
`