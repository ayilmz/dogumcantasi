import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  background: #FFE0D9;
  border: 4px solid #FFFFFF;
  border-radius: 24px 24px 24px 0 ;
  margin-top: 32px;
  padding: 32px;
  display: inline-block;
  position: relative;
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

export const StyledForm = styled.form`
  ul.form-elements{
    padding: 0;
    margin: 0;
    li{
      display: inline-block;
      width: 50%;
      margin-bottom: 15px;
      &:nth-child(even){
        text-align: right;
        p{
          padding-left: 20px;
        }
      }
      p{
        margin: 0 0 8px 0;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #E53732;
        padding-left: 10px;
        text-align: left;
      }
      input, select{
        width: 95%;
        background: #FFFFFF;
        border: 1px solid #FEA38E;
        border-radius: 40px;
        padding: 10px 15px;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #202F58;
      }
      select{
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljk4MTI3IDcuMDNDNS43MTU1OSA3LjAzIDUuNDQ5OTEgNi45MzIxMiA1LjI0MDE2IDYuNzIyMzdMMC4zMDQxMzIgMS43ODYzNEMtMC4xMDEzNzcgMS4zODA4MyAtMC4xMDEzNzcgMC43MDk2NDIgMC4zMDQxMzIgMC4zMDQxMzJDMC43MDk2NDIgLTAuMTAxMzc3IDEuMzgwODMgLTAuMTAxMzc3IDEuNzg2MzQgMC4zMDQxMzJMNS45ODEyNyA0LjQ5OTA2TDEwLjE3NjIgMC4zMDQxMzJDMTAuNTgxNyAtMC4xMDEzNzcgMTEuMjUyOSAtMC4xMDEzNzcgMTEuNjU4NCAwLjMwNDEzMkMxMi4wNjM5IDAuNzA5NjQyIDEyLjA2MzkgMS4zODA4MyAxMS42NTg0IDEuNzg2MzRMNi43MjIzNyA2LjcyMjM3QzYuNTEyNjIgNi45MzIxMiA2LjI0Njk1IDcuMDMgNS45ODEyNyA3LjAzWiIgZmlsbD0iIzIwMkY1OCIvPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: 15px;
      }
    }
  }
  ul.form-submit{
    display: flex;
    margin: 0;
    padding: 0;
    li{
      width: 50%;
      label{
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        a{
          color: #E63732;
        }
      }
      input[type=checkbox]{
        background: #FFFFFF;
        border: 1px solid #FEA38E;
        border-radius: 40px;
        margin: 0 10px;
      }
      input[type=submit]{
        background: #E63732;
        border-radius: 40px;
        border: 0;
        padding: 10px 15px;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        width: 95%;
        color: white;
        float: right;
      }    
    }
  }
  
`
