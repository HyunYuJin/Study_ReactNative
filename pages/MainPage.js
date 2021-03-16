import React,{useState,useEffect} from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';


export default function MainPage() {
  console.disableYellowBox = true;
  
  const [state, setState] = useState([]);
  const [ready, setReady] = useState(true)

  useEffect(()=>{
		// 1초 뒤에 실행
    setTimeout(()=>{
      setState(data)
      setReady(false)
    },1000)
    // 상태 값이 바뀌었지!! 그럼 화면이 다시 로딩된다!
  },[])

  // let tip = data.tip;
  let tip = state.tip;
	let todayWeather = 10 + 17;
  let todayCondition = "흐림"

	// 처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환된다.
  // useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환된다.
  return ready ? <Loading/> : (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
			<Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         {
          tip.map((content,i)=>{
            return (<Card content={content} key={i}/>)
          })
        }
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
    paddingRight: 20
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
  cardContainer: {
    marginTop: 10,
    marginLeft: 10
  }
});