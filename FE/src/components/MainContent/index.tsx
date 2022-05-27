import { MainCategory } from '@components/MainContent/MainCategory';
import * as S from '@components/MainContent/MainContent.style';
import { mainContentData, MainContentDataType } from '@components/MainContent/constants';
const MainContent = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MainTitle>어디서나, 여행은 살아보는 거야!</S.MainTitle>
        <S.Test>
          {mainContentData.map((trip: MainContentDataType) => (
            <MainCategory trip={trip} />
          ))}
        </S.Test>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
