import * as S from '@components/MainContent/MainContent.style';
import { MainContentDataType } from '@components/MainContent/constants';

type ContentTypes = {
  trip: MainContentDataType;
};

export const MainCategory = ({ trip }: ContentTypes) => {
  return (
    <div>
      <S.ImgWrapper src={trip.url} />
      <S.Subtitle>{trip.title}</S.Subtitle>
    </div>
  );
};
