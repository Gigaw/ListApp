import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import LoginScreen from '../screens/Login';
import {useAppSelector} from '../hooks/redux';

export type RootStackParamList = {
  Main: undefined;
  Detail: {id: number};
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  // if ()
  const {user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          {!user ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
