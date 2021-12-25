import styled from 'styled-components';

export const StyledButton = styled.button`
width: 22.58px;
height: 22.58px;
background-color: ${({ theme }) => theme.colors.grey}};
color:${({ theme }) => theme.colors.white}};
border-radius: 50%;
border:none;
display:flex ;
justify-content:center;
align-items:center;

svg {
  width: 100%;
  height: 100%;
}
`;
