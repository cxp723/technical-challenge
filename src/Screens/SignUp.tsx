import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientWrapper from '../Components/GradientWrapper';
import CustomInput from '../Components/CustomInput';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import {signUp} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';

const initialFields = {
	name: '',
	email: '',
	password: ''
};

const SignUp = ({navigation}: any) => {
	const [formFields, setFormFields] = useState(initialFields);
	const dispatch = useDispatch();
	const setField = (fieldName, value) => {
		setFormFields({...formFields, [fieldName]: value})
	}

	const signedUp = useSelector(store => store.userSlice.signedUp);

	useEffect(() => {
		if (signedUp) {
			navigation.navigate('Login')
		}
	}, [signedUp])

	return (
		<GradientWrapper>
			<Header title="Sign up with Email" />
			<KeyboardAvoidingView style={styles.container}>
				<CustomInput title='Your name' onChangeText={(text) => setField('name', text)} value={formFields.name} />
				<CustomInput title='Email' onChangeText={(text) => setField('email', text)} value={formFields.email} keyboardType='email-address' />
				<CustomInput title='Password'
				             helper='min 6 characters'
				             secureTextEntry
				             onChangeText={(text) => setField('password', text)}
				             value={formFields.password} />
				<View style={styles.buttonWrapper}>
					<CustomButton title='SIGN UP' green onPress={() => dispatch(signUp(formFields))}/>
				</View>
			</KeyboardAvoidingView>
		</GradientWrapper>
	)
}

export default SignUp;

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
	}
});

