import styled, { css } from 'styled-components';

import { SEARCH_BAR_SIZE } from '@components/SearchBar';

const sizeStyles = css<{ size: string }>`
  ${({ size }) =>
    size === SEARCH_BAR_SIZE.SMALL &&
    css`
      width: 410px;
      height: 48px;
      border-radius: 30px;

      ${SearchButton} {
        width: 32px;
        height: 32px;
      }
    `}

  ${({ size }) =>
    size === SEARCH_BAR_SIZE.LARGE &&
    css`
      width: 916px;
      height: 76px;
      border-radius: 60px;

      ${SearchButton} {
        width: 40px;
        height: 40px;
      }
    `}
}
`;

export const Container = styled.header<{ size: string }>`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey4};
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}
`;

export const SearchButton = styled.button<{ isContentWillShow: boolean }>`
  display: flex;
  gap: 8px;
  ${({ isContentWillShow }) => isContentWillShow && 'width: 90px !important;'}
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;

export const ButtonContent = styled.span`
  position: relative;
  top: 1px;
  color: ${({ theme }) => theme.color.white};
`;
