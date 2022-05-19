import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

const CustomButton = ({title, icon, transparent, green, withBorder, ...props}) => {
	const styles = createButtonStyles(transparent, green, withBorder);

	return (
		<Pressable style={styles.container} {...props}>
			{icon && (
				<Image source={icon} style={styles.icon} resizeMode='contain'/>
			)}
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	)
}

export default CustomButton;

const createButtonStyles = (transparent, green, withBorder) => StyleSheet.create({
	container: {
		backgroundColor: transparent ? 'transparent' : green ? '#11ce90' : 'white',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: transparent && !withBorder ? 'auto' : 43,
		width: '100%',
		padding: transparent && !withBorder ? 0 : 12,
		borderRadius: 22,
		borderWidth: withBorder ? 1 : 0,
		borderColor: '#d9d9d9'
	},
	title: {
		color: withBorder ? '#434343' : transparent || green ? 'white' : 'black',
		fontWeight: 'bold'
	},
	icon: {
		height: 18,
	}
});
