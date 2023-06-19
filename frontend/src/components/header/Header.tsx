import { FC, ReactElement } from 'react';
import Logo from '../../assets/svgs/Logo.svg';
import LogoSmall from '../../assets/svgs/Logo Small.svg';

import * as Styles from './styles/HeaderStyles';
import { Nav } from '../nav/Nav';

export const Header: FC = (): ReactElement => {
  return (
    <Styles.StyledHeaderContainer>
      <Styles.StyledHeaderWrapper>
        <Styles.StyledHeaderLogo>
          <img src={Logo} alt='' />
        </Styles.StyledHeaderLogo>
        <Styles.StyledHeaderLogoSmall>
          <img src={LogoSmall} alt='' />
        </Styles.StyledHeaderLogoSmall>
        <Nav />
        <div>
          <Styles.StyledHeaderLink href='/login'>Login</Styles.StyledHeaderLink>
        </div>
        <Styles.StyledHeaderButton type='button'>
          get started
        </Styles.StyledHeaderButton>
      </Styles.StyledHeaderWrapper>
    </Styles.StyledHeaderContainer>
  );
};
