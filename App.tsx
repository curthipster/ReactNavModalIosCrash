/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, View} from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type TabNavigatorParamList = {
  Home: undefined;
  AnotherTab: undefined;
};

type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<TabNavigatorParamList>;
  Modal: undefined;
};

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.push('Modal')}>
        <Text style={{color: 'blue'}}>Open modal</Text>
      </Pressable>
    </View>
  );
}

function AnotherTabScreen() {
  return <View />;
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AnotherTab" component={AnotherTabScreen} />
    </Tab.Navigator>
  );
}

function Modal() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
      }}>
      <Pressable
        onPress={() =>
          navigation.replace('TabNavigator', {screen: 'AnotherTab'})
        }>
        <Text style={{color: 'blue'}}>Navigate to another tab</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="TabNavigator" component={TabNavigator} />
        <RootStack.Screen
          options={{presentation: 'modal'}}
          name="Modal"
          component={Modal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
