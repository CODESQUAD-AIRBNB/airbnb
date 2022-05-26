import * as S from '@components/SearchBar/SearchBar.style';
import SearchButton from '@components/SearchBar/SearchButton';

export const SEARCH_BAR_SIZE: { [key: string]: string } = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

export type SearchBarTypes = {
  isActiveSearchBar: boolean;
  size: string;
};

const SearchBar = ({ isActiveSearchBar, size }: SearchBarTypes) => {
  return (
    <S.Container size={size}>
      <SearchButton isButtonActive={isActiveSearchBar} size={size} />
    </S.Container>
  );
};

export default SearchBar;
