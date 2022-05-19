import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import GradientWrapper from '../Components/GradientWrapper';
import Button from '../Components/CustomButton';
import {useSelector} from 'react-redux';

const appleIcon = require('../Assets/Apple-logo.png');
const facebookIcon = require('../Assets/Facebook-icon-2x.png');
const googleIcon = require('../Assets/Google-icon-2x.png');
const foodStyles = require('../Assets/FoodStyles-logo-2x.png');

const Home = ({navigation}: any) => {
	const userName = useSelector(store => {
		console.log(store);
		return store.userSlice.name
	});

	return (
		<GradientWrapper title={'BETA VERSION'}>
			<View style={styles.container}>
				<Image source={foodStyles} style={styles.mainLogo} resizeMode='contain' />
				<Text style={styles.mainText}>
					Sign in to be able to save your preferences and settings.
				</Text>
				<Button title="Sign in with Apple" icon={appleIcon} />
				<Button title="Sign in with Facebook" icon={facebookIcon} />
				<Button title="Sign in with Google" icon={googleIcon} />
				<Button title="Sign up with Email" onPress={() => navigation.navigate('SignUp')} />
				<Button title="Login with Email" onPress={() => navigation.navigate('Login')} transparent />
				<Text style={styles.bottomText}>
					By signing in you accept the
					General Terms and Privacy Policy
				</Text>
			</View>
		</GradientWrapper>
	)
}

export default Home;

const styles = StyleSheet.create({
	container: {
		paddingTop: 93,
		paddingLeft: 70,
		paddingRight: 70,
		paddingBottom: 21,
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	mainLogo: {
		width: '100%',
	},
	mainText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18
	},
	bottomText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 13
	}
});