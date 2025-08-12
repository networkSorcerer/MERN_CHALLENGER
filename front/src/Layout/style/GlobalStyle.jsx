import { creatGlobalStyle } from "styled-components";

const GlobalStyle = craeteGlabalStyle`
`;

export const Section = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
