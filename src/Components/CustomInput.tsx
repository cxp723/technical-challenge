import React from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const CustomInput = ({title, helper, dark, ...props}: any) => {
	const styles = createButtonStyles(dark);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{title}
				{helper && (
					<Text style={styles.helper}>
						{` (${helper})`}
					</Text>
				)}
			</Text>
			<TextInput {...props} style={styles.input}/>
		</View>
	)
}

export default CustomInput;

const createButtonStyles = (dark: boolean) =>
	StyleSheet.create({
		container: {
			width: '100%'
		},
		title: {
			color: dark ? '#434343' : 'white',
			fontSize: 14,
		},
		helper: {
			color: 'white'
		},
		input: {
			width: '100%',
			backgroundColor: dark ? '#ececec' : 'white',
			height: 35,
			borderRadius: 4,
			marginTop: 7,
			marginBottom: 7,
			padding: 8
		}
	});
