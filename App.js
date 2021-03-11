import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, TouchableOpacity, Image } from 'react-native';
import favicon from "./assets/favicon.png";

// 실제 화면이 표시되는 공간
// 화면을 구성하는 부분은 전부 함수 형태로 구성이 되어있다.
export default function App() {
  const customPress = () => {
    Alert.alert("팝업입니다.");
  }

  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있다.")
  }

  // React Native를 개발하다보면 권장사항을 알려주는 경고창이 뜬다.
  // 이는 다음 명령어로 가려줄 수 있다.
  console.disableYellowBox = true;
  
  return (
    // View: 화면의 영역을 잡아주는 엘리먼트
    // 스타일시트를 통해 영역을 잡을 수 있다.
    <View style={ styles.container }>
      <View style={ styles.subContainerOne }>
        <Text>문자는 Text 태그 사이에 작성해야한다.</Text>
      </View>
      <View style={ styles.subContainerTwo }>
        <Text style={ styles.textStyle }>영역을 충분히 갖는 텍스트</Text>
      </View>

      <ScrollView style={ styles.container }>
        <View style={ styles.textContainer }>
          <Text style={ styles.textStyle }>ScrollView Text1</Text>
        </View>
        <View style={ styles.textContainer }>
          <Text style={ styles.textStyle }>ScrollView Text2</Text>
        </View>
        <View style={ styles.textContainer }>
          <Text style={ styles.textStyle }>ScrollView Text3</Text>
          {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있다. */}
          <Button 
            style={ styles.buttonStyle } 
            title="버튼입니다 "
            color="#f194ff" 
            onPress={ customPress }
          />
        </View>
      </ScrollView>

      <ScrollView style={ styles.container }>
        <TouchableOpacity style={ styles.textContainer } onPress={ customAlert }>
          <Text style={ styles.textStyle }>채팅방A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.textContainer } onPress={ customAlert }>
          <Text style={ styles.textStyle }>채팅방B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.textContainer } onPress={ customAlert }>
          <Text style={ styles.textStyle }>채팅방C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.textContainer } onPress={ customAlert }>
          <Text style={ styles.textStyle }>채팅방D</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={ styles.container }>
        {/* 이미지 태그 soruce 부분에 이미지주소 넣기 */}
        <Image
          source={ favicon }
          resizeMode={ "contain" }
          style={ styles.imageStyle }
        />
      </View>
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27' }}
          resizeMode={ "cover" }
          style={ styles.imageStyle }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainerOne: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainerTwo: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: "center"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});