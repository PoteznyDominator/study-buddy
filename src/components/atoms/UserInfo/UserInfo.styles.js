import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 24px;
  margin-right: 14px;
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold}};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 0;
  padding: 0;
`;

export const UserAttendance = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.normal}};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 0;
`;
