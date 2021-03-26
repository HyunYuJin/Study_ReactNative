import React from "react"
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { firebase_db } from '../firebaseConfig';

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function LikeCard({ content, navigation }) {
    const detail = () => {
      navigation.navigate('DetailPage', {idx: content.idx})
    };

    const remove = () => {
      const user_id = Constants.installationId;
      firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
          Alert.alert("삭제 완료");
          navigation.navigate('LikePage')
      })
      .catch(function(error) {
        Alert.alert("꿀팁이 해제에 실패하였습니다.");
        console.log("Remove failed: " + error.message);
      });
    };

    return (
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>

                <View>
                  <TouchableOpacity style={styles.button} onPress={() => detail()}>
                    <Text style={styles.buttonText}>자세히보기</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => remove()}>
                    <Text style={styles.buttonText}>찜해제</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  }
});