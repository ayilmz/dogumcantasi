import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  background: #FFE0D9;
  border: 4px solid #FFFFFF;
  border-radius: 24px 24px 0 0 ;
  margin-top: 32px;
  padding: 32px;
`;

export const StyledProgress = styled.ul`
  display: flex;
  justify-content: center;
  li{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #E53732;
    margin: 0 10px;
    span{
      background: #E53732;
      width: 33px;
      height: 33px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      text-align: center;
      color: #FFFFFF;
      margin-right: 6px;
    }
  }
`;
