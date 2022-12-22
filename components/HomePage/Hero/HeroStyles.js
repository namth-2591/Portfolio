import styled from 'styled-components';
import theme from '/themes/default';

export const LeftSection = styled.div`
  width: 100%;
  @media ${theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
