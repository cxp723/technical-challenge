/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
	LogBox,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Profile from './src/Screens/Profile';
import {Provider} from 'react-redux';
import {navigationRef, store} from './src/store/store';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const App = () => {

	return (
		<Provider store={store}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="SignUp" component={SignUp} />
					<Stack.Screen name="Profile" component={Profile} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
