import styled, { keyframes, css } from 'styled-components';

export const MsgErro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background-color: red;
  margin-top: 30px;
  border-radius: 5px;
  h1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const LinksText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const rotate = keyframes`
 from {
   transform: rotate(0deg);
 }

 to {
   transform: rotate(360deg);
 }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: green;
  color: #fff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  width: 150px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
