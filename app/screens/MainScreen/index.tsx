import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList} from 'react-native';
import AppListItem from '../../components/AppListItem';
import ScreenContainer from '../../components/ScreenContainer';
import {RootStackParamList} from '../../navigation';

const mock = [
  {title: 'fdajslfj', id: 1},
  {title: 'fdajslfj', id: 2},
];

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const MainScreen = ({navigation}: Props) => {
  return (
    <ScreenContainer>
      <>
        <FlatList
          data={mock}
          keyExtractor={el => `${el.id}`}
          renderItem={({item}) => (
            <AppListItem
              key={item.id}
              onPress={() => navigation.push('DetailScreen', {id: item.id})}
              title={item.title}
            />
          )}
        />
      </>
    </ScreenContainer>
  );
};

export default MainScreen;
