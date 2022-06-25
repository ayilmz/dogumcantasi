import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  align-items: end;
  margin-top: 120px;
`;
export const StyledButton = styled.button`
  background: #F5F5F5;
  border: 0;
  padding: 20px 30px;
  border-radius: 24px 24px 0 0;
  text-align: center;
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