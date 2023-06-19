import { FC, ReactElement } from 'react';
import * as Styles from './styles/NavStyles';

export const Nav: FC = (): ReactElement => {
  return (
    <Styles.StyledNavContainer>
      <Styles.StyledNavWrapper>
        <Styles.StyledNavLink href=''>
          <li>Home</li>
        </Styles.StyledNavLink>
        <Styles.StyledNavLink href=''>
          <li>Explore</li>
        </Styles.StyledNavLink>
        <Styles.StyledNavLink href=''>
          <li>Pricing</li>
        </Styles.StyledNavLink>
        <Styles.StyledNavLink href=''>
          <li>Membership</li>
        </Styles.StyledNavLink>
        <Styles.StyledNavLink href=''>
          <li>Our Story</li>
        </Styles.StyledNavLink>
      </Styles.StyledNavWrapper>
    </Styles.StyledNavContainer>
  );
};
