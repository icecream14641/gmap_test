/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Data from '../component/Data.js';

export default class HouseDatas extends Component {
  render() {
    // const { region } = this.props;
    //console.log(region);
    var tmp_array = [
     { title: "便宜的雅房", rent: 10000, area: "寶山", score: 3 },
     { title: "昂貴的套房", rent: 2000, area: "寶山", score: 1},
     { title: "破爛的房子", rent: 500, area: "進德", score: 5 }
    ];
    return (
      <View>
        <Data key={1} name={'uu'} />
        <Data key={2} name={'kk'} />
        {
          tmp_array.map(function(val, index){
            return (<Data key={index+2} title={val.title} rent={val.rent} area={val.area} />)
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});