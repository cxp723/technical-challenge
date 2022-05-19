import React, {useEffect, useState} from 'react';
import {View, Text, Button, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Components/Header';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import GradientWrapper from '../Components/GradientWrapper';
import {logIn, setUnsigned, signUp} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';

const initialFields = {
	email: '',
	password: ''
};

const Login = ({navigation}: any) => {
	const dispatch = useDispatch();

	const name = useSelector(store => store.userSlice.name);
	const hasError = useSelector(store => store.userSlice.hasError);

	useEffect(() => {
		dispatch(setUnsigned());
	}, []);

	useEffect(() => {
		if (name) {
			navigation.navigate('Profile')
		}
	}, [name])
	const [formFields, setFormFields] = useState(initialFields);

	const setField = (fieldName, value) => {
		setFormFields({...formFields, [fieldName]: value})
	}

	return (
		<GradientWrapper>
			<Header title="Log in" />
			<KeyboardAvoidingView style={styles.container}>
				<CustomInput title='Email' onChangeText={(text) => setField('email', text)} value={formFields.email} keyboardType='email-address' />
				<CustomInput title='Password'
				             secureTextEntry
				             onChangeText={(text) => setField('password', text)}
				             value={formFields.password} />
				{hasError && (
					<View style={styles.error}>
						<Text style={styles.errorText}>
							Email or password is not correct
						</Text>
					</View>
				)}
				<View style={styles.buttonWrapper}>
					<CustomButton title='LOG IN' green onPress={() => dispatch(logIn(formFields))} />
				</View>
				{hasError && (
						<Text style={styles.forgotPassword}>
							Forgot my password
						</Text>
				)}
			</KeyboardAvoidingView>
		</GradientWrapper>
	)
}

export default Login;

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingLeft: 38,
		paddingRight: 38,
		paddingBottom: 21,
		width: '100%',
		flex: 1
	},
	buttonWrapper: {
		width: 154,
		marginTop: 19,
		alignSelf: 'center'
	},
	error: {
		padding: 4,
		backgroundColor: '#f13838',
		alignSelf: 'center',
		borderRadius: 4,
		marginTop: 8
	},
	errorText: {
		color: 'white',
		fontWeight: 'bold'
	},
	forgotPassword: {
		color: 'white',
		textAlign: 'center',
		marginTop: 25,
		fontWeight: 'bold'
	}
});