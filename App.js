import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// 실제 화면이 표시되는 공간
// 화면을 구성하는 부분은 전부 함수 형태로 구성이 되어있다.
export default function App() {
  
  // React Native를 개발하다보면 권장사항을 알려주는 경고창이 뜬다.
  // 이는 다음 명령어로 가려줄 수 있다.
  console.disableYellowBox = true;
  
  return (
    // View: 화면의 영역을 잡아주는 엘리먼트
    // 스타일시트를 통해 영역을 잡을 수 있다.
    <View style={styles.container}>
      <View style={ styles.subContainerOne }>
        <Text>문자는 Text 태그 사이에 작성해야한다.</Text>
      </View>
      <View style={ styles.subContainerTwo }>
        <Text style={ styles.textStyle }>영역을 충분히 갖는 텍스트</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>ScrollView Text1</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>ScrollView Text2</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>ScrollView Text3</Text>
        </View>
      </ScrollView>
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
  }
});
