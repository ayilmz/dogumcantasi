import styled from "styled-components";
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



