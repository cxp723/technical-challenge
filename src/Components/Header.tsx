import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const backIcon = require('../Assets/Back-icoon-2x.png');

const Header = ({title}) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
				<Image source={backIcon} style={styles.icon} resizeMode='contain' />
			</Pressable>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingTop: 50,
		paddingLeft: 8
	},
	backButton: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'flex-end',
		height: 41,
		width: 41,
		borderRadius: 22
	},
	title: {
		color: 'white',
		fontSize: 20,
		width: '100%',
		textAlign: 'center',
		paddingRight: 89
	},
	icon: {
		height: 20
	}
});
