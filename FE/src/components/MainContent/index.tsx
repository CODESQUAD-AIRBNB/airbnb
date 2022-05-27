import { MainCategory } from '@components/MainContent/MainCategory';
import * as S from '@components/MainContent/MainContent.style';
import { mainContentData, MainContentDataType } from '@components/MainContent/constants';
const MainContent = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MainContentTitle>어디서나, 여행은 살아보는 거야!</S.MainContentTitle>
        <S.MainCategoryWrapper>
          {mainContentData.map((categoryData: MainContentDataType) => (
            <MainCategory categoryData={categoryData} />
          ))}
        </S.MainCategoryWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
