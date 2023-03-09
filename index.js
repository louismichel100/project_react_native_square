/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login1 from './App2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

AppRegistry.registerComponent(appName, () => App);

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            //options={{title: 'Welcome'}}
          />
          <Stack.Screen name="login1" component={Login1} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


