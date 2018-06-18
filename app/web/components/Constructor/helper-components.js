import styled, { keyframes } from 'styled-components';

export const H1 = styled.h1`
  text-align: center;
`;

export const ConstructorWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Group = styled.fieldset`
  margin: 0px 0px 20px 0px; 
`;

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  &:before{
    z-index: 10;
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    margin: -20px 0px 0px -20px;
    border: 4px solid #d1d1d1;
    border-top-color: #0d5bd8;
    border-radius: 50%;
    animation: ${spinner} 0.7s linear infinite;
  }
`;

export const ImageWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;