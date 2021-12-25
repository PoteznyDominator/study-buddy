import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, value }) => {
    if (value < 3) return theme.colors.error;
    if (value < 4) return theme.colors.warning;
    return theme.colors.success;
  }};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 50%;
`;

export const StyledInfo = styled.div`
  padding: 25 20;
  margin: 0 14px 0 24px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 91px;

  &:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #dfe2e8;
  }
`;
