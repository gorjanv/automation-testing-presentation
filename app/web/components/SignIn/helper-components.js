import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: absolute;
  width: 400px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  margin: -150px 0px 0px -200px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1em 0;
`;