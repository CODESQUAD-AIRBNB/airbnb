import * as S from '@components/Header/Header.style';
import Logo from '@components/Header/Logo';
import MyPageButton from '@components/Header/MyPageButton';
import Navigation from '@components/Header/Navigation';

export type HeaderProps = {
  headerType: 'main' | 'detail';
};

const Header = ({ headerType }: HeaderProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <Navigation />
        <MyPageButton />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
