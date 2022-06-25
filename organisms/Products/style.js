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
  background-color: #FFE0D9;
  border: 5px solid #FFE0D9;
  border-radius: 24px 24px 0 24px;
  padding: 0;
`;

export const StyledProducts = styled.ul`
  background-color: #FFFFFF;
  border-radius: 24px;
  margin: 0;
  padding: 0;
`;

export const StyledSelectedProducts = styled.ul`
  border-radius: 20px;
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledSelectedProductLI = styled.li`
  display: flex;
  align-items: center;
  width: 32%;
  justify-content: space-between;
  background-color: white;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: 2px solid white;
  &:hover{
    border: 2px solid #E63732;
  }
`;
export const StyledSelectedProductContainer = styled.div`
  margin: auto 0;
`;

export const StyledSelectedProductTitle = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #202F58;
  margin: 0 0 8px 0;
`;
export const StyledSelectedProductPrice = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #202F58;
  margin: 0;
`;