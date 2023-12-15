import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assignment from './pages/Assignment';
import TakePicture from './pages/TakePicture';
import ViewPicture from './pages/ViewPicture';

const stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Assignment'>
        <stack.Screen name='Assignment' component={Assignment}/>
        <stack.Screen name='TakePicture' component={TakePicture}/>
        <stack.Screen name='ViewPicture' component={ViewPicture} />
      </stack.Navigator>
    </NavigationContainer>
  );
};