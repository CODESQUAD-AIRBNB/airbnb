import * as S from '@components/MainContent/MainContent.style';
import { MainContentDataType } from '@components/MainContent/constants';

type ContentTypes = {
  categoryData: MainContentDataType;
};

export const MainCategory = ({ categoryData }: ContentTypes) => {
  return (
    <div>
      <S.ImgWrapper src={categoryData.url} />
      <S.Subtitle>{categoryData.title}</S.Subtitle>
    </div>
  );
};
