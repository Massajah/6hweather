import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

const Clock = () => {
    const [value, setValue] = useState()
    const [loaded] = useFonts({
      AmaticSC: require('../assets/fonts/AmaticSC-Bold.ttf')
    })

useEffect(() => {
    setInterval(() => {
        const date = new Date()
        setValue(date.toLocaleTimeString())
    }, 1000)
}, [])    

if (!loaded) {
  return null
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>6h Forecast</Text>
      <Text style={styles.label}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
    },
    label: {
        fontSize: 35,
        fontWeight: "bold",
    },
    title: {
      fontSize: 70,
      fontWeight: "600",
      color: "#1E40AF",
      marginBottom: 50,
      fontFamily: "AmaticSC"
    }
  });

export default Clock