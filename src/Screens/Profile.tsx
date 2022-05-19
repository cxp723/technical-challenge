import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../Components/CustomInput';
import {connect, useDispatch, useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import {clearUserData, updateUser} from '../store/store';

const Profile = ({navigation, name, email}: any) => {
	const dispatch = useDispatch();

	const [formFields, setFormFields] = useState({name, email});
	const setField = (fieldName, value) => {
		setFormFields({...formFields, [fieldName]: value})
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentWrapper}>
				<Text style={styles.heading}>PROFILE</Text>
				<CustomInput title='Your name' onChangeText={(text) => setField('name', text)} value={formFields.name} dark />
				<CustomInput title='Email'
				             onChangeText={(text) => setField('email', text)}
				             value={formFields.email}
				             dark
				             keyboardType='email-address' />
			</View>
			<View style={styles.buttonWrapper}>
				<CustomButton title='LOG OUT' transparent withBorder onPress={() => {
					dispatch(clearUserData());
					navigation.navigate('Home')
				}}/>
			</View>
			<View style={styles.bottomBar}>
				<View style={styles.bottomButtonWrapper}>
					<CustomButton title='DONE' green onPress={() => dispatch(updateUser(formFields))}/>
				</View>
			</View>
		</View>
	)
}

const profileSelector = store => ({name: store.userSlice.name, email: store.userSlice.email});

export default connect(profileSelector)(Profile);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f8f8f8',
		paddingTop: 50,
		width: '100%',
		flex: 1
	},
	heading: {
		color: '#434343',
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 20
	},
	contentWrapper: {
		paddingLeft: 18,
		paddingRight: 18,
	},
	buttonWrapper: {
		width: 154,
		marginTop: 'auto',
		marginBottom: 50,
		alignSelf: 'center'
	},
	bottomBar: {
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		height: 57
	},
	bottomButtonWrapper: {
		width: 129,
		top: -10,
	}
});
