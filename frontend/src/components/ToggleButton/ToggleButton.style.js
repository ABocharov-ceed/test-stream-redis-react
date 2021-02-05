import styled from 'styled-components';

export const ToggleButtonBlock = styled.div`
  display: flex;
  width: 16vw;
  height: 4vh;
`;

const BaseButton = styled.button`
  text-align: center;
  width: 50%;
  height: 100%;
  border: 1px solid #bfc2c4;
  background-color: #fcfcfc;
  color: #4e6172;
  cursor: pointer;
`;

export const OnButton = styled(BaseButton)`
  border-radius: 5px 0 0 5px;
  border-right: none;
  ${props => {if(props.active) return `
    border: 1px solid #a1a9b3;
    background-color: #e8edf6;
    color: #3875cc;`
  }}
`;

export const OffButton = styled(BaseButton)`
  border-radius: 0 5px 5px 0;
  border-left: none;
  ${props => {if(props.active) return `
    border: 1px solid #a1a9b3;
    background-color: #e8edf6;
    color: #3875cc;`
  }}
`;