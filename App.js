import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 23.815136;
const LONGITUDE = 90.425864;
const LATITUDE_DELTA = 0.115722816;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
var CORDINATES = [
  [{ latitude: 23.815136, longitude: 90.425864 },
  { latitude: 22.179244, longitude: 89.567112 }],

  [{ latitude: 23.815136, longitude: 90.425864 },
  { latitude: 23.525830, longitude: 89.178385 }],

  [{ latitude: 23.815136, longitude: 90.425864 },
  { latitude: 25.647241, longitude: 89.073114 }],

  [{ latitude: 23.815136, longitude: 90.425864 },
  { latitude: 21.799240, longitude: 92.448410 }],

  [{ latitude: 23.815136, longitude: 90.425864 },
  { latitude: 20.620617, longitude: 92.325083 }],
]

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }
  onRegionChange(region) {
    this.setState({ region })
  }


  render() {
    return (
      <View style={styles.container}>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
          zoomEnabled={true}
          maxZoomLevel={20}
          minZoomLevel={0}

        >
          {/* COORDINATES.forEach((item, index, CORDINATES) => {
              <Polyline
                coordinates={item}
                strokeColor="black"
                strokeWidth={1}
              />
            }); */}

          {/* //Shundorbon */}
          <Polyline
            coordinates={CORDINATES[0]}
            strokeColor="#272a63"
            strokeWidth={1}
          />

          {/* <Polyline
            coordinates={CORDINATES[1]}
            strokeColor="#272a63"
            strokeWidth={1}
          /> */}

          {/* //Kurigram */}
          <Polyline
            coordinates={CORDINATES[2]}
            strokeColor="#272a63"
            strokeWidth={1}
          />
          {/* //Thanchi */}
          <Polyline
            coordinates={CORDINATES[3]}
            strokeColor="#272a63"
            strokeWidth={5}
            lineCap="round"
          />

          {/* //Saint martins */}
          <Polyline
            coordinates={CORDINATES[4]}
            strokeColor="#272a63"
            strokeWidth={1}
          />


        </MapView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});