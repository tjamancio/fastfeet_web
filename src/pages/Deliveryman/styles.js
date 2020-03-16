import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  padding: 30px;

  label {
    font-weight: bold;
    color: ${colors.label};
    padding: 5px 0;
  }

  input {
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    height: 40px;
    padding: 0 20px;
    color: ${colors.text};
  }

  span {
    color: ${colors.danger};
    align-self: flex-start;
    margin: 5px 0 10px 0;
    font-weight: bold;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-start;

  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

export const DropzoneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;
