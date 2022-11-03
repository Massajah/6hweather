import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import * as Location from "expo-location"
import Weather from './screens/Weather'
import Clock from './screens/Clock'

export default function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async() => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      try {
          if (status === "granted") {
              const location = await Location.getCurrentPositionAsync({ accuracy: 6 })
              setLatitude(location.coords.latitude)
              setLongitude(location.coords.longitude)
              setIsLoading(false)
          } else {
              setIsLoading(false)
          }
      } catch (error) {
          alert(error)
          setIsLoading(false)
      }
    })()
  
  }, [])
  
  if (isLoading) {
      return <View style={styles.container}><Text>Retrieving location...</Text></View>
  } else {
      return (
          <View style={styles.container}>
              <Clock />
              <Text style={styles.label}>Your location</Text>
              <Text>{latitude.toFixed(3)}, {longitude.toFixed(3)}</Text>
              <Weather latitude={latitude} longitude={longitude} />
          </View>
)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED7AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
      fontWeight: "bold",
      marginTop: 10
  }
});
