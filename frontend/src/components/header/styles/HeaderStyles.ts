import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.header)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainPrimary};
  /* padding: 0 7.5rem; */

  @media screen and (max-width: 420px) {
    padding: 0 1.5rem;
  }
`;

export const StyledHeaderWrapper = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledHeaderLogo = styled(motion.div)`
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const StyledHeaderLogoSmall = styled(motion.div)`
  display: none;
  @media screen and (max-width: 420px) {
    display: flex;
  }
`;

export const StyledHeaderButton = styled(motion.button)`
  width: 188px;
  height: 57px;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => props.theme.colors.mainPrimary};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.mainPrimary};
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const StyledHeaderLink = styled(motion.a)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
`;
// export const StyledHeaderContainer = styled(motion.header)``;
