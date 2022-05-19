import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientWrapper = ({children, title}) => {

	return (
		<LinearGradient style={styles.container} colors={['#f3c442', '#fa7745']}>
			{title && (
				<View style={styles.badge}>
					<Text style={styles.title}>
						{title}
					</Text>
				</View>
			)}
			{children}
		</LinearGradient>
	)
}

export default GradientWrapper;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	badge: {
		position: 'absolute',
		alignItems: 'center',
		top: 40,
		left: -40,
		width: 200,
		transform: [{rotate: "-30deg"}],
		backgroundColor: '#f13838',
		paddingTop: 12,
		paddingBottom: 12,
	},
	title: {
		color: 'white',
	}
});