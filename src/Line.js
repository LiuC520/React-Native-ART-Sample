import React from 'react'
import {
  View,
  ART,
  StyleSheet
} from 'react-native'

export default class Line extends React.Component{

  static navigationOptions = {
    title: 'Line',
  };

  render(){

    const path = ART.Path();
    path.moveTo(1,1); //将起始点移动到(1,1) 默认(0,0)
    path.lineTo(300,1); //连线到目标点(300,1)

    return(
      <View style={styles.container}>
        <ART.Surface width={300} height={2}>
          <ART.Shape d={path} stroke="#000000" strokeWidth={1} />
        </ART.Surface>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});