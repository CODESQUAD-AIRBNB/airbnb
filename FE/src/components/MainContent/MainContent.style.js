import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const MainContentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
`;

export const MainCategoryWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ImgWrapper = styled.img`
  width: 308px;
  height: 308px;
  border-radius: 20px;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
`;
