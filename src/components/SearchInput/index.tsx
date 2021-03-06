import React from 'react';

import { Container, Input } from './styles';

interface ISearchInput {
  onChangeText(e: string): void;
  placeholder: string;
  placeholderTextColor: string;
}

function SearchInput({ onChangeText, ...props }: ISearchInput): JSX.Element {
  return (
    <Container>
      <Input {...props} onChangeText={onChangeText} />
    </Container>
  );
}

export default SearchInput;
