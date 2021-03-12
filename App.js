import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// 실제 화면이 표시되는 공간
// 화면을 구성하는 부분은 전부 함수 형태로 구성이 되어있다.
export default function App() {
  const customPress = () => {
    Alert.alert("팝업입니다.");
  }
  // React Native를 개발하다보면 권장사항을 알려주는 경고창이 뜬다.
  // 이는 다음 명령어로 가려줄 수 있다.
  console.disableYellowBox = true;
  
  return (
    <ScrollView style={ styles.container }>
      <Text style={ styles.title }>나만의 꿀팁</Text>
        <Image source={ main } resizeMode={ "contain" } style={ styles.mainImage } />
        <ScrollView style={ styles.middleContainer } horizontal={ true }>
          <TouchableOpacity style={ styles.middleButton01 }><Text style={ styles.middleButtonText }>생활</Text></TouchableOpacity>
          <TouchableOpacity style={ styles.middleButton02 }><Text style={ styles.middleButtonText }>재태크</Text></TouchableOpacity>
          <TouchableOpacity style={ styles.middleButton03 }><Text style={ styles.middleButtonText }>반려견</Text></TouchableOpacity>
          <TouchableOpacity style={ styles.middleButton04 }><Text style={ styles.middleButtonText }>꿀팁 찜</Text></TouchableOpacity>
        </ScrollView>

        <View style={ styles.cardContainer }>
          {/* 하나의 카드 영역 */}
          <View style={ styles.card }>
            <Image style={ styles.cardImage } source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3' }} />
            <View style={ styles.cardText }>
              <Text style={ styles.cardTitle }>먹다 남은 피자를 촉촉하게!</Text>
              <Text style={ styles.cardDesc } numberOfLines={ 3 } ellipsizeMode='tail'>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
              <Text style={ styles.cardDate }>2021.03.12</Text>
            </View>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20
  },
  mainImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    // Flex의 영역에 없더라도 가능하다.
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
    padding: 15,
    backgroundColor: "#FDC453",
    borderRadius: 15,
    margin: 7
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#FE8D6F",
    borderRadius: 15,
    margin: 7
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9ADDC5",
    borderRadius: 15,
    margin: 7
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#F886A8",
    borderRadius: 15,
    margin: 7
  },
  middleButtonText: {
    color: "#FFF",
    fontWeight: "700",
    textAlign: "center"
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  cardImage: {
    // 이미지의 경우는 width, height 값을 주거나
    // flex와 같은 것으로 영역을 지정해주어야 표시가 된다.
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10
  }
});