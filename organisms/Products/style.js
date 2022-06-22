import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const StyledButton = styled.button`
  span{
    display: block;
  }
  ${({ popular }) => popular && `
    height: 130%;
  `}
`;