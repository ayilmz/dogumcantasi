import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  background-color: white;
  border-bottom: 3px solid #FFE0D9;
  padding: 24px 0;
`
export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  li{
    margin-left: 30px;
    a{
      text-decoration: none;
      font-style: normal;
      font-size: 16px;
      text-align: right;
      color: #0D1835;
      font-family: 'M PLUS Rounded 1c', sans-serif;
      font-weight: 300;
      &:hover{
        color: #E53732;
      }
    }
  }
`;

export const StyledHamburgerMenu = styled.li`
  background: #FFE0D9;
  padding: 18px 18px 9px 18px;
  border-radius: 24px 24px 24px 0;
  margin-left: 43px !important;
  cursor: pointer;
  &:hover{
    span{
      color: #0D1835;
    }
  }
  span{
    color: #E53732;
    font-size: 13px;
    display: block;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 700;
  }
`