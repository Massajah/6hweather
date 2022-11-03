import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'

const API_URL = "https://api.openweathermap.org/data/2.5/forecast?"
const API_KEY = "03a6285fdadfcfd77c90b4263a133118"
const ICON_URL = "http://openweathermap.org/img/wn/"

const Weather = ({ latitude, longitude }) => {
    const [temp, setTemp] = useState()
    const [description, setDescription] = useState("")
    const [time, setTime] = useState()
    const [icon, setIcon] = useState()
    const [temp2, setTemp2] = useState()
    const [description2, setDescription2] = useState("")
    const [time2, setTime2] = useState()
    const [icon2, setIcon2] = useState()
    const [temp3, setTemp3] = useState()
    const [description3, setDescription3] = useState("")
    const [time3, setTime3] = useState()
    const [icon3, setIcon3] = useState()
    
useEffect(() => {
  const url = API_URL +
  "lat=" + latitude +
  "&lon=" + longitude +
  "&units=metric" +
  "&appid=" + API_KEY
  fetch(url)
  .then(res => res.json())
  .then(
    (result) => {
        setTemp(result.list[0].main.temp)
        setDescription(result.list[0].weather[0].description)
        setTime(result.list[0].dt_txt)
        setIcon(ICON_URL + result.list[0].weather[0].icon + "@2x.png")
        setTemp2(result.list[1].main.temp)
        setDescription2(result.list[1].weather[0].description)
        setTime2(result.list[1].dt_txt)
        setIcon2(ICON_URL + result.list[1].weather[0].icon + "@2x.png")
        setTemp3(result.list[2].main.temp)
        setDescription3(result.list[2].weather[0].description)
        setTime3(result.list[2].dt_txt)
        setIcon3(ICON_URL + result.list[2].weather[0].icon + "@2x.png")
    },
    (error) => {
        alert(error)
    }
  )
}, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <View style={styles.box}>
        <Text style={styles.label}>Current</Text>
        <Text>{time}</Text>
        <Text>Temp: {temp}</Text>
        <Text>{description}</Text>
        <Image source={{uri: icon}} style={{width: 100, height: 100}}/>
        </View>
        <View style={styles.box}>
        <Text style={styles.label}>3h</Text>
        <Text>{time2}</Text>
        <Text>Temp: {temp2}</Text>
        <Text>{description2}</Text>
        <Image source={{uri: icon2}} style={{width: 100, height: 100}}/>
        </View>
        <View style={styles.box}>
        <Text style={styles.label}>6h</Text>
        <Text>{time3}</Text>
        <Text>Temp: {temp3}</Text>
        <Text>{description3}</Text>
        <Image source={{uri: icon3}} style={{width: 100, height: 100}}/>
        </View>
        
        </ScrollView> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        marginTop: 10
    },
    container: {
      flex: 1,
      paddingTop: 40
    },
    scrollView: {
      backgroundColor: "#DBEAFE",
      marginBottom: 150,
      borderTopWidth: 2,
      borderBottomWidth: 2
    },
    box: {
      marginHorizontal: 22
    }
  });

export default Weather