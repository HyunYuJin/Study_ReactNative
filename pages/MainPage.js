import React, { useState, useEffect } from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar'; // expo에서 제공해주는 상태바 스타일
import * as Location from "expo-location"; // expo-location 내에 있는 도구를 모두 Location으로 지칭하여 사용한다.
import axios from "axios"

export default function MainPage({ navigation, route }) {
  console.disableYellowBox = true;
  
  const [state, setState] = useState([]); // 기존 꿀팁을 저장하고 있을 상태 생성
  const [ready, setReady] = useState(true); // 준비 상태를 저장하고 있을 상태 생성
  const [cateState, setCateState] = useState([]); // 카테고리에 따른 각각의 꿀팁을 그때그때 저장관리할 상태 생성
  const [weather, setWeather] = useState({ temp : 0, condition : '' }); // 날씨 데이터 상태관리 상태 생성

  useEffect(()=>{
		// 1초 뒤에 실행
    setTimeout(()=>{
      navigation.setOptions({
        title: '나만의 꿀팁'
      });

      let tip = data.tip; // 꿀팁 데이터로 모두 초기화 준비
      setState(tip);
      setCateState(tip);
      getLocation();
      setReady(false);
    }, 1000)
    // 상태 값이 바뀌었지!! 그럼 화면이 다시 로딩된다!
  },[]);

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main;
      
      console.log(temp);
      console.log(condition);

      // 응답 받은 데이터를 상태관리
      setWeather({
        temp,condition
      });
    } catch (error) {
      // 혹시나 위치를 가져오지 못할 경우를 대비해서, 안내를 준비
      Alert.alert("위치를 찾을 수 없습니다.", "앱을 재실행 하세요.");
    }
  }

  const category = (cate) => {
    if (cate == "전체보기"){
      //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
      setCateState(state);
    } else{
      setCateState(state.filter((d) => {
          return d.category == cate;
      }));
    }
  }

	// 처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환된다.
  // useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환된다.
  return ready ? <Loading/> : (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.weather}>오늘의 날씨: {weather.temp + '°C   ' + weather.condition} </Text>
      <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('AboutPage')}><Text style={styles.aboutButtonText}>소개 페이지</Text></TouchableOpacity>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={()=>{category('꿀팁 찜')}} onPress={() => navigation.navigate('LikePage')}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         {cateState.map((content, i)=>{
            return (<Card content={content} key={i} navigation={navigation} />)
          })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 50,
    marginLeft: 20
  },
  weather:{
    alignSelf: "flex-end",
    paddingRight: 20,
    marginTop: 20
  },
  aboutButton: {
    width: 100,
    height: 40,
    padding: 15, 
    backgroundColor: "pink",
    borderRadius: 10,
    marginRight: 20,
    marginTop: 10,
    alignSelf: "flex-end"
  },
  aboutButtonText: {
    color: '#fff',
    textAlign: "center"
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center"
  },
  middleContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60
  },
  middleButtonAll: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#20b2aa",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding:15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 7
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 7
  },
  middleButtonText: {
    color: "#fff",
    fontWeight: "700",
    // 텍스트의 현재 위치에서의 정렬 
    textAlign: "center"
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
    borderRadius: 15,
    margin: 7
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10
  }
});

