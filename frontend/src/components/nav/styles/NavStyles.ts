import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavContainer = styled(motion.nav)`
  max-width: 500px;
  width: 100%;
`;

export const StyledNavWrapper = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 3.125rem; */
`;
export const StyledNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
`;
// export const StyledNavContainer = styled(motion.nav)``;
// export const StyledNavContainer = styled(motion.nav)``;
// export const StyledNavContainer = styled(motion.nav)``;
// export const StyledNavContainer = styled(motion.nav)``;
// export const StyledNavContainer = styled(motion.nav)``;
