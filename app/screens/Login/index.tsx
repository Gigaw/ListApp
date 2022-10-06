import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/AppButton';
import AppIntup from '../../components/AppInput';
import AppScreenContainer from '../../components/AppScreenContainer';
import {RootStackParamList} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AppScreenContainer>
      <View style={styles.contentContainer}>
        <AppIntup value={login} onChangeText={setLogin} name={'login'} />
        <AppIntup
          value={password}
          onChangeText={setPassword}
          name={'password'}
        />
        <AppButton
          onPress={() => navigation.navigate('Main')}
          text={'Войти'}
          style={styles.submitButton}
        />
      </View>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
  },
});

export default LoginScreen;
