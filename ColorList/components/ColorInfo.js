import React from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native'

import ColorTools from 'color'

//state list functional component
const ColorInfo = ({ backgroundColor, onSelect=f=>f }) => {
    const color = ColorTools(backgroundColor).negate() //opposite color
	return (
		<TouchableHighlight
		  style={[styles.container,{backgroundColor}]}
		  onPress={onSelect}>
		  <Text style={[styles.text, {color}]}>{backgroundColor}</Text>
		</TouchableHighlight>
		)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		fontSize: 40,
		margin: 10
	}
})

export default ColorInfo