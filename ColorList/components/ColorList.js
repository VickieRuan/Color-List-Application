import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

import ColorButton from './ColorButton'
import ColorForm from './ColorForm'

export default class ColorList extends Component {
  
  constructor() {
    super()
    
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = []
    this.state = {
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }

    this.newColor = this.newColor.bind(this)
  }
  
  
  newColor(color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    })
 
  }


  render() {
    const { backgroundColor, dataSource} = this.state
    return (
      <ListView style={[styles.container, {backgroundColor}]}
        dataSource={dataSource}
        renderRow={ (color) => (
          <ColorButton backgroundColor={color}
    /* invoke a function property 
      when the user clicks on the colors it will pass the color 
      that they clicked on to their parent via 2 way function binding */
          onSelect={this.props.onColorSelected}/>  
        )}
        renderHeader={ () => (
          <ColorForm onNewColor={this.newColor}/>
        )}>
     </ListView>
    )
  }
}

ColorList.defaultProps = {
  onColorSelected: f=>f   //dummy function
}

//optional function
ColorList.propTypes = {   
  onColorSelected: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor:'lightgrey',
    paddingTop:20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'

  }

});
