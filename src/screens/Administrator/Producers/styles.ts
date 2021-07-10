import { IApplicants } from '@services/AdministratorService';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
`;

export const EmptyView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LeftSwipeView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #de0b20;
  padding: 16px 16px;
`;

export const RightSwipeView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #6d43a1;
  padding: 16px 16px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
export const Header = styled.Text`
  align-self: center;
  font-size: 30px;
  padding: 15px;
  font-weight: bold;
  font-family: Lato;
`;

export const SwipeText = styled.Text`
  color: #fff;
`;

export const ListaChata = styled(FlatList).attrs(
  () => ({}),
)`` as unknown as FlatList<IApplicants>;

export const LeftSwipeIcon = styled(FontAwesome).attrs(() => ({
  color: '#FFF',
  size: 30,
  name: 'remove',
}))``;

export const RightSwipeIcon = styled(FontAwesome).attrs(() => ({
  color: '#FFF',
  size: 30,
  name: 'check',
}))``;
