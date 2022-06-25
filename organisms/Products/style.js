import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  align-items: end;
  margin-top: 120px;
  width: 100%;
`;
export const StyledPopularIcon = styled.div`
  position: absolute;
  left: 50%;
  top: -10px;
`;
export const StyledButton = styled.button`
  background: #F5F5F5;
  border: 0;
  padding: 20px;
  border-radius: 24px 24px 0 0;
  text-align: center;
  width: 100%;
  position: relative;
  &:first-child{
    border-top-right-radius: 0;
  }
  &:last-child{
    border-top-left-radius: 0;
  }
  p{
    display: block;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    color: #3150A2;
    &.price{
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #969696;
      margin-top: 8px;
    }
  }
  &.popular{
    height: 130%;
    background: #FFE0D9;
    p{
      color: #E53732;
      font-weight: 700;
      font-size: 16px;
      &.price{
        font-size: 20px;
      }
    }
  }
`;

export const StyledProductTabContainer = styled.div`
  background-color: white;
  border: 5px solid #FFE0D9;
  border-radius: 24px;
`;