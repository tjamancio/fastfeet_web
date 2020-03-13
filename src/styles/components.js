import styled from 'styled-components';

import colors from './colors';

export const Title = styled.div`
  color: ${colors.label};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 0;
  height: 36px;
  color: ${colors.white};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.table.attrs({
  cellspacing: 0,
  cellpadding: 0,
})`
  width: 100%;
  margin-top: 20px;

  border-collapse: separate;
  border-spacing: 0 15px;

  th {
    height: 25px;
    text-align: ${({ align }) => align || 'left'};
    vertical-align: center;

    &:first-child {
      text-align: center;
    }

    &:last-child {
      text-align: center;
    }
  }

  td {
    height: 57px;
    background: ${colors.white};
    vertical-align: middle;
    color: ${colors.text};
    font-size: 16px;

    &:first-child {
      min-width: 40px;
      text-align: center;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      text-align: center;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      font-size: 26px;
    }
  }
`;
