import styled from 'styled-components';

const borderColor = " #FEA38E";
const backgroundColor = "#FFFFFF";
const red = "#E53732";

export const StyledInputText = styled.input`
  width: 100%;
  background: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 40px;
  padding: 10px 15px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #202F58;
`
export const StyledInputCheckbox = styled.input`
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
    border-radius: 40px;
    margin: 0 10px;
`

export const StyledInputSelect = styled.select`
  width: 100%;
  background: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 40px;
  padding: 10px 15px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #202F58;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljk4MTI3IDcuMDNDNS43MTU1OSA3LjAzIDUuNDQ5OTEgNi45MzIxMiA1LjI0MDE2IDYuNzIyMzdMMC4zMDQxMzIgMS43ODYzNEMtMC4xMDEzNzcgMS4zODA4MyAtMC4xMDEzNzcgMC43MDk2NDIgMC4zMDQxMzIgMC4zMDQxMzJDMC43MDk2NDIgLTAuMTAxMzc3IDEuMzgwODMgLTAuMTAxMzc3IDEuNzg2MzQgMC4zMDQxMzJMNS45ODEyNyA0LjQ5OTA2TDEwLjE3NjIgMC4zMDQxMzJDMTAuNTgxNyAtMC4xMDEzNzcgMTEuMjUyOSAtMC4xMDEzNzcgMTEuNjU4NCAwLjMwNDEzMkMxMi4wNjM5IDAuNzA5NjQyIDEyLjA2MzkgMS4zODA4MyAxMS42NTg0IDEuNzg2MzRMNi43MjIzNyA2LjcyMjM3QzYuNTEyNjIgNi45MzIxMiA2LjI0Njk1IDcuMDMgNS45ODEyNyA3LjAzWiIgZmlsbD0iIzIwMkY1OCIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position-x: calc(100% - 15px);
  background-position-y: 15px;
`

export const StyledInputTitle = styled.p`
  margin: 0 0 8px 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: ${red};
  padding-left: 10px;
  text-align: left;
  display: inline-block;
`
export const StyledInputLabel = styled.label`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  a{
    color: ${red};
  }
`

export const StyledInputSubmit = styled.input`
  background: ${red};
  border-radius: 40px;
  border: 0;
  padding: 10px 15px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  color: white;
  float: right;
`

export const StyledContainer = styled.div`
  background: #FFFFFF;
  border: 4px solid #FFE0D9;
  border-top: 0;
  border-radius: 0 0 24px 24px;
  display: inline-block;
  padding: 24px 0;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    border-radius: 24px;
    border: 4px solid #FFE0D9;
    margin-top: 40px;
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

export const StyledErrorMessage = styled.span`
  font-size: 10px;
  margin-left: 5px;
  display: inline-block;
  opacity: .7;
`